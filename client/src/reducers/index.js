import { combineReducers } from 'redux';
import portfolio from './portfolio_reducer';
import user from './user_reducer';

const rootReducer = combineReducers({
    portfolio,
    user
})

export default rootReducer;
