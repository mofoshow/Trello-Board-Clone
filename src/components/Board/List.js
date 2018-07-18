import React from "react";
import PropTypes from "prop-types";

import NewTicketInput from "./NewTicketInput";
import Tickets from "./Tickets";

class List extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
          <li>
            <label>{this.props.title}</label>
            <Tickets listId={this.props.listId}/>
            <NewTicketInput listId={this.props.listId}/>  
          </li>
        );
    }
}

List.propTypes = {
    listId: PropTypes.string,
    title: PropTypes.string
};

export default List;