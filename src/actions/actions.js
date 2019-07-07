const bestsellersRequested = () => {
  return {
    type: 'BESTSELLERS_REQUSTED',
  };
};

const bestsellersLoaded = (bestsellers) => {
  return {
    type: 'BESTSELLERS_LOADED',
    payload: bestsellers
  };
};

const bestsellersError = () => {
  return {
    type: 'BESTSELLERS_ERROR',
  };
};

const coffeeRequested = () => {
  return {
    type: 'COFFEE_REQUSTED',
  };
};

const coffeeLoaded = (coffee) => {
  return {
    type: 'COFFEE_LOADED',
    payload: coffee
  };
};

const coffeeError = () => {
  return {
    type: 'COFFEE_ERROR',
  };
};

const goodsRequested = () => {
  return {
    type: 'GOODS_REQUSTED',
  };
};

const goodsLoaded = (goods) => {
  return {
    type: 'GOODS_LOADED',
    payload: goods
  };
};

const goodsError = () => {
  return {
    type: 'GOODS_ERROR',
  };
};

export {
  bestsellersRequested,
  bestsellersLoaded,
  bestsellersError,
  coffeeRequested,
  coffeeLoaded,
  coffeeError,
  goodsRequested,
  goodsLoaded,
  goodsError
}
