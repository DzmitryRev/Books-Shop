import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Book from './Book'
import { SetBooksThunk } from '../../Redux/Reducers/bookReducer'
import { addToCart, removeFromCart, upQuantity, downQuantity } from '../../Redux/Reducers/cartReducer'


let BY_PRICE_UP = 'By Price Up'
let BY_PRICE_DOWN = 'By Price Down'
let BY_RATING_UP = 'By Rating Up'
let BY_RATING_DOWN = 'By Rating Down'
let ALL = 'All'

let sortBy = (sort, sortArray) => { 
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


let mapStateToProps = (state) => {
    return {
        books: sortBy(state.books.selectSort, state.books.items),
        card: state.cart.items
    }
}

let BooksContainer = connect(mapStateToProps, { SetBooksThunk, addToCart, removeFromCart, upQuantity, downQuantity })(BooksPage)


function BooksPage(props) {

    useEffect(() => {
        props.SetBooksThunk()
    }, [])


    



    return (
        <div className="container">
            <div className="row">
                <div className="col SortBlock">
                    <div className="row justify-content-start SortBlock-items"> 
                         {/* <span className="col-auto" onClick={() => setSort(BY_PRICE_UP)}>Дешевле</span>
                        <span className="col-auto" onClick={() => setSort(BY_PRICE_DOWN)}>Дороже</span>
                        <span className="col-auto" onClick={() => setSort(BY_RATING_DOWN)}>По рейтингу выше</span>
                        <span className="col-auto" onClick={() => setSort(BY_RATING_UP)}>Ниже</span>  */}
                        <span className="col-auto">Сортировать по:</span>
                    </div>
                </div>
            </div>

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
            </div>

        </div>
    );
}




export default BooksContainer

