import React from 'react';
import { mount } from 'enzyme';
import TestList from '../TestList';
import Root from '../../Root'; 

let wrapped;
beforeEach(() => {
    const initialState = {
        repos: ['christrees/repo1', 'christrees/repo2']
    };
    wrapped = mount(
        <Root initialState={initialState}>
            <TestList />
        </Root>
    );
});
afterEach(() => {
    wrapped.unmount();
});

it ('creates one LI per repo', () => {
    expect(wrapped.find('ul').length).toEqual(1);
});


it ('each repo is dislayed in list', () => {
    expect(wrapped.render().text()).toContain('christrees/repo1');
    expect(wrapped.render().text()).toContain('christrees/repo2');
});
