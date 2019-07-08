import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import DbConsumer from '../dbConsumer';
import {coffeeRequested, coffeeLoaded, coffeeError} from '../../actions/';
import List from '../list';
import Spiner from '../spinner';
import Error from '../error';

const Shop = (props) => {

  const {coffee, loading, error, history, filterCountry, filterWord} = props;

  if (loading) return <Spiner />
  if (error || coffee.length === 0) return <Error />

  return (
            <List
              type="shop"
              items={coffee}
              filterCountry={filterCountry}
              filterWord={filterWord}
              onItemSelected={(name) => {
                history.push(name)
              }} />
  )
}

const WithData = (View) => {
  return class extends Component {


    componentDidMount() {
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


export default DbConsumer()(connect(mapStateToProps, mapDispatchToProps)(withRouter(WithData(Shop))));
