import { FETCH_REPOS } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case 'test':
            const newdata = action.payload.data.map(data => data.html_url);
            return [...state, ...newdata];
        case FETCH_REPOS:
            //debugger;
            // in console type "action" to inspect the action object
            // then look at payload -> data to see the repos fetched from api
            // if you remove reduxPromise from applyMiddleware (in Root.js)
            // you will see the action payload is a pending Promise
            const apidata = action.payload.data.map(data => data.html_url);
            return [...state, ...apidata];
        default:
            return state;
    }
}
