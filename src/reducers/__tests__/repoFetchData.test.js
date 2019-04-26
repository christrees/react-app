import reposReducer from '../repoFetchData';

import { FETCH_REPOS } from '../../actions/types';

it ('sanity test check of reposReducer', () => {
    const action = {
        type: 'test',
        payload: {data: [{"html_url":'testpayload'}, {"html_url":'nextpayload'}]}
    };
    const newState = reposReducer([], action);
    expect(newState).toEqual(['testpayload', 'nextpayload']);
});

it ('can pass whatever along', () => {
    const action = {};
    const defaultState = reposReducer(["Whatever"], action);
    expect(defaultState).toEqual(["Whatever"]);
});


it ('handles actions of type unknown', () => {
    const newState = reposReducer(["Whatever"], { type: 'SOMEUNKNOWNTYPE'});
    expect(newState).toEqual(["Whatever"]);
});


it ('handles actions of type FETCH_REPOS', () => {
    const action = {
        type: FETCH_REPOS,
        payload: {data: [{"html_url": "https://github.com/christrees/react-app"}, {"html_url": "https://github.com/christrees/blog"}] }
    };
    const newState = reposReducer([], action);
    expect(newState).toEqual(["https://github.com/christrees/react-app","https://github.com/christrees/blog"]);
});
