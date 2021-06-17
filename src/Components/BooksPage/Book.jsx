import React, { useEffect } from 'react'
import { useState } from 'react';


function Book(props) {

    useEffect(() => {
            props.card.map(book => {if (book.id === props.id) {
                SetAdded(true)
                console.log(book.quanity)  
                SetQuanity(book.quanity)             
            }})
    }, [props.card])

    let [isAdded, SetAdded] = useState(false)
    let [quanity, SetQuanity] = useState(0)
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
            <h3>Цена: {props.price}</h3> 
            <h4>Рейтинг: {props.rating}</h4>
            {isAdded?<div className="QuanityBooks">
                {quanity>1?<button onClick={()=>props.downQuantity(props.id)}>-</button>:
                <button onClick={()=>RemoveFromCard()}>rem</button>
                }
            <h2>{quanity}</h2>
            <button onClick={()=>props.upQuantity(props.id)}>+</button>
            </div>: <></>}
            
            {isAdded ? <button onClick={() => RemoveFromCard()}>Удалить из коризны</button>
                : <button onClick={() => AddToCard()}>Добавить в корзину</button>}

        </div>



    );
}

export default Book
