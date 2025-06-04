import {useEffect, useState} from 'react';
import {ProductList as ProductListData} from '../../schema'
import ProductCard from './ProductCard/ProductCard';

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
    <>
      <h1>Products</h1>
      {productList ? <div className="Products">
        {productList.products.map(product => 
          <ProductCard product={product} />
        )}
        </div>: <p>Loading...</p>}
    </>
  );
}

export default ProductList;
