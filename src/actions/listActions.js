// src/js/actions/index.js

import { ADD_TICKET, ADD_LIST, ADD_BOARD, REMOVE_TICKET, REMOVE_LIST} from "../constants/ActionTypes";


export const addList = list => ({ type: ADD_LIST, payload: list });
export const addBoard = board => ({ type: ADD_BOARD, payload: board });
export const addTicket = ticket => ({ type: ADD_TICKET, payload: ticket });
export const removeTicket = ticket => ({ type: REMOVE_TICKET, payload: ticket});
export const removeList = list => ({ type: REMOVE_LIST, payload: list});