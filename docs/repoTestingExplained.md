# Testing of the React App Repo

## Quickstart

```
catmini:react-app cat$ pwd
/Users/cat/christrees/react-app
catmini:react-app cat$ yarn test
```

###### Last best test

```
catmini:react-app cat$ date
Thu Apr 25 13:32:07 CDT 2019

catmini:react-app cat$ yarn test --coverage
yarn run v1.3.2
$ react-scripts test --coverage
 PASS  src/reducers/__tests__/simpleAuthButton.test.js
 PASS  src/components/__tests__/TestList.test.js
 PASS  src/__tests__/App.test.js
 PASS  src/__tests__/integrations.test.js
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
  simpleAuthButton.js |      100 |      100 |      100 |      100 |                   |
----------------------|----------|----------|----------|----------|-------------------|

Test Suites: 4 passed, 4 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        3.85s
Ran all test suites.
✨  Done in 5.97s.
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

#### Notes
- Explain Root.js use technique
- Add selenium / cucumber test for UX
- Need to get a handle on redux functional mocks
- Need to add mock for a rest api access