import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../Redux/Reducers/cartReducer'

function Cart(props) {

    let totalPrice = 0
    
    props.items.map(book => {
        totalPrice = totalPrice + book.price
    });
   
    

     return (

        <div className='CartContainer'>
            {props.items.map(item => <div className="Card-Item">
                <img src={item.image} />
                <h3>{item.title}</h3>
                <h4>{item.price}</h4>
                <button onClick={() => props.removeFromCart(item.id)}>Удалить</button>
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

let CartContainer = connect(mapStateToProps, { removeFromCart })(Cart)


export default CartContainer
