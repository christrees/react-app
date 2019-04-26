import axios from 'axios';
import { CHANGE_AUTH, FETCH_REPOS } from './types';

export function fetchRepos() {
    const response = axios.get('https://api.github.com/users/christrees/repos');
    return {
        type: FETCH_REPOS,
        payload: response
    };
};

export function changeAuth(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
};
