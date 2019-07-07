const initialState = {
  bestsellers: [],
  coffee: [],
  goods: [],
  loading: false,
  error: false

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BESTSELLERS_REQUSTED':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'BESTSELLERS_LOADED':
      return {
        ...state,
        bestsellers: action.payload,
        loading: false,
        error: false
      };
    case 'BESTSELLERS_ERROR':
      return {
        ...state,
        loading: false,
        error: true
      };
    case 'COFFEE_REQUSTED':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'COFFEE_LOADED':
      return {
        ...state,
        coffee: action.payload,
        loading: false,
        error: false
      };
    case 'COFFEE_ERROR':
      return {
        ...state,
        loading: false,
        error: true
      };
    case 'GOODS_REQUSTED':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'GOODS_LOADED':
      return {
        ...state,
        goods: action.payload,
        loading: false,
        error: false
      };
    case 'GOODS_ERROR':
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
}

export default reducer;
