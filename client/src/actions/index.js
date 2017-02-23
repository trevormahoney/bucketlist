import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';
import authReducer from '../reducers/auth_reducer';
// import {
// 	AUTH_USER,
// 	UNAUTH_USER,
// 	AUTH_ERROR
// } from './types';

export const CREATE_POSTS = 'CREATE_POSTS';
const ROOT_URL = 'http://localhost:3000';
// const ROOT_URL = 'http://rest.learncode.academy/api/paul';

export function signinUser({ email, password }){
	return function(dispatch){
		axios.post(`${ROOT_URL}/signin`, {email, password})
		.then(response => {
			//This only kickstarts if the request was good...
			//We now update the state to unidcated authenticate user
			dispatch({ type: AUTH_USER });
			//This will put the token in localStorage. It's safe!!
			localStorage.setItem('token', response.data.token);
			//This sends us off to the /newitem view.
			browserHistory.push('/newitem');
		})
			.catch(response => dispatch(authError("Bad login info")));
	}
}

//prupose of type is to catch unauth_user case.
//flips auth flag to false and there won't be any links associated with them
//other thing to do is get rid of token.
export function signoutUser(){
	localStorage.removeItem('token');

	return {type: UNAUTH_USER}
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}
export function createPost(props) {
	const request = axios.post(`${ROOT_URL}/posts`, props);
	return {
		type: CREATE_POSTS,
		payload: request
	};
}
