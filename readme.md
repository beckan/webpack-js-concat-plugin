# webpack-js-concat-plugin

A Javascript concat plugin for webpack

## Requirements

This module requires a minimum of Node v6.9.0 and Webpack 4.

## Getting Started

To begin, you'll need to install `webpack-js-concat-plugin`:

```console
$ npm install webpack-js-concat-plugin --save-dev
```

Then add the plugin to your `webpack` config. For example:

```js
// webpack.config.js
const ConcatPlugin = require('webpack-js-concat-plugin');

module.exports = {
  // ...
  plugins: [
    new ConcatPlugin(options),
  ],
  // ...
}
```

And run `webpack` via your preferred method.

## Options

### `files`

Type: `Object`
Default: `{}`

### `output`

Type: `String`
Default: `./`

## License

#### [MIT](./LICENSE)