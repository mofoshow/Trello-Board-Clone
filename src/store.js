import { createStore } from "redux";
import reducer from "./reducers";

const persistedState = localStorage.getItem("reduxState") ? JSON.parse(localStorage.getItem("reduxState")) : {boards: [
]};

let store = createStore(
    reducer,
    persistedState
);

store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
