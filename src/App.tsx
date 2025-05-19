import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import {ProductList} from './schema'
import Product from './Product';

import './App.css';



function App() {
  const [productList, setProductList] = useState<ProductList|null>(null);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then((response) => {
        setProductList(response)
      });
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {productList ? productList.products.map(product => 
          <Product product={product} />
        ): <p>Loading...</p>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
