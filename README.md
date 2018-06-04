# Jest Issue
This just proves out an issue I've been seeing with Jest and Babel.

## Reproduce the issue
1. Clone this repo.
2. `yarn` - Install the dependencies.
3. `yarn test` - This test fails, as `.babelrc` exists.
4. `rm .babelrc` - Remove the Babel config.
5. `yarn test` - This test passes.
