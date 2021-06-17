import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom';
import BooksContainer from './Components/BooksPage/BooksContainer';
import CartContainer from './Components/CartContainer';
import Header from './Components/Header';

function App() {


  return (
    <div className="App">
      <div className="Container">
        <Header />
        <Route path="/Card" component={CartContainer}/>
        <Route path="/Books" component={BooksContainer}/>
      </div>

    </div>
  );
}

export default App
