import React, { Component } from "react";

import BoardListIndex from "./components/BoardListView/BoardListIndex";

import { addBoard,addTicket, addList, removeTicket, removeList } from "../src/actions/listActions";
import { Switch, Route } from "react-router-dom";

import BoardViewIndex from "./components/Board/BoardViewIndex";


import store from "./store";

window.store = store;
window.addTicket = addTicket;
window.removeTicket = removeTicket;
window.addList = addList;
window.addBoard = addBoard;
window.removeList = removeList;


class App extends Component {
  render() {
    return (
      <div className=" mt-5 text-nowrap">
        <Switch>
          <Route exact path='/' component={BoardListIndex}/>
          <Route path='/board/:boardId' component={BoardViewIndex} />
          <Route component={BoardListIndex} />
        </Switch>
      </div>
    );
  }
}

export default App;