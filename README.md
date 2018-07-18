![logos](https://image.ibb.co/m8S9ew/react_redux_sass.jpg)

# React, Redux & Sass Trello Board Clone

A clone of a basic Trello board in which you can add your own lists and tickets. This project is a work in progress. 

### Get started!
```
git clone
cd React-Redux-Sass-Starter
npm i
```

### Start the dev server:
```

npm run start:dev

```

### Build:
```

npm run build

```

#### Note:
* Changes made to your CSS / JS triggers a full page auto-reload.
* Running a build writes the ```bundle.js``` and ```bundle.css``` to the ```/public/dist/``` directory.

### Pre-configured tools and plugins

* Module bundler: [Webpack](https://webpack.js.org/)
* ES6 Transpiler: [babel-loader](https://github.com/babel/babel-loader)
* Linting: [eslint](https://eslint.org/)
* JS Uglification: [UglifyJsPlugin](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/)
* Dev Server: [webpack-dev-server](https://github.com/webpack/webpack-dev-server) (```npm run start:dev```)

#### Codebase overview.

```
/
├─ public/
|  ├─ dist/
|  |  ├─ bundle.css   
|  |  ├─ bundle.js    
|  ├─ index.html        
└─ src/
   ├─ actions/             
   |  ├─ listActions.js
   ├─ components/       
   |  ├─ Board
   |  |  ├─ List.js
   |  |  ├─ Lists.js
   |  |  ├─ NewListInput.js
   |  |  ├─ NewTicketInput.js
   |  |  ├─ Ticket.js
   |  |  ├─ Tickets.js
   ├─ constants/         
   |  ├─ ActionTypes.js
   ├─ reducers/ 
   |  ├─ index.js             
   ├─ styles/                
   |  ├─ main.scss
   ├─ App.js                  
   ├─ index.js               
   └─ store.js               
```


React, Redux & Sass Starter Template from Gigacore  (https://github.com/Gigacore/React-Redux-Sass-Starter)

