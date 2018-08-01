import React, { Component } from "react";

import NewBoardInput from "./NewBoardInput";
import Boards from "./Boards";

class BoardListIndex extends Component {
  render() {
    return (
      <div className="row mt-5 text-nowrap">

        <div>
          <div className="row">
            <div >
              <h2>Boards</h2>
            </div>
            <div className="list_input col-7">
              <NewBoardInput />
            </div>
          </div>

          <Boards />


        </div>
      </div>
    );
  }
}

export default BoardListIndex;