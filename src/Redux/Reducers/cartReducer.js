const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = "REMOVE_FROM_CART"
const UP_QUANTITY = 'UP_QUANTITY'
const DOWN_QUANTITY = 'DOWN_QUANTITY'

const initialState = {
    items: []
}

let cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, { ...action.payload}]
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(book => book.id !== action.payload)
            }


        case UP_QUANTITY:

            state.items.map(book => {
                if (book.id === action.payload) {
                    book.Current += 1
                }
            })
            return {
                ...state, items: [...state.items]
            }
        case DOWN_QUANTITY:

            state.items.map(book => {
                if (book.id === action.payload) {
                    book.Current -= 1
                }
            })
            return {
                ...state, items: [...state.items]
            }
        default:
            return state
    }
}

export let addToCart = (payload) => {
    return (
        { type: ADD_TO_CART, payload }
    )
}


export let removeFromCart = (payload) => {
    return (
        { type: REMOVE_FROM_CART, payload }
    )
}


export let upQuantity = (payload) => {
    return (
        { type: UP_QUANTITY, payload }
    )
}
export let downQuantity = (payload) => {
    return (
        { type: DOWN_QUANTITY, payload }
    )
}


export default cartReducer