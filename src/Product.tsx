import {Product as ProductData} from './schema';

function Product({product}: {product: ProductData}) {
  return (
    <div>{product.title}</div>
  )
}
export default Product;