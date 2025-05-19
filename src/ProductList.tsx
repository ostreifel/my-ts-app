import {useEffect, useState} from 'react';
import {ProductList as ProductListData} from './schema'
import Product from './Product';

import './ProductList.css';



function ProductList() {
  const [productList, setProductList] = useState<ProductListData|null>(null);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then((response) => {
        setProductList(response)
      });
  }, [])
  return (
    <div className="ProductList">
      <h1>Products</h1>
      {productList ? <div className="Products">
        {productList.products.map(product => 
          <Product product={product} />
        )}
        </div>: <p>Loading...</p>}
    </div>
  );
}

export default ProductList;
