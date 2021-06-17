import {createStore, applyMiddleware, compose} from 'redux'
import ThunkMiddleware from 'redux-thunk'
import { rootReducers } from './Reducers/rootReducers'



const store = createStore(rootReducers, applyMiddleware(ThunkMiddleware)) 



export default store