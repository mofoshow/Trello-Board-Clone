
import { ADD_TICKET, ADD_LIST, ADD_BOARD, REMOVE_TICKET, REMOVE_LIST } from "../constants/ActionTypes";


const initialState = {
    boards: [
    ]
};

const rootReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_TICKET:
            const updatedItems = state.boards.map(board => {
                const updatedTicketList = board.lists.map(list => {
                    if (list.listId === action.payload.listId) {
                        return {
                            ...list,
                            tickets: [...list.tickets, {ticketTitle: action.payload.title, ticketId: action.payload.id }]
                        };
                    }
                    return list;
                    
                });
                return {
                    ...board, 
                    lists: [ ...updatedTicketList] 
                };
            });
            const updatedStateAfterAddingList = { ...state, boards: [...updatedItems]};

            return updatedStateAfterAddingList;

        // case REMOVE_TICKET:
        // console.log("remove ticket ");
        //     let removeTicket = state.lists.map(list => {
        //         let ticketsToStay = list.tickets.filter(ticket => ticket.ticketId !== action.payload.id);
        //         let newListWithTicketRemoved = {
        //             ...list, tickets: ticketsToStay
        //         };
        //         return newListWithTicketRemoved;
        //     });

        //     let newState = {
        //         ...state, lists: removeTicket
        //     };

        //     return newState;

        case ADD_LIST:
            const updatedLists = state.boards.map(board => {
                if (board.id === action.payload.boardId){
                    return {
                        ...board,
                        lists: [...board.lists, { listTitle: action.payload.listtitle, listId: action.payload.listId, tickets: []}]
                    };
                }
                return board;
            });
            const newBoardState = { ...state, boards: [...updatedLists]};

            return newBoardState;
        
        case ADD_BOARD:
            const boardsPayload = { ...action.payload, lists: [] };
            const updatedBoardLists = {
                ...state, boards: [...state.boards, boardsPayload]
            };
        return updatedBoardLists;

        // case REMOVE_LIST:
        // console.log("remove list ");
        //     let removedList = state.lists.filter(list => list.id != action.payload.listId);
        //     let updateListOfListsState = {
        //         lists: removedList
        //     };

        //     return updateListOfListsState;
        default:
        return state;

    }
};
export default rootReducer;

