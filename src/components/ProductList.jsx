import { products } from "../data/products";
import ProductCard from "./ProductCard";
import '../styles/ProductList.css'

function ProductList({ products, onAddToCart }) {
    // console.log(typeof onAddToCart)
    const cards = products.map((product) => (
        <ProductCard
            key = {product.id}
            product = {product}
            onAddToCart = {onAddToCart}
        />
    ))
    return (
        <div className="product-list">
            <h2 className="section-title">Our Products</h2>
            <div className="product-grid">
                {cards}
            </div>
        </div>

    )
}

export default ProductList;