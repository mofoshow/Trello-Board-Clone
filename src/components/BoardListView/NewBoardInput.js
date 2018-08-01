import React from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import PropTypes from "prop-types";

const mapDispatchToProps = dispatch => {
    return {
        addBoard: board => dispatch(addBoard(board))
    };
};

class ConnectedNewBoardInput extends React.Component{
    constructor() {
        super();
        this.state = {
            boardtitle: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { boardtitle } = this.state;
        const id = uuidv1();
        this.props.addBoard({ boardtitle, id });
        this.setState({ boardtitle: "" });
    }

    render(){
        const { boardtitle } = this.state;
        
        return(
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                    placeholder="Add a new board"
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    id="boardtitle"
                    value={boardtitle}
                    onChange={this.handleChange}
                />
            </div>
          </form>
        );
    }
}

ConnectedNewBoardInput.propTypes = {
    addBoard: PropTypes.string
};


const NewBoardInput = connect(null, mapDispatchToProps)(ConnectedNewBoardInput);

export default NewBoardInput;