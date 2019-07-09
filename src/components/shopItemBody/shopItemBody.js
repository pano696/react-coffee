import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {withRouter} from 'react-router-dom';
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
        load: false
      })
  }

  componentWillMount() {
    this.setState({load: true})
    this.loadData();
  }


  render() {
    if (this.state.load) return <Spiner />
    if (this.state.error) return <Error />

    return (
      <Container>
        <Row>
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
        </Row>
        <Row>
          <Col xs={{size: 12}}>
            <button
              className="shop__point-back"
              onClick={() => this.props.history.goBack()}>
              Back
            </button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default DbConsumer()(withRouter(ShopItemBody));
