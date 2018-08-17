import React, { Component } from "react";

import NewBoardInput from "./NewBoardInput";
import Boards from "./Boards";

class BoardListIndex extends Component {
  render() {
    return (
      <div className="container">
        <div >
          <h2>Boards</h2>
        </div>
        <div className="list_input col-7">
          <NewBoardInput />
        </div>
        <div className="row">
          <div className="col-12">
            <Boards />
          </div>
        </div>
      </div>
    );
  }
}

export default BoardListIndex;