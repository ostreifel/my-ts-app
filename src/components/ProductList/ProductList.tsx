import {useSearchParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductList as ProductListData } from '../../schema'
import ProductCard from './ProductCard/ProductCard';
import SearchBox from './SearchBox/SearchBox';

import './ProductList.css';

const PAGE_SIZE = 15;

function getUrl(skip: number) {
  if (!skip) {
    return `https://dummyjson.com/products?limit=${PAGE_SIZE}`;
  }
  return `https://dummyjson.com/products?skip=${skip}&limit=${PAGE_SIZE}`;
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
      <header className='ProductListHeader'>
        {/* Empty div for css styling */}
        <div></div>
        <h1>Products</h1>
        <div className='SearchBoxWrapper'>
          <SearchBox/>
        </div>
      </header>
      {productList ? <><div className="Products">
        {productList.products.map(product =>
          <ProductCard key={product.id} product={product} />
        )}
      </div>
      <div className="PageButtons">
        <a className={hasPreviousPage(productList) ? '': 'HidePageButton'} href={getPreviousPageUrl(productList)}>Previous Page</a>
        <a className={hasNextPage(productList) ? '' : 'HidePageButton'} href={getNextPageUrl(productList)}>Next Page</a>
      </div></>
       : <p>Loading...</p>}
    </>
  );
}

export default ProductList;
