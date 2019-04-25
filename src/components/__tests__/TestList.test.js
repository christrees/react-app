import React from 'react';
import { mount } from 'enzyme';
import TestList from '../TestList';
import Root from '../../Root'; 

let wrapped;
beforeEach(() => {
    wrapped = mount(
        <Root>
            <TestList />
        </Root>
    );
});
afterEach(() => {
    wrapped.unmount();
});

it ('creates one LI per server note', () => {
    expect(wrapped.find('li').length).toEqual(1);
});

/*
it ('each server note is dislayed in list', () => {
    expect(wrapped.render().text()).toContain('Note 1');
    expect(wrapped.render().text()).toContain('Note 2');
});
*/