import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import List from "./List";

const mapStateToProps = state => {
    return { lists: state.lists };
};

const ConnectedLists = ({ lists }) => (
  <ul className="list-group-flush list-inline">

    {
        lists.map(el => (
          <li className="list-inline-item align-top mr-4 p-3" key={el.id}>
            <List title={el.listtitle} listId={el.id} />
          </li>

        ))
    }
  </ul>
);

ConnectedLists.propTypes = {
    lists: PropTypes.array
};

const Lists = connect(mapStateToProps)(ConnectedLists);
export default Lists;