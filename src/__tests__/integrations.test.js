import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from '../Root';
import App from '../App';

let wrapped;
beforeEach(() => {
    wrapped = mount(
        <Root>
            <BrowserRouter>
                <Route path="/" component={App} />
            </BrowserRouter>
        </Root>
    );
});
afterEach(() => {
    wrapped.unmount();
});

/* ToDo need to signin, nav to create then click */
it('can fetch the test list and display in list', (done) => {
    expect(wrapped.find('.sign-in').length).toEqual(1);
    wrapped.find('.sign-in').simulate('click');
    wrapped.update();
   
    expect(wrapped.find('.sign-out').length).toEqual(1);
    wrapped.find('.sign-out').simulate('click');
    wrapped.update();
    done();
});
