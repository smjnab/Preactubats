!Out of date, new Preact-cli comes with Typescript template!

# Preactubats
[preact-cli](https://github.com/developit/preact-cli) template using [Typescript](https://github.com/Microsoft/TypeScript), [SCSS](https://github.com/sass/sass) and [Bulma CSS framework](https://github.com/jgthms/bulma). Template has the same content, with some additions, as the default preact-cli template and uses the styling from Bulma's [getting started guide](https://bulma.io/documentation/customize/with-node-sass/).

In addition [Preact-async-route](https://github.com/prateekbh/preact-async-route) and [Preact-helmet](https://github.com/Download/preact-helmet) is used for async paths and modifying the default header. Typescript was added using [preact-cli-plugin-typescript](https://github.com/wub/preact-cli-plugin-typescript) with modifications, and styling integration to .tsx files is done using [typings-for-css-modules-loader](https://github.com/Jimdo/typings-for-css-modules-loader).

Demo at //Removed as template has little purpose these days.

## Documentation
- This is a modified [default] template for [preact-cli](https://github.com/developit/preact-cli).
- [For Preact](https://preactjs.com/): General information about how to work with Preact, not specific to this template

## Usage

``` bash
$ npm install -g preact-cli
$ preact create smjnab/preactubats my-project
$ cd my-project
$ npm install
$ npm run dev
```

Development server runs on port `8080`. If the default port is already in use on your machine it will start the development server on a random port.

## Commands

- `npm install`: Install dependencies

- `npm run start`: Runs `serve` or `dev`, depending on `NODE_ENV` value. Defaults to `dev server`

- `npm run dev`: Run a development, HMR server at localhost:8080

- `npm run serve`: Run a production-like server at https://localhost:8080

- `npm run build`: Production-ready build

- `npm run bs`: Build and run a production-like serve


### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `preact-cli`:

``` bash
preact create username/repo my-project
```
