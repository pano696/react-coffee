import React from 'react';
import paper from './paper.jpg';
import List from '../list';
import Spiner from '../spinner';
import Error from '../error';
import './best.sass';

const Best = () => {

  const style = {'background': `url(${paper}) center center /cover no-repeat`};

  return (
    <section className="best" style={style}>
        <div className="container">
            <div className="title">Our best</div>
            <Error />
            <List
              type="best" />
        </div>
    </section>
  )
}

export default Best;
