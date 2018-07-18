
import React from "react";
import PropTypes from "prop-types";

class Ticket extends React.Component {

    render() {
        return (
          <li className="list-group-item mb-2 border" >
            {this.props.ticketTitle}
          </li>
        );
    }
}

Ticket.propTypes = {
    ticketTitle: PropTypes.string
};

export default Ticket;