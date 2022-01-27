const initialState = {
  home: [],
  products: [],
  banners: []
};
const data_reducer = (
  state = initialState,
  action: {variable: any; type: any; payload: any},
) => {
  const screen = action.variable;
  switch (action.type) {
    
    case 'SET_DATA': {
      if (screen === 'home') {
        return {...state, home: action.payload};
      } else if (screen === 'products') {
        return {...state, products: action.payload};
      } else if (screen === 'carousel') {
        return {...state, banners: action.payload};
      } else {
        return state;
      }
    }
    default: {
      return state;
    }
  }
};
export default data_reducer;
