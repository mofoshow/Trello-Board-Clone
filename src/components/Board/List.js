import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import NewTicketInput from "./NewTicketInput";
import Tickets from "./Tickets";

const mapDispatchToProps = dispatch => {
    return {
      removeTicket: ticket => dispatch(removeTicket(ticket)),
      addTicket: ticket => dispatch(addTicket(ticket)),
      removeList: list => dispatch(removeList(list))
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
        const listId = this.props.listId;
        
        this.props.removeTicket({ id});
        this.props.addTicket({title, listId , id}); 
    }

    handleClick(){
        let listId = this.props.listId;
        this.props.removeList({listId});
    }

    render(){
        return(
          <li onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>{this.onDrop(e, "wip");}}>
            <div className="row">
              <div className="col-9">
                <label>{this.props.title}</label>
              </div>
              <div className="col-3">
                <i className="fas fa-ellipsis-h" onClick={() => {this.handleClick();}}></i>
              </div>
            </div>
            <Tickets listId={this.props.listId}/>
            <NewTicketInput listId={this.props.listId}/>  
          </li>
        );
    }
}

ConnectedList.propTypes = {
    listId: PropTypes.string,
    title: PropTypes.string,
    addTicket: PropTypes.string,
    removeTicket: PropTypes.string,
    removeList: PropTypes.string
};

const List = connect(null, mapDispatchToProps)(ConnectedList);


export default List;