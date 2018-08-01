import React, { Component } from "react";
import PropTypes from "prop-types";
import NewListInput from "./NewListInput";
import Lists from "./Lists";


class BoardViewIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardId: ""
        };
    }

    componentDidMount() {
        const {
            match
        } = this.props;
        this.setState({ boardId: match.params.boardId });

    }

    render() {
        return (
          <div className="row mt-5 text-nowrap">
            <div>
              <div className="row">
                <div >
                  <h2>Board Title</h2>
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

BoardViewIndex.propTypes = {
    match : PropTypes.array
  };

export default BoardViewIndex;