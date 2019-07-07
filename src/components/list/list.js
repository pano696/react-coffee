import React from 'react';
import {Row, Col} from 'reactstrap';
import ListItem from '../listItem';

const List = (props) => {

  const {type} = props;

  return (
    <Row>
      <Col lg={{size: 10, offset: 1}}>
        <div className={`${type}__wrapper`}>

        </div>
      </Col>
    </Row>
  )
}

export default List;
