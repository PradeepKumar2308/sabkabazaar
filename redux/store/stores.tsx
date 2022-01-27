import {createStore, applyMiddleware} from 'redux';
import data_reducer from '../reducer/reducer';
import thunk from 'redux-thunk';
const store = createStore(data_reducer, applyMiddleware(thunk));

export {store};
