## Key points

### Babel

- Add `babel.config.js`
- Create a custom Babel environment for tests called `test`.
- Use the `transform-es2015-modules-commonjs` plugin for your `test` Babel environment.

### Jest

- Create a `jest.config.js` file.
- Add a `transform` property to your `jest.config.js` file. This way all files matching the pattern will be transformed using the module you provide (with Babel in our case: `babel-jest`).
- Run your tests with `NODE_ENV=test`, so your Jest run is associated with the `test` Babel environment.
- Run `yarn test` to run tests.
