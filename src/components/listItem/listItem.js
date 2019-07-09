import React from 'react';

const ListItem = (props) => {

  const {type, item, onItemSelected} = props;

  return (
    <div className={`${type}__item`} onClick={() => onItemSelected(`${item.name}`)}>
      <img src={item.url} alt={item.name} />
      <div className={`${type}__item-title`}>{item.name}</div>
      <div className={`${type}__item-price`}>{item.price}</div>
    </div>
  )
}

export default ListItem;
