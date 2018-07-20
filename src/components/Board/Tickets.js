// src/js/components/List.js
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Ticket from "./Ticket";


const mapStateToProps = state => {
   
  return { lists: state.lists };
};

class ConnectedTickets extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        listId: this.props.listId
    };
}

displayTickets(){
  return (this.props.lists.map(list => {
    if(list.id === this.props.listId){
        return(list.tickets.map(ticket => {
          return (
            <Ticket ticketTitle={ticket.ticketTitle} ticketId={ticket.ticketId} key={ticket.ticketId} listId={this.props.listId}/>
          );
        }));
    }
  }));
}


  render(){
    return(
      <li className="list-group-item pl-2 pr-2" >
        {this.displayTickets()}
      </li>
    );
  }
}

ConnectedTickets.propTypes = {
  listId : PropTypes.string,
  ticketTitle: PropTypes.string,
  lists : PropTypes.array
};


const Tickets = connect(mapStateToProps)(ConnectedTickets);
export default Tickets;