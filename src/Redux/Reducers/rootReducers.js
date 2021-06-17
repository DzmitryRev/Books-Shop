import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import cartReducer from "./cartReducer";


export let rootReducers = combineReducers({    
    books: bookReducer,
    cart: cartReducer,
    firebase: firebaseReducer
})
