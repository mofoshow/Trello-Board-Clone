


import React from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import PropTypes from "prop-types";

const mapDispatchToProps = dispatch => {
    return {
        addList: ticket => dispatch(addList(ticket))
    };
};

class ConnectedNewListInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listtitle: "",
            boardId: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    componentDidUpdate(nextProps){
        if (this.state.boardId !== nextProps.boardId) {
            this.setState({boardId : nextProps.boardId});
        }
    }



    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        
        event.preventDefault();
        const { listtitle } = this.state;
        const listId = uuidv1();
        const boardId = this.state.boardId;
        this.props.addList({ listtitle, listId, boardId });
        this.setState({ listtitle: "" });
    }


    render() {
        const { listtitle } = this.state;
        return (
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                    placeholder="Add a new list"
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    id="listtitle"
                    value={listtitle}
                    onChange={this.handleChange}
                />
            </div>
          </form>
        
        );
    }
}

ConnectedNewListInput.propTypes = {
    listId: PropTypes.string,
    addList: PropTypes.array,
    boardId: PropTypes.string
};


const NewListInput = connect(null, mapDispatchToProps)(ConnectedNewListInput);

export default NewListInput;
