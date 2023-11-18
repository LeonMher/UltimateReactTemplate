React Project Ultimate Setup Guide 

1. Setup a basic React App with TypeScript and Webpack 5
2. Configure webpack and typescript to allow rendering of images and SVGs
3. Setup Webpack config for multiple envoronments like dev and prod
4. Add React Refresh
5. Linting and ESLint
6. Code formatting with Prettier
7. Husky and Pre commit hooks



1. Setup a basic React App with TypeScript and Webpack 5


- create a folder 
- initialize with git
- create a .gitignore file which we will later use to ignore the files to be commited
- create a 'src' folder
- create anoter folder 'build' this is for our bundled code which we will later generate
- we add the build folder in the gitignore file cause we don't want git to track it
- run "npm init -y" to create a package json file in our directory
- then we create the index.html file in our src folder 
- anything we install through npm is going to create a node modules folder. Let's add it in our
  .gitignore file



installing react and typescript stuff below

- we then install react and react dom - "npm i react react-dom"
- let's also install typescript for our project "npm i -D typescript @types/react @types/react-dom"
- now let's create tsconfig.json file in order to configure the typescript in our project



babel stuff below

- now let's create App.tsx file in the src folder and write a hello world component and export it
- create an index.tsx file in the same directory and import ReactDOM and try to render the App
  component in it.
- now it's not gonna work for now because browser does not understand React and TypeScript code
  and we need Babel to convert our code to JavaScript. Run the code below to install 
  "npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript"
- now we need to create a special .babelrc file in the root directory in order to configure
  babel


webpack stuff below

- now we need to use webpack to the code we write across multiple components will be bundled
  by webpack and referenced in the index.html file. Let's install webpack with all the stuff
  "npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin"
- we also need the babel loader which allows transpiling javascript files using babel and webpack
  "npm i -D babel-loader"


configuring webpack below

- we need to create webpack.config.js file and place the code below 

// Importing the 'path' module to work with file and directory paths
const path = require('path');

// Importing the HtmlWebpackPlugin to simplify the creation of an HTML file to serve the webpack bundles
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Exporting the webpack configuration object
module.exports = {
  // Entry point for the application, specifying the main TypeScript file
  entry: path.resolve(__dirname, '..', './src/index.tsx'),

  // Resolving file extensions to be used in the project
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  // Module rules for processing different types of files
  module: {
    rules: [
      {
        // Rule for processing TypeScript and JavaScript files using Babel
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        // Rule for processing CSS files
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // Rule for processing image files and other asset resources
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        // Rule for processing font files and SVGs as inline assets
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },

  // Output configuration for bundled files
  output: {
    path: path.resolve(__dirname, '..', './build'), // Output directory
    filename: 'bundle.js', // Output filename
  },
mode: "development",	
  // Plugins to extend the functionality of webpack
  plugins: [
    // Generates an HTML file to serve the webpack bundles
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],

  // Configuring the level of detail in webpack output stats
  stats: 'errors-only',
};


- add the start to our package json file that will trigger webpack to run our app locally
  "'start': 'webpack serve --config webpack/webpack.config.js --open'"

  
 ______________________________________________________________________________________________

 

How to setup Webpack for dev and production versions?

We are going to setup Webpack for both dev and prod environments in order to

1. optimizations, in terms of the size for the prod environment
2. custom envornment variables for both cases


We'll have four files for this project

- webpack.common.js //shared configs
- webpack.config.js
- webpack.dev.js //for dev env only
- webpack.prod.js //for prod env only

after configuring both dev and prod environments, we then need to install webpack-merge
to share the prod or dev envs with webpack.common.js through webpack.config.js

"npm i webpack-merge"

- now in package.json we need to slightly change the start command and add a build command 
  which will pass environment dev or prod and webpack will take care of the rest 

"scripts": {
    "start": "webpack serve --config webpack/webpack.config.js --env env=dev --open",
    "build": "webpack --config webpack/webpack.config.js --env env=prod",
    "test": "echo \"Error: no test specified\" && exit 1"
  }


Now we can also pass custom environment variables trough plugins in dev and prod files of the
webpack. To do so we need to specify the following code below


const webpack = require("webpack");

module.exports = {
  mode: "production",
  devtool: "source-map", //controls generation of source maps
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("ProdEnvironmentVariable"),
    }),
  ],
};



Then we can go ahead and build our app and run it locally as well.

'npm run build' this will create the necessary files in the build folder and then
we can cd to the build folder and run 'npx serve'




git remote set-url origin https://LeonMher:accessToken@github.com/LeonMher/repoNameHere.git