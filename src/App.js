import React, { Component } from "react";

import Lists from "./components/Board/Lists";
import NewListInput from "./components/Board/NewListInput";

import { addTicket, addList, removeTicket } from "../src/actions/listActions";

import store from "./store";

window.store = store;
window.addTicket = addTicket;
window.removeTicket = removeTicket;
window.addList = addList;

class App extends Component {
  render() {
    return (
      <div className="row mt-5 text-nowrap">

        <div>
          <div className="row">
            <div >
              <h2>Board Title</h2>
            </div>
            <div className="list_input col-7">
              <NewListInput />
            </div>
          </div>


          <Lists />


        </div>
      </div>
    );
  }
}

export default App;