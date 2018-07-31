# React, Redux & Sass Trello Board Clone

A basic Trello board in which you can add your own lists and tickets. 
This project is a work in progress.

Current features: <br />
Ability to create multiple lists.<br />
Ability to create multiple tickets within individual lists.<br />
Ability to remove individual tickets and full lists<br />
Drag and drop tickets from one list to another.<br />
Local Storage Implimentation.

Soon to be implimented:<br />
React Router to allow multiple boards,<br />




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

### Starter Template:

React, Redux & Sass Starter Template from Gigacore  (https://github.com/Gigacore/React-Redux-Sass-Starter)

Start the dev server:
```

npm run start:dev

```

Pre-configured tools and plugins

* Module bundler: [Webpack](https://webpack.js.org/)
* ES6 Transpiler: [babel-loader](https://github.com/babel/babel-loader)
* Linting: [eslint](https://eslint.org/)
* JS Uglification: [UglifyJsPlugin](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/)
* Dev Server: [webpack-dev-server](https://github.com/webpack/webpack-dev-server) (```npm run start:dev```)