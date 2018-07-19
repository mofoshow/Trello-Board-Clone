


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
    constructor() {
        super();
        this.state = {
            listtitle: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { listtitle } = this.state;
        const id = uuidv1();
        this.props.addList({ listtitle, id });
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
    addList: PropTypes.array
};


const NewListInput = connect(null, mapDispatchToProps)(ConnectedNewListInput);

export default NewListInput;
