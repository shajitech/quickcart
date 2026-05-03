import { products } from "../data/products";
import ProductCard from "./ProductCard";
import '../styles/ProductList.css'

function ProductList({ products }) {

    const cards = products.map((product) => (
        <ProductCard
            key = {product.id}
            name={product.name}
            description={product.description}
            image={product.image}
            price={product.price}
            category={product.category}
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