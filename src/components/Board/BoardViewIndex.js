import React, { Component } from "react";
import PropTypes from "prop-types";
import NewListInput from "./NewListInput";
import Lists from "./Lists";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const mapStateToProps = state => {
   
  return { boards: state.boards };
};

class ConnectedBoardViewIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardId: "",
            boardTitle: ""
        };
    }

    componentDidMount() {
        const {match} = this.props;

        const board = this.props.boards.find(board => board.id === match.params.boardId);
        
        this.setState({ 
          boardId: match.params.boardId,
          boardTitle: board.boardtitle
         });
    }

    render() {
        return (
          <div className="row mt-5 text-nowrap">
            <Link to="/" className="back-btn">Back</Link>
            <div>
              <div className="row">
                <div>
                  <h2>{this.state.boardTitle}</h2>
                </div>
                <div className="list_input col-7">
                  <NewListInput boardId={this.state.boardId} />
                </div>
              </div>
              <Lists boardId={this.state.boardId}/>
            </div>
          </div>
        );
    }
}

ConnectedBoardViewIndex.propTypes = {
  match : PropTypes.array,
  boards: PropTypes.array
};

const BoardViewIndex = connect(mapStateToProps)(ConnectedBoardViewIndex);

export default BoardViewIndex;