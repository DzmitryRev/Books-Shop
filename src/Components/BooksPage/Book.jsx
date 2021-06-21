import React, { useEffect } from 'react'
import { useState } from 'react';
import { Grid, Image, Button, Header } from 'semantic-ui-react'


function Book(props) {

    useEffect(() => {
        props.card.map(book => {
            if (book.id === props.id) {
                SetAdded(true)
                console.log(book.quanity)
                SetQuanity(book.quanity)
            }
        })
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

        <Grid.Column className="BookBlock" >
            <Image src={props.image} size="medium" bordered="true" className="BookImage" />
            <h4>{props.title}</h4>
            <h6>{props.author}</h6>
            <h5>{props.price} руб.</h5>

            {isAdded ? <div className="Butt">
                {quanity > 1 ? <><Button positive className="ButtonAdd"  onClick={() => props.downQuantity(props.id)}>-</Button>
                <Button negative  onClick={() => RemoveFromCard()}>
                   Удалить
                    </Button></> :
                    <Button negative className="ButtonDelete" onClick={() => RemoveFromCard()}>
                       Удалить</Button>
                }
                <Button positive onClick={() => props.upQuantity(props.id)}>+</Button>
               <h4>{quanity}</h4>
                
            </div> : <Button positive onClick={() => AddToCard()}>Добавить в корзину</Button>}
            
        </Grid.Column>

        // <div className="col-lg-3 BookBlock">
        //     <img src={props.image} />
        //     <h2>{props.title}</h2>
        //     <h3>Цена: {props.price}</h3> 
        //     <h4>Рейтинг: {props.rating}</h4>
        // {isAdded?<div className="QuanityBooks">
        //     {quanity>1?<button onClick={()=>props.downQuantity(props.id)}>-</button>:
        //     <button onClick={()=>RemoveFromCard()}>rem</button>
        //     }
        // <h2>{quanity}</h2>
        // <button onClick={()=>props.upQuantity(props.id)}>+</button>
        // </div>: <></>}

        // {isAdded ? <button onClick={() => RemoveFromCard()}>Удалить из коризны</button>
        //     : <button onClick={() => AddToCard()}>Добавить в корзину</button>}

        // </div>
    );
}

export default Book
