import {Product as ProductData} from './schema';
import './Product.css';

function Product({product}: {product: ProductData}) {
  return (
    // TODO add an href here
    <a className="Product" href={`/product/${encodeURIComponent(product.id)}`}>
        <h2>{product.title}</h2>
        <img className="ProductThumbnail" src={product.thumbnail} />
    </a>
  )
}
export default Product;