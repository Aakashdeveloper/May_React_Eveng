import { combineReducers } from 'redux';
import propertyReducer from './propertyReducer';

const rootReducer = combineReducers({
    propertyReducer,
})

export default rootReducer;