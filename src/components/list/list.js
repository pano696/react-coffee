import React from 'react';
import {Row, Col} from 'reactstrap';
import ListItem from '../listItem';

const List = (props) => {

  const {type, items, onItemSelected, filterCountry, filterWord} = props;

  const listing = (items) => {
    let newItems = [...items];

    if (filterWord && filterWord.length > 0) newItems = newItems.filter(item => item.name.indexOf(filterWord) >= 0);
    if (filterCountry) newItems = newItems.filter(item => item.country === filterCountry);

    return newItems;
  }

  return (
    <Row>
      <Col lg={{size: 10, offset: 1}}>
        <div className={`${type}__wrapper`}>
          {
            listing(items).map((item) => {
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
