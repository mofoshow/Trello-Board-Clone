
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Ticket from "./Ticket";


const mapStateToProps = state => {
   
  return { boards: state.boards };
};

class ConnectedTickets extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        listId: this.props.listId
    };
}

displayTickets(){
  return (this.props.boards.map(board => {
    return(board.lists.map(list => {
      if(list.listId === this.props.listId){
        return (list.tickets.map(ticket => {
          return (
            <Ticket ticketTitle={ticket.ticketTitle} key={ticket.ticketId}  ticketId={ticket.ticketId} />
          );
        }));
        
      }
    }));
  }));
  }



  render(){
    return(
      <li className="list-group-item pl-2 pr-2" >
        {this.displayTickets()}
      </li>
    );
  
};

}

ConnectedTickets.propTypes = {
  listId : PropTypes.string,
  ticketTitle: PropTypes.string,
  lists : PropTypes.array,
  boards : PropTypes.array
};


const Tickets = connect(mapStateToProps)(ConnectedTickets);
export default Tickets;