import {combineReducers, applyMiddleware, createStore} from 'redux';

import thunkMiddleware from 'redux-thunk';
import {myReducer} from '../screens/my-screen/store/my.store';

const rootReducer = combineReducers({
  my: myReducer,
});
const middleWareEnhancer = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, middleWareEnhancer);
export default store;
