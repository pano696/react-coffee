import React from 'react';
import {ServiceContext} from '../../services';

const DbConsumer = () => (Wrapped) => {
    return (props) => {
      return (
        <ServiceContext.Consumer>
          {
            (dbService) => {
              return <Wrapped {...props} dbService={dbService} />
            }
          }
        </ServiceContext.Consumer>
      )
    }
};

export default DbConsumer;
