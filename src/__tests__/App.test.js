import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from '../Root'; 
import App from '../App';

//- BEGIN HACK - seems that src/setupTest.js was not getting sucked in ??
/* fixed src/setupTest.js -sb-> src/setupTests.js
import Enzyme from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adaptor() });
*/
//- END HACK - 

let wrapped;

beforeEach(() => {
  wrapped = shallow(
    <Root>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </Root>
  );
});

it('renders without crashing - not on fire', () => {
  expect(wrapped.find(BrowserRouter).length).toEqual(1);
});
