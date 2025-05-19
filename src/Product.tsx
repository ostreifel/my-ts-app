import {Product as ProductData} from './schema';
import './Product.css';

function Product({product}: {product: ProductData}) {
  return (
    <div className="Product">{product.title}</div>
  )
}
export default Product;