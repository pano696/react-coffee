import React, {Component} from 'react';
import {connect} from 'react-redux';
import DbConsumer from '../dbConsumer';
import {goodsRequested, goodsLoaded, goodsError} from '../../actions/';
import List from '../list';
import Spiner from '../spinner';
import Error from '../error';

const Goods = (props) => {

  const {goods, loading, error} = props;

  if (loading) return <Spiner />
  if (error || goods.length === 0) return <Error />

  return (
            <List
              type="shop"
              items={goods} />
  )
}

const WithData = (View) => {
  return class extends Component {


    componentDidMount() {
      const {dbService, goodsRequested, goodsLoaded, goodsError} = this.props;
      goodsRequested();
      dbService.getGoods()
        .then(response => goodsLoaded(response))
        .catch(() => goodsError())
    }

    render() {
      return <View {...this.props} />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    goods: state.goods,
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = {
  goodsRequested,
  goodsLoaded,
  goodsError
};


export default DbConsumer()(connect(mapStateToProps, mapDispatchToProps)(WithData(Goods)));
