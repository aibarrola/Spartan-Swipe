import axios from 'axios';
import { setAlert } from './alert';

import { ACCOUNT_DELETED, GET_PROFILE, GET_PROFILES, PROFILE_ERROR, CLEAR_PROFILE } from './types';

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

// Get all profiles 
// !!! (This may need to be changed in order to view only profiles that match)
// Reducer change as well ^
export const getProfile = () => async dispatch => {
    dispatch({ type: CLEAR_PROFILE});
    try
    {
        const res = await axios.get('/api/profile');
        dispatch({
            type: GET_PROFILES,
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
}

// Get profile by ID
export const getProfileById = userId => async dispatch => {
    try
    {
        const res = await axios.get(`/api/profile/user/${userId}`);
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
}

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
};

// Delete account and profile

export const deleteAccount = () => async dispatch => {
    if(window.confirm('Are you absolutely sure? This action can NOT be undone!'))
    {
        try
        {
            const res = await axios.delete('/api/profile');
    
            dispatch({
                type: CLEAR_PROFILE
            });
            dispatch({
                type: ACCOUNT_DELETED
            });
            dispatch(setAlert('Your account has been deleted.'))
        }
        catch(error)
        {
            dispatch({
                type: PROFILE_ERROR,
                payload: { message: error.response.statusText, status: error.response.status }
            });
        }
    }
};
