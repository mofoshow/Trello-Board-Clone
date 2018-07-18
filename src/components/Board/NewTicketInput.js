import React from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import PropTypes from "prop-types";

const mapDispatchToProps = dispatch => {
    return {
      addTicket: ticket => dispatch(addTicket(ticket))
    };
  };

class ConnectedNewTicketInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            listId: this.props.listId
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const { listId } = this.state;
        const id = uuidv1();
        this.props.addTicket({ title, listId ,id });
        this.setState({ title: "" });
    }




    render() {
        const { title } = this.state;
        return (
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={this.handleChange}
                />
            </div>
          </form>
        );
    }
}

ConnectedNewTicketInput.propTypes = {
    listId : PropTypes.string,
    addTicket: PropTypes.array
  };



const NewTicketInput = connect(null, mapDispatchToProps)(ConnectedNewTicketInput);

export default NewTicketInput;
