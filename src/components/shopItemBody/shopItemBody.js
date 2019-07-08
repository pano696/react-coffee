import React, {Component} from 'react';
import {Col} from 'reactstrap';
import BeansLogo from '../beansLogo';
import DbConsumer from '../dbConsumer';
import Spiner from '../spinner';
import Error from '../error';

class ShopItemBody extends Component {

  state = {
    thisItem: [],
    error: false,
    load: false,
  }

  loadData = async () => {
    const {name, dbService} = this.props;
    const res = await dbService.getItem(name)
      .then(response => response)
      .catch((error) => console.log(error))
      this.setState({
        thisItem: res,
        loading: false
      })
  }

  componentDidMount() {
    this.setState({loading: true})
    this.loadData();
  }


  render() {
    if (this.state.load) return <Spiner />
    if (this.state.error) return <Error />

    return (
      <>
        <Col lg={{size: 5}} xs={{offset:1}}>
            <img className="shop__girl" src={this.state.thisItem.url} alt={this.state.thisItem.name} />
        </Col>
        <Col lg={{size: 4}}>
            <div className="title">About it</div>
              <BeansLogo color="black" />
            <div className="shop__point">
                <span>Country:</span>
                {this.state.thisItem.country}
            </div>
            <div className="shop__point">
                <span>Description:</span>
                {this.state.thisItem.description}
            </div>
            <div className="shop__point">
                <span>Price:</span>
                <span className="shop__point-price">{this.state.thisItem.price}</span>
            </div>
        </Col>
      </>
    )
  }
}

export default DbConsumer()(ShopItemBody);
