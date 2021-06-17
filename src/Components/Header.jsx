import React from 'react'
import { Link } from 'react-router-dom';

function Header(props) {
    
    return (
        <header className="Header">
            <div className="Header-logo"><h1>BookShop</h1></div>
            <div className="Header-Menu">
                <Link to="/Books">Товары</Link>
                <Link to="/Card">Корзина</Link>
            </div>
        </header >
    )
}




export default Header
