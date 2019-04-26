import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from '../Root';
import App from '../App';

let wrapped;
beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://api.github.com/users/christrees/repos', {
        status: 200,
        response: [{ html_url: 'https://github.com/christrees/react-app'}, { html_url: 'https://github.com/christrees/blog'}]
    });
    const initialState = {
        auth: true
    };
    wrapped = mount(
        <Root>
            <BrowserRouter initialState={initialState}>
                <Route path="/" component={App} />
            </BrowserRouter>
        </Root>
    );
});
afterEach(() => {
    wrapped.unmount();
});

/*  */
it('sanity check: the basic Elements', (done) => {
    expect(wrapped.find('BrowserRouter').length).toEqual(1);
    expect(wrapped.find('Route').length).toEqual(1);
    expect(wrapped.find('.sign-in').length).toEqual(1);
    //expect(wrapped.find('.nav-list').length).toEqual(1);
    done();
});
