import { useState, useEffect } from 'react';
import {Product as ProductData} from '../../schema';
import {useParams} from 'react-router-dom';

import './ProductDetails.css';
import ReviewList from './ReviewList/ReviewList';

function ProductDetails() {
  const {id} = useParams()
  const [productData, setProductData] = useState<ProductData | null>(null);

  useEffect(() => {
    if (!id) { return; }
    fetch(`https://dummyjson.com/products/${encodeURIComponent(id)}`)
    .then(response => response.json())
    .then(response => {
      setProductData(response);
    });
  }, [id])

  return (productData ? 
      <main className="El">
        <h1>{productData.title}</h1>
        <p>{productData.description}</p>
        {productData.images.map(image => 
          <img className="Image" src={image}/>
        )}
        <ReviewList reviews={productData.reviews} />
      </main> :
      <div>Loading...</div>);
}

export default ProductDetails;