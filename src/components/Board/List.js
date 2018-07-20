import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import NewTicketInput from "./NewTicketInput";
import Tickets from "./Tickets";

const mapDispatchToProps = dispatch => {
    return {
    
      handleDrop: ticket => dispatch(handleDrop(ticket)),
      addTicket: ticket => dispatch(addTicket(ticket))
    };
  };

class ConnectedList extends React.Component{
    constructor(props){
        super(props);
    }

    onDragOver(event){
        event.preventDefault();
    }

    onDrop(event){
        let id = event.dataTransfer.getData("id");
        let title = event.dataTransfer.getData("title");
        let previouslistId = event.dataTransfer.getData("listId");
        const listId = this.props.listId;
        
        this.props.handleDrop({previouslistId , id});
        this.props.addTicket({title, listId , id}); 
    }

    render(){
        return(
          <li onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>{this.onDrop(e, "wip");}}>
            <label>{this.props.title}</label>
            <Tickets listId={this.props.listId}/>
            <NewTicketInput listId={this.props.listId}/>  
          </li>
        );
    }
}

ConnectedList.propTypes = {
    listId: PropTypes.string,
    title: PropTypes.string,
    handleDrop: PropTypes.string,
    addTicket: PropTypes.string
};

const List = connect(null, mapDispatchToProps)(ConnectedList);


export default List;