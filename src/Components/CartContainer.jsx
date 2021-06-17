import React from 'react'
import { connect, useStore } from 'react-redux'
import { removeFromCart, upQuantity, downQuantity } from '../Redux/Reducers/cartReducer'

function Cart(props) {

    let totalPrice = 0
    
    props.items.map(book => {
        totalPrice = totalPrice + book.price
    });
    
    
    console.log(props.items)
    

     return (

        <div className='CartContainer'>
            {props.items.map(item => <div className="Card-Item">
                <img src={item.image} />
                <h3>{item.title}</h3>
                <h4>{item.price}</h4>
                <h4>{item.quanity}</h4> 
                <button onClick={() => props.upQuantity(item.id)}>UpQuanity</button>
                {item.quanity>1?<button onClick={() => props.downQuantity(item.id)}>DownQuanity</button>:
                <button onClick={() => props.removeFromCart(item.id)}>Удалить</button>}
                {item.quanity>1?<button onClick={() => props.removeFromCart(item.id)}>Удалить</button>:
                null}
                
            </div>)}
            <h3>Total price {totalPrice}</h3>
            <button>Оплатить</button>
        </div>

    )
}


let mapStateToProps = (state) => {
    return {
        items: state.cart.items
    }
}

let CartContainer = connect(mapStateToProps, { removeFromCart, upQuantity, downQuantity })(Cart)


export default CartContainer
