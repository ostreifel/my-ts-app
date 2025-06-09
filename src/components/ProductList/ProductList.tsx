import {useSearchParams, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductList as ProductListData } from '../../schema'
import ProductCard from './ProductCard/ProductCard';
import SearchBox from './SearchBox/SearchBox';
import NoResults from './NoResults/NoResults';

import './ProductList.css';

const PAGE_SIZE = 16;

function getUrl(skip: number, userQuery?: string) {
  if (userQuery) {
    return `https://dummyjson.com/products/search?limit=${PAGE_SIZE}&q=${encodeURIComponent(userQuery)}`;
  }
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
  const userQuery = searchParams.get('q') || '';

  useEffect(() => {
    const url = userQuery ? getUrl(0, userQuery) : getUrl(Number(skip));
    fetch(url)
      .then(response => response.json())
      .then((response) => {
        setProductList(response)
      });
  }, [userQuery])

  const navigate = useNavigate();
  
  function updateUrlForSearchQuery(query: string): void {
    if (query) {
      navigate(`/?q=${encodeURIComponent(query)}`, {replace: userQuery !== ''});
    } else if (!query && userQuery) {
      navigate('/');
    }
  }

  return (
    <>
      <header className='ProductListHeader'>
        {/* Empty div for css styling */}
        <div></div>
        <h1>Products</h1>
        <div className='SearchBoxWrapper'>
          <SearchBox value={userQuery} searchUpdated={updateUrlForSearchQuery}/>
        </div>
      </header>
      {productList ? <>
        <div className="Products">
          {productList.products.length > 0 ? productList.products.map(product =>
            <ProductCard key={product.id} product={product} />
          ) : <NoResults/>}
        </div>
        {userQuery ? null : <div className="PageButtons">
          <a className={hasPreviousPage(productList) ? '': 'HidePageButton'} href={getPreviousPageUrl(productList)}>Previous Page</a>
          <a className={hasNextPage(productList) ? '' : 'HidePageButton'} href={getNextPageUrl(productList)}>Next Page</a>
        </div>}
      </>
       : <p>Loading...</p>}
    </>
  );
}

export default ProductList;
