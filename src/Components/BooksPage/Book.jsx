import React, { useEffect } from 'react'
import { useState } from 'react';


function Book(props) {

    useEffect(() => {
            props.card.map(book => {if (book.id === props.id) {
                console.log(`книга ${book.id} уже есть в корзине`)
                SetAdded(true)
            }})
    }, [])

    let [isAdded, SetAdded] = useState(false)
    let AddToCard = () => {
        SetAdded(true)
        props.addToCart(props.item)
    }
    let RemoveFromCard = () => {
        SetAdded(false)
        props.removeFromCart(props.id)
    }

    return (

        <div className="Book">
            <img src={props.image} />
            <h2>{props.title}</h2>
            {isAdded ? <button onClick={() => RemoveFromCard()}>Удалить из коризны</button>
                : <button onClick={() => AddToCard()}>Добавить в корзину</button>}

        </div>



    );
}

export default Book
