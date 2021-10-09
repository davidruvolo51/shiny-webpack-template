# Shiny + Webpack

The `shiny-webpack-template` contains the basic structure for creating Shiny applications using the application bundler [webpack](https://webpack.js.org). Using these tools is useful for optimizing CSS and JavaScript files, as well as integrating many other JavaScript plugins and libraries. Some of the key features are listed below.

- ✨ Sass enabled
- 🔥 Hot Module Replacement
- 📦 Bundling your shiny as an R package
- 😍 And much more!

This application uses the following tools.

- [Webpack](https://webpack.js.org)
- [Node and NPM](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)
- [pnpm](https://github.com/pnpm/pnpm)

This workspace is geared towards vscode, but can easily be adapted into a R project. If you decide to use vscode, I am using [radian](https://github.com/randy3k/radian) and [languageserver](https://github.com/REditorSupport/languageserver). Additional extensions can be found in the `.code-workspace` config file.

## Getting Started

### 1. Install Node and NPM

Make sure [Node and NPM](https://nodejs.org/en/) are installed on your machine. You may also use [Yarn](https://yarnpkg.com/en/). To test the installation or to see if these tools are already installed on your machine, run the following commands in the terminal.

```shell
node -v
npm -v
yarn -v
```

### 2. Clone the `shiny-webpack-template` repository

```shell
git clone https://github.com/davidruvolo51/shiny-webpack-template
```

### 3. Install dependencies

Next, install the npm packages that are required to run the app locally. I have decided to use [pnpm](https://github.com/pnpm/pnpm) to manage packages on my machine and across projects. To install `pnpm`, run the following command.

```shell
npm install -g pnpm
```

You will need to install the dependencies in the root directory.

```shell
pnpm install
```

If you prefer to use `npm`, use `npm` instead of `pnpm`.

### 4. Working in development mode

For developing your application, I recommend creating two terminals in the same window. Use one to run the Shiny and the other to run node. Use the following scripts to start the dev servers.

```shell
yarn start  # node
yarn shiny  # shiny
```

The application will be served at `http://localhost:8000`.

### 5. Building for production

When you are ready to deploy your application, run the build script. This will compile all of javascript, scss, etc. for production.

```shell
yarn build
```

If you need additional assets (e.g., fonts), you will need to configure this manually.

## Notes

- Write all javascript and scss in the `src` folder. Webpack is configured to render an `index.js` and `index.css` files into `inst/www/`.
- If you have images, place them in `inst/images`. Shiny is automatically configured to add the resource path at `images/`. In your shiny app, write the file path as `src="images/my_image.png"`
