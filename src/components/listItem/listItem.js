import React from 'react';

const ListItem = (props) => {

  const {type, title, imgLink, price} = props;

  return (
    <div className={`${type}__item`}>
      <img src={imgLink} alt={title} />
      <div className={`${type}__item-title`}>{title}</div>
      <div className={`${type}__item-price`}>{price}$</div>
    </div>
  )
}

export default ListItem;
