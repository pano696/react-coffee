import React, {Component} from 'react';
import {connect} from 'react-redux';
import DbConsumer from '../dbConsumer';
import {withRouter} from 'react-router-dom';
import {bestsellersRequested, bestsellersLoaded, bestsellersError} from '../../actions/';
import paper from './paper.jpg';
import List from '../list';
import Spiner from '../spinner';
import Error from '../error';
import './best.sass';

const Best = (props) => {

  const {bestsellers, loading, error, history} = props;

  if (loading) return <Spiner />
  if (error || bestsellers.length === 0) return <Error />

  const style = {'background': `url(${paper}) center center /cover no-repeat`};

  return (
    <section className="best" style={style}>
        <div className="container">
            <div className="title">Our best</div>
            <List
              type="best"
              items={bestsellers}
              onItemSelected={(name) => {
                history.push(`/coffee/${name}`)
              }}  />
        </div>
    </section>
  )
}

const WithData = (View) => {
  return class extends Component {


    componentDidMount() {
      const {dbService, bestsellersRequested, bestsellersLoaded, bestsellersError} = this.props;
      bestsellersRequested();
      dbService.getBestsellers()
        .then(response => bestsellersLoaded(response))
        .catch(() => bestsellersError())
    }

    render() {
      return <View {...this.props} />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    bestsellers: state.bestsellers,
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = {
  bestsellersRequested,
  bestsellersLoaded,
  bestsellersError
};


export default DbConsumer()(connect(mapStateToProps, mapDispatchToProps)(withRouter(WithData(Best))));
