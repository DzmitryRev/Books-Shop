import React, { useState } from 'react'
import { Menu, Input } from 'semantic-ui-react'


let BY_PRICE_UP = 'By Price Up'
let BY_PRICE_DOWN = 'By Price Down'
let BY_RATING_UP = 'By Rating Up'
let BY_RATING_DOWN = 'By Rating Down'
let ALL = 'All'


function FilterTable (props) {
    
    let [activeItem, setActiveItem] = useState(ALL)

    let createActionSort = (par) => {
        props.sortBy(par)
        setActiveItem(par)
    }

    return (
        
        <Menu secondary>
        <Menu.Item
          name='Все'
          active={activeItem === ALL}
          onClick={()=>createActionSort(ALL)}
        />
        <Menu.Item
          name='цена(дешевле)'
          active={activeItem === BY_PRICE_UP}
          onClick={()=>createActionSort(BY_PRICE_UP)}
        />
        <Menu.Item
          name='цена(дороже)'
          active={activeItem === BY_PRICE_DOWN}
          onClick={()=>createActionSort(BY_PRICE_DOWN)}
        />
        <Menu.Item
          name='рейтинг(ниже)'
          active={activeItem === BY_RATING_UP}
          onClick={()=>createActionSort(BY_RATING_UP)}
        />
        <Menu.Item
          name='рейтинг(выше)'
          active={activeItem === BY_RATING_DOWN}
          onClick={()=>createActionSort(BY_RATING_DOWN)}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input placeholder='Search...' onChange={(e)=>props.setSearchQuery(e.target.value)} />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    
    )
}


export default FilterTable