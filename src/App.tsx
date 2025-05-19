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
      <h1>Products</h1>
      {productList ? <div className="ProductList">
        {productList.products.map(product => 
          <Product product={product} />
        )}
        </div>: <p>Loading...</p>}
    </div>
  );
}

export default App;
