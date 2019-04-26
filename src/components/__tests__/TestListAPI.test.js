import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import TestList from '../TestList';
import Root from '../../Root'; 

let wrapped;
beforeEach(() => {
    moxios.install();
    const initialState = {
        auth: true,
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
    moxios.uninstall();
});

it ('creates one ul List per repo', () => {
    expect(wrapped.find('ul').length).toEqual(1);
});

it ('each repo is dislayed in list', () => {
    expect(wrapped.render().text()).toContain('christrees/repo1');
    expect(wrapped.render().text()).toContain('christrees/repo2');
});

it ('has a fetch-repo button', () => {
    expect(wrapped.find('.fetch-repos').length).toEqual(1);
});

it ('click on button and get mock api data', (done) => {
    const expectedRepos = [{ html_url: 'https://github.com/christrees/react-app'}, { html_url: 'https://github.com/christrees/blog'}] ;
    moxios.stubRequest('https://api.github.com/users/christrees/repos', {
        status: 200,
        response: expectedRepos
    });
    
    expect(wrapped.find('.fetch-repos').length).toEqual(1);
    wrapped.find('.fetch-repos').simulate('click');
    moxios.wait(()=>{
        wrapped.update();
        expect(wrapped.render().text()).toContain('christrees/repo1');
        expect(wrapped.render().text()).toContain('christrees/repo2');
        expect(wrapped.render().text()).toContain('https://github.com/christrees/react-app');
        expect(wrapped.render().text()).toContain('https://github.com/christrees/blog');
        done();
    })
});