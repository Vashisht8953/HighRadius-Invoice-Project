import { createStore, combineReducers } from 'redux';
import { data, changeSelected } from './reducers';

const store = createStore(combineReducers({
    data: data,
    changeSelected: changeSelected,
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({}));

export default store;