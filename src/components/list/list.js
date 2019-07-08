import React from 'react';
import {Row, Col} from 'reactstrap';
import ListItem from '../listItem';

const List = (props) => {

  const {type, items, onItemSelected} = props;

  return (
    <Row>
      <Col lg={{size: 10, offset: 1}}>
        <div className={`${type}__wrapper`}>
          {
            items.map((item, index) => {
              return <ListItem
                        key={item.name}
                        type={type}
                        item={item}
                        onItemSelected={onItemSelected} />
            })
          }
        </div>
      </Col>
    </Row>
  )
}

export default List;
