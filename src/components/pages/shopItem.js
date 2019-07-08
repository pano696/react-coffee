import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import {Container, Row, Col} from 'reactstrap';
import BeansLogo from '../beansLogo';
import coffeeGirl from './coffee_girl.jpg'
import './coffeePage.sass';
import DbConsumer from '../dbConsumer';
import {coffeeRequested, coffeeLoaded, coffeeError} from '../../actions/';
import Spiner from '../spinner';
import Error from '../error';

const ShopItem = (props) => {

  console.log(props)
  const {name, coffee} = props;



  return (
  <>
    <Header
      pageType="banner"
      page="coffee"
      title={name}/>
    <section className="shop">
        <Container>
            <Row>
                <Col lg={{size: 4}} xs={{offset:2}}>
                    <img className="shop__girl" src={coffeeGirl} alt="girl" />
                </Col>
                <div className="col-lg-4">
                    <div className="title">About our beans</div>
                    <BeansLogo color="black" />
                    <div className="shop__text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam doloremque ex officiis necessitatibus fugit dolorem mollitia, consequatur voluptas minus, vero quae pariatur placeat voluptate quo facere vitae officia delectus reprehenderit?
                    </div>
                </div>
            </Row>
        </Container>
    </section>
  </>
  )
}

const WithData = (View) => {
  return class extends Component {

    componentDidMount() {
      // console.log(props)
      const {dbService, coffeeRequested, coffeeLoaded, coffeeError} = this.props;
      coffeeRequested();
      dbService.getCoffee()
        .then(response => coffeeLoaded(response))
        .catch(() => coffeeError())
    }

    render() {
      return <View {...this.props} />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    coffee: state.coffee,
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = {
  coffeeRequested,
  coffeeLoaded,
  coffeeError
};

export default DbConsumer()(connect(mapStateToProps, mapDispatchToProps)(WithData(ShopItem)));
