import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import card from './card';


export default combineReducers({
    alert,
    auth,
    profile,
    card
});