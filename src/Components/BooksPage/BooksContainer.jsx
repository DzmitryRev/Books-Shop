import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Book from './Book'
import { SetBooksThunk } from '../../Redux/Reducers/bookReducer'
import { addToCart, removeFromCart, upQuantity, downQuantity } from '../../Redux/Reducers/cartReducer'

let mapStateToProps = (state) => {
    return {
        books: state.books.items,
        card: state.cart.items
    }
}

let BooksContainer = connect(mapStateToProps, { SetBooksThunk, addToCart, removeFromCart, upQuantity, downQuantity })(BooksPage)


function BooksPage(props) {

    useEffect(() => {
        props.SetBooksThunk()
    }, [])

    let BY_PRICE_UP = 'By Price Up'
    let BY_PRICE_DOWN = 'By Price Down'
    let BY_RATING_UP = 'By Price Up'
    let BY_RATING_DOWN = 'By Price Down'

    let [sort, setSort] = useState(null)  
    if (sort === BY_PRICE_UP) {
        props.books.sort(function (a, b) {
            return a.price - b.price
    })}
    if (sort === BY_PRICE_DOWN) {
        props.books.sort(function (a, b) {
            return b.price - a.price
    })}
    if (sort === BY_RATING_UP) {
        props.books.sort(function (a, b) {
            return a.rating - b.rating
    })}
    if (sort === BY_RATING_DOWN) {
        props.books.sort(function (a, b) {
            return b.rating - a.rating
    })}

    return (
        <div className="BooksPage">
            <div className="sortBlock">
                По цене:
                <button onClick={()=>setSort(BY_PRICE_DOWN)}>Дороже</button>
                <button onClick={()=>setSort(BY_PRICE_UP)}>Дешевле</button>
                <span></span>
                По рейтингу: 
                <button onClick={()=>setSort(BY_RATING_DOWN)}>Выше</button>
                <button onClick={()=>setSort(BY_RATING_UP)}>Ниже</button>
                <span></span>
            </div>
            <div className="BooksPage-items">
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
                    />)}
            </div>
        </div>
    );
}




export default BooksContainer

