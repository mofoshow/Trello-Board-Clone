import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
    return { boards: state.boards };
};


const ConnectedBoards = ({ boards }) => (
  <ul className="list-group-flush list-inline">
    {
        boards.map(board => (
          <li className="list-inline-item align-top mr-4 p-3" key={board.id}>
            <Link to={{ pathname: "/board/" + board.id }}>{board.boardtitle}</Link>
          </li>

        ))
    }
  </ul>
);

    ConnectedBoards.propTypes = {
    boards: PropTypes.array
};

const Boards = connect(mapStateToProps)(ConnectedBoards);

export default Boards;