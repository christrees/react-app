# Testing of the React App Repo

## Quickstart

```
catmini:react-app cat$ pwd
/Users/cat/christrees/react-app
catmini:react-app cat$ yarn test --coverage
```

###### Last best test

```
catmini:react-app cat$ date
Fri Apr 26 13:18:23 CDT 2019

catmini:react-app cat$ yarn test --coverage
yarn run v1.3.2
$ react-scripts test --coverage
 PASS  src/reducers/__tests__/repoFetchData.test.js
 PASS  src/reducers/__tests__/simpleAuthButton.test.js
 PASS  src/components/__tests__/TestList.test.js
 PASS  src/__tests__/apifetchlist.test.js
 PASS  src/__tests__/integrations.test.js
 PASS  src/__tests__/App.test.js
 PASS  src/components/__tests__/TestListAPI.test.js
----------------------|----------|----------|----------|----------|-------------------|
File                  |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------------|----------|----------|----------|----------|-------------------|
All files             |      100 |      100 |      100 |      100 |                   |
 src                  |      100 |      100 |      100 |      100 |                   |
  App.js              |      100 |      100 |      100 |      100 |                   |
  Root.js             |      100 |      100 |      100 |      100 |                   |
  setupTests.js       |      100 |      100 |      100 |      100 |                   |
 src/actions          |      100 |      100 |      100 |      100 |                   |
  index.js            |      100 |      100 |      100 |      100 |                   |
  types.js            |      100 |      100 |      100 |      100 |                   |
 src/components       |      100 |      100 |      100 |      100 |                   |
  TestList.js         |      100 |      100 |      100 |      100 |                   |
 src/reducers         |      100 |      100 |      100 |      100 |                   |
  index.js            |      100 |      100 |      100 |      100 |                   |
  repoFetchData.js    |      100 |      100 |      100 |      100 |                   |
  simpleAuthButton.js |      100 |      100 |      100 |      100 |                   |
----------------------|----------|----------|----------|----------|-------------------|

Test Suites: 7 passed, 7 total
Tests:       20 passed, 20 total
Snapshots:   0 total
Time:        5.491s
Ran all test suites.
✨  Done in 7.94s.
catmini:react-app cat$ 
```

## Testing Details

Intention to explain more here.  Should keep coverage at 100% or exclude from jest coverage.

### Excluding a file from jest coverage
In the package.json
```
  "jest": {
    "collectCoverageFrom": [
      "src/**/*.{js,jsx}",
      "!src/index.js",
      "!src/serviceWorker.js"
    ]
  },
```

### Setup Travis

- Use github to login to [travis-ci.org](https://travis-ci.org)
- Get a Token from [github-PAT](https://github.com/settings/tokens)
- Put PAT into [travis-ci repo env](https://travis-ci.org/christrees/react-app/settings)
- add .travis.yml to repo

### Setup Coveralls
(maybe later)
- read [travis-ci coveralls](https://docs.travis-ci.com/user/coveralls/)
- link coveralls to github [Sign in to Coveralls](https://coveralls.io/authorize/github)
- enable repo [react-app enable](https://coveralls.io/repos/new)
- example travis [coveralls travis](https://github.com/Ethan-Arrowood/harperdb-connect/blob/master/.travis.yml)

### Testing using mock for rest api

- See [TestListAPI.test.js](../src/components/__tests__/TestListAPI.test.js)
- The 'trick' is to use moxios.wait then call function done() which is passed into the the test.
- Passing done function into the test cause the function not to evaluate expressions until after the done is called
- https://stackoverflow.com/questions/46179297/mocking-axios-calls-using-moxios-in-order-to-test-api-calls

#### Notes
- Explain Root.js use technique
- Add selenium / cucumber test for UX
- Need to get a handle on redux functional mocks
- Need to add mock for a rest api access (DONE - src/components/`__tests__`/TestListAPI.test.js)