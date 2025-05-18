import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

// TODO move this interface to its own file.
interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  }
  // TODO the other fields
}

function App() {
  const [products, setProducts] = useState<Product[]|null>(null);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then((response) => {
        setProducts(response.products)
      });
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {products ? products.map(product => 
          <div>
            {product.title}
            {product.description}
          </div>
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
