
import { ADD_TICKET, ADD_LIST, HANDLE_DROP } from "../constants/ActionTypes";


const initialState = {
    lists: [
    ]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TICKET:
            const updatedItems = state.lists.map(list => {
                if (list.id === action.payload.listId) {
                    return {
                        ...list,
                        tickets: [...list.tickets, { ticketTitle: action.payload.title, ticketId: action.payload.id }]
                    };
                }
                return list;

            });
            const mashedTogether = { ...state, lists: [...updatedItems] };
            return mashedTogether;

        case HANDLE_DROP:

            let removeTicket = state.lists.map(list => {
                let ticketsToStay = list.tickets.filter(ticket => ticket.ticketId !== action.payload.id);
                let newListWithTicketRemoved = {
                    ...list, tickets: ticketsToStay
                };
                return newListWithTicketRemoved;
            });

            let newState = {
                ...state, lists: removeTicket
            };

            return newState;

        case ADD_LIST:
            const payload = { ...action.payload, tickets: [] };
            const updatedLists = {
                ...state, lists: [...state.lists, payload]
            };
            return updatedLists;
        default:
        return state;

    }
};
export default rootReducer;

