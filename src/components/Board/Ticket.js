import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const mapDispatchToProps = dispatch => {
    return {
        removeTicket: ticket => dispatch(removeTicket(ticket))
    };
};


class ConnectedTicket extends React.Component {

    onDragStart(event, id, title) {
        event.dataTransfer.setData("id", id);
        event.dataTransfer.setData("title", title);
        event.dataTransfer.setData("listId", this.props.listId);
    }

    handleClick(e) {
        let id = this.props.ticketId;
        this.props.removeTicket({ id });
    }


    render() {
        return (
          <li className="list-group-item mb-2 border" draggable onDragStart={(e) => this.onDragStart(e, this.props.ticketId, this.props.ticketTitle)}>
            <div className="row">
              <div className="col-9">
                {this.props.ticketTitle}
              </div>
              <div className="col-3" onClick={() => { this.handleClick(); }}>
                <i className="fas fa-times"></i>
              </div>
            </div>
          </li>
        );
    }
}

ConnectedTicket.propTypes = {
    ticketTitle: PropTypes.string,
    listId: PropTypes.string,
    ticketId: PropTypes.string,
    removeTicket: PropTypes.string
};

const Ticket = connect(null, mapDispatchToProps)(ConnectedTicket);

export default Ticket;