import { combineReducers, createStore } from 'redux';
import messageReducer from './Reducers/messageReducer';

const reducers = combineReducers({
	messages: messageReducer,
});
const store = createStore(reducers);

export default store;
