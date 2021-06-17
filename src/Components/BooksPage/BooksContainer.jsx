import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import Book from './Book'
import { SetBooksThunk } from '../../Redux/Reducers/bookReducer'
import { addToCart, removeFromCart } from '../../Redux/Reducers/cartReducer'

let mapStateToProps = (state) => {
    return {
        books: state.books.items,
        card: state.cart.items
    }
}

let BooksContainer = connect(mapStateToProps, {SetBooksThunk, addToCart, removeFromCart})(BooksPage)


function BooksPage(props) {

    useEffect(() => {
        props.SetBooksThunk()
    }, [])
    
 
    return (
        <div className="BooksPage">
            <div className="BooksPage-items">
                {props.books.map(book =>
                    <Book id={book.id}
                        image={book.image}
                        title={book.title}
                        addToCart={props.addToCart}
                        item={book}
                        card={props.card}
                        removeFromCart={props.removeFromCart}
                    />)}
            </div>
        </div>
    );
}




export default BooksContainer

