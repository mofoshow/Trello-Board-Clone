import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";


import BoardLink from "./BoardLink";


const mapStateToProps = state => {
  return { boards: state.boards };
};



const ConnectedBoards = ({ boards }) => (

  <div className="row">
    {
      boards.map((board, index) => (
        <div className="col-12 col-md-6 mb-3" key={board.id}>
          <BoardLink number={index} id={board.id} boardtitle={board.boardtitle}/>
        </div>


      ))
    }
  </div>
);

ConnectedBoards.propTypes = {
  boards: PropTypes.array
};

const Boards = connect(mapStateToProps)(ConnectedBoards);

export default Boards;