import {useSearchParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductList as ProductListData } from '../../schema'
import ProductCard from './ProductCard/ProductCard';

import './ProductList.css';

const PAGE_SIZE = 30;

function getUrl(skip: number) {
  if (!skip) {
    return 'https://dummyjson.com/products';
  }
  return `https://dummyjson.com/products?skip=${skip}`;
}

function getNextPageUrl(productList: ProductListData): string {
  const skip = productList.skip + PAGE_SIZE;
  return `/?skip=${skip}`;
}

function hasNextPage(productList: ProductListData): boolean {
  return productList.products.length + productList.skip < productList.total;
}

function getPreviousPageUrl(productList: ProductListData): string {
  const skip = productList.skip - PAGE_SIZE;
  return `/?skip=${skip}`;
}

function hasPreviousPage(productList: ProductListData): boolean {
  return productList.skip > 0;
}

function ProductList() {
  const [productList, setProductList] = useState<ProductListData | null>(null);
  const [searchParams] = useSearchParams();
  const skip = Number(searchParams.get('skip')) || 0;

  useEffect(() => {
    fetch(getUrl(Number(skip)))
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
          <ProductCard key={product.id} product={product} />
        )}
        <div className="PageButtons">
          {hasPreviousPage(productList) && <a href={getPreviousPageUrl(productList)}>Previous Page</a>}
          {hasNextPage(productList) && <a href={getNextPageUrl(productList)}>Next Page</a>}
        </div>
      </div> : <p>Loading...</p>}
    </>
  );
}

export default ProductList;
