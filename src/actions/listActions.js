// src/js/actions/index.js

import { ADD_TICKET, ADD_LIST, REMOVE_TICKET } from "../constants/ActionTypes";


export const addList = list => ({ type: ADD_LIST, payload: list });
export const addTicket = ticket => ({ type: ADD_TICKET, payload: ticket });
export const removeTicket = ticket => ({ type: REMOVE_TICKET, payload: ticket});