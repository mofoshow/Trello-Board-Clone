import React from "react";
import PropTypes from "prop-types";


class Ticket extends React.Component {

    onDragStart(event, id, title){
        event.dataTransfer.setData("id", id);
        event.dataTransfer.setData("title", title);
        event.dataTransfer.setData("listId", this.props.listId);
    }

    render() {
        return (
          <li className="list-group-item mb-2 border" draggable onDragStart={(e) => this.onDragStart(e, this.props.ticketId, this.props.ticketTitle)}>
            {this.props.ticketTitle}
          </li>
        );
    }
}

Ticket.propTypes = {
    ticketTitle: PropTypes.string,
    listId: PropTypes.string,
    ticketId: PropTypes.string
};

export default Ticket;