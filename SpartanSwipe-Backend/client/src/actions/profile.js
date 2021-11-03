import axios from 'axios';
import { setAlert } from './alert';

import { GET_PROFILE, PROFILE_ERROR } from './types';

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
    try
    {
        const res = await axios.get('/api/profile/me');
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    }
    catch(error)
    {
        dispatch({ 
            type: PROFILE_ERROR,
            payload: { message: error.response.statusText, status: error.response.status }
         });
    }
};

// Create or update profile
export const createProfile = (formData, history, edit = false) => async dispatch => {
    try
    {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.post('/api/profile', formData, config);
        
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
        // If the profile has been editted, send alert saying the profile is updated otherwise send alert saying 
        // profile is created
        dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

        if(!edit)
        {
            history.push('/dashboard');
        }
    }
    catch(error)
    {
        const errors = error.response.data.errors;
        if(errors)
        {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({ 
            type: PROFILE_ERROR,
            payload: { message: error.response.statusText, status: error.response.status }
         });
    }
}