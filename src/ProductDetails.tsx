import {Product as ProductData} from './schema';
import {useParams} from 'react-router-dom';

function ProductDetails() {
  const {id} = useParams()
  // TODO get the product with the id
  return (<div><h1>{id}</h1></div>);
}

export default ProductDetails;