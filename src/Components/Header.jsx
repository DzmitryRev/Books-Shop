import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

function Header(props) {
  
    
    return (
       <div>
          
        <Menu pointing secondary>
        <Link to="/Books">
          <Menu.Item
            name='Товары'            
          />
          </Link>
         <Link to="/Card">
          <Menu.Menu position='right'>
            <Menu.Item
              name='Корзина'
            />
          </Menu.Menu>
          </Link>
        </Menu>
    </div>
    )
}




export default Header
