import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import List from "./List";

const mapStateToProps = state => {
    return { boards: state.boards };
};

// const ConnectedLists = ({ lists }) => (
//   <ul className="list-group-flush list-inline">

//     {
//         lists.map(el => (
//           <li className="list-inline-item align-top mr-4 p-3" key={el.id}>
//             <List title={el.listtitle} listId={el.id} />
//           </li>

//         ))
//     }
//   </ul>
// );

class ConnectedLists extends React.Component{

  displayLists(){
   
    return (this.props.boards.map(board => {
      if(board.id === this.props.boardId){
        return(board.lists.map(list => {
          return (
            <li className="list-inline-item align-top mr-4 p-3" key={list.listId}>
              <List title={list.listTitle} listId={list.listId} />
            </li>
          );
        }));
      }
    }));
  }

  render(){
    return(
      <ul className="list-group-flush list-inline">
        {this.displayLists()}
      </ul>
    );
  }
}

ConnectedLists.propTypes = {
    lists: PropTypes.array,
    boards: PropTypes.array,
    boardId: PropTypes.string
};

const Lists = connect(mapStateToProps)(ConnectedLists);
export default Lists;