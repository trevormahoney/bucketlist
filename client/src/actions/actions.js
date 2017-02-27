import axios from 'axios';
import { browserHistory } from 'react-router';
import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR,
	CREATE_POSTS
} from './types';

import authReducer from  '../reducers/auth_reducer';

const ROOT_URL = 'http://localhost:3000';

var config = {
	headers: { authorization: localStorage.getItem('token') }
}

export function createPost(props) {
	return function(dispatch){
		axios.post(`${ROOT_URL}/newitem`, { props }, config )
		.then(request => {
			dispatch({
				type: CREATE_POSTS,
				payload: request
			})
			browserHistory.push('/items');
		});
	}
}