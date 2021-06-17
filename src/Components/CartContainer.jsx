import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../Redux/Reducers/cartReducer'

function Cart(props) {
    

    console.log(props)
    return (

        <div className='CartContainer'>
            {props.items.map(item => <div className="Card-Item">
                <img src={item.image}/>
                <h3>{item.title}</h3> 
                <h4>{item.price}</h4>
                <button onClick={()=>props.removeFromCart(item.id)}>Удалить</button>
            </div>)}     
            <button>Оплатить</button>       
        </div>

    )
}


let mapStateToProps = (state) => {
    return {
        items: state.cart.items
    }
}

let CartContainer = connect(mapStateToProps, {removeFromCart})(Cart)


export default CartContainer
