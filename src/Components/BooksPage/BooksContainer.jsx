import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import Book from './Book'
import { SetBooksThunk, sortBy, setSearchQuery } from '../../Redux/Reducers/bookReducer'
import { addToCart, removeFromCart, upQuantity, downQuantity } from '../../Redux/Reducers/cartReducer'
import FilterTable from './FilterTable';
import { Grid } from 'semantic-ui-react';


let BY_PRICE_UP = 'By Price Up'
let BY_PRICE_DOWN = 'By Price Down'
let BY_RATING_UP = 'By Rating Up'
let BY_RATING_DOWN = 'By Rating Down'
let ALL = 'All'

let setSortPArametr = (sort, sortArray) => {
    if (sort === ALL) {
        return sortArray
    }
    if (sort === BY_PRICE_UP) {
        return sortArray.sort(function (a, b) {
            return a.price - b.price
        })
    }
    if (sort === BY_PRICE_DOWN) {
        return sortArray.sort(function (a, b) {
            return b.price - a.price
        })
    }
    if (sort === BY_RATING_UP) {
        return sortArray.sort(function (a, b) {
            return a.rating - b.rating
        })
    }
    if (sort === BY_RATING_DOWN) {
        return sortArray.sort(function (a, b) {
            return b.rating - a.rating
        })
    }

}

let setSearchedBooks = (sort, sortArray, value) => {
    if (value.length >= 1) {
        let searchresult = sortArray.filter(o => o.title.toLowerCase().indexOf(value.toLowerCase()) >= 0
            || o.author.toLowerCase().indexOf(value.toLowerCase()) >= 0)
        return setSortPArametr(sort, searchresult)
    }
    return setSortPArametr(sort, sortArray)
}




let mapStateToProps = (state) => {
    return {
        books: setSearchedBooks(state.books.selectSort, state.books.items, state.books.searchQuery),
        card: state.cart.items,
        Sort: state.books.selectSort,
        Query: state.books.searchQuery
    }
}

let BooksContainer = connect(mapStateToProps, {
    SetBooksThunk, addToCart,
    removeFromCart, upQuantity, downQuantity,
    sortBy, setSearchQuery
})(BooksPage)


function BooksPage(props) {

    useEffect(() => {
        props.SetBooksThunk()
    }, [])



    return (
        <div className="container">
            <FilterTable sortBy={props.sortBy}
                setSearchQuery={props.setSearchQuery} />
            <Grid relaxed columns={4}>
               
            {props.books.map(book =>
                                <Book id={book.id}
                                    image={book.image}
                                    title={book.title}
                                    addToCart={props.addToCart}
                                    item={book}
                                    card={props.card}
                                    removeFromCart={props.removeFromCart}
                                    upQuantity={props.upQuantity}
                                    downQuantity={props.downQuantity}
                                    price={book.price}
                                    rating={book.rating}
                                    author={book.author}
                                />)}

            </Grid>
{/* 
                <div className="row ">
                    <div className="col-lg-10">
                        <div className="row">
                            {props.books.map(book =>
                                <Book id={book.id}
                                    image={book.image}
                                    title={book.title}
                                    addToCart={props.addToCart}
                                    item={book}
                                    card={props.card}
                                    removeFromCart={props.removeFromCart}
                                    upQuantity={props.upQuantity}
                                    downQuantity={props.downQuantity}
                                    price={book.price}
                                    rating={book.rating}
                                />)}</div> </div>

                    <div className="col-lg-2 addMoth">
                        <div className="add">123</div></div>
                </div> */}

        </div>
            );
}




            export default BooksContainer

