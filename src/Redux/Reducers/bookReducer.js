import { db } from "../../Config/fbConfig"

const SET_BOOKS = 'SET_BOOKS'
const SORT_BY = 'SORT_BY'
const SEARCH_QUERY = 'SEARCH_QUERY'

const initialState = {
    items: [],
    selectSort: 'By Rating Down',
    searchQuery: ''
}

let bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                items: action.payload
            }
            case SORT_BY:
                return {
                    ...state,
                    selectSort: action.payload
                }
                case SEARCH_QUERY:
                    return {
                        ...state,
                        searchQuery: action.payload
                    }
        default:
            return state
    }
}

export let setBooks = (payload) => {
    return (
        { type: SET_BOOKS, payload }
    )
}
export let setSearchQuery = (payload) => {
    return (
        { type: SEARCH_QUERY, payload }
    )
}

export let sortBy = (payload) => {
    return (
        { type: SORT_BY, payload }
    )
}

export let SetBooksThunk = () => {
    return (dispatch) => {
        db.collection("books").get()
            .then((querySnapshot) => {
                let arr = []
                querySnapshot.forEach((doc) => {
                    arr = [...arr, doc.data()]
                })
                dispatch(setBooks(arr))
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }
}


export default bookReducer



