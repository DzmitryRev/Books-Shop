import { db } from "../../Config/fbConfig"

const SET_BOOKS = 'SET_BOOKS'

const initialState = {
    items: []
}

let bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                items: action.payload,
                isReady: true
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



