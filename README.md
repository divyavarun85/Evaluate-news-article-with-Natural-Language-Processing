1) Install NodeJS (windows)

``` https://phoenixnap.com/kb/install-node-js-npm-on-windows```


2) Install Express,body parser and cors

 ``` 
 npm install express --save

 npm i body-parser

 npm i cors
 ```


3) Create a folder with your project name and create src folder inside your project folder

4) src should contain client folder and server folder

5) Client folder should contain js folder,styles folder,views folder as well as index.js file

6)  App.js file should go inside the js file,scss file should go inside styles and index.html file into views
7) After doing the basic functionalities in all these files ,install webpack 

 ```
  npm i webpack webpack-cli 
  ```

8)add config file:webpack.config

9)Add mecessary require statements and module.exports to config file

``` 
 Const path = require('path')

 Const webpack = require('webpack')

  module.exports = { } 
```


Add a new webpack npm script to your package.json

```	
    "build":webpack" 
```

Try running webpack - will show error

```
npm run build 
```

8)  Add an index.js file in to the client directory and add the entry point attribute to webpack config

``` 
'./src/client/index.js' 
```

9)Build webpack

10)Add babel to your repo 

``` 
npm -i @babel/core @babel/preset-env babel-loader 

```

11)create a .babelrc file and fill it with these settings

```
{'presets':['@babel/preset-env']}

```

12)Add a loader to our webpack config.	


``` 
module:
    rules: 

       	 {
           	test: '/\.js$/',
            	exclude: /node_modules/,
            			loader: "babel-loader"
        		}
    		]
		} 
```
13 Add export statements to javascript files

14)Add import statements for your javascript files in the index.js.

 ```
 import {functionName } from './js/fileName'
 ```

15)Install html webpack plugin
npm  i -D html-webpack-plugin
16)Require the plugin at the top of your webpack config

```const HtmlWebpackPlugin = require('html-webpack-plugin')```

17)Add plugins list to webpack config and instatntiate the plugin
```
plugins: [
	new HtmlWebpackPlugin({
		template :'/src/client/views/index.html",
		filename:'/index.html',
	})
]
```
18) Run webapck and observe the new dist output
19) Update the server file to look for asset files in the dist 

```app.use(express.static('dist'))```

#### Seting up development and production environments


1)Install webapack dev server

```
     npm i -D webpack-dev-sever
```
2)Edit the build-dev npm script to use webpack-dev-server

```
webpack-dev-server --config webpack.dev.js --open
```

##### Sass Loader set up


```
npm i -D style-loader node-sass css-loader sass-loader
```
Add this test case to the rules array in your dev webpack config.
```
{
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
}
```

Update 

```import './styles/resets.scss' ```
 in client/index.js

##### Setting up Workbox plugin

Install the plugin: 

``` npm install workbox-webpack-plugin --save-dev ```

Require the plugin

``` const WorkboxPlugin = require('workbox-webpack-plugin'); ```

Add the plugin: 

```new WorkboxPlugin.GenerateSW()```

Add this code to the bottom of your html file, just above the closing body tag.

```
<script>
    // Check that service workers are supported
    if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js');
        });
    }
</script>
```

##### Main functionalities


-In formHandler.js, is a postData function to post date entered by user from home page to save in the server. In server/index.js there is a function to store data in an array.

-Based on the data entered by user,there should be an async funstion to retrive data ferom Aylien api and display in home page

-Jest has been installed fot testing purposes
```
install npm i jest
```
Add the following section to your package.json:
```
{
  "scripts": {
    "test": "jest"
  }
}
```
Then, create a file named test.js. This will contain our actual test

Finally npm run test 
