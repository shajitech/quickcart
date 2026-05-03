import '../styles/ProductCard.css'

function ProductCard(props){
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src= {props.image} alt= {props.name} className="product-image" />
            </div>
            <div className="product-info">
                <h3 className="product-name">{props.name}</h3>
                <p className="product-description">{props.description} </p>
                <div className="product-footer">
                    <span className="product-price">${props.price}</span>
                    <span className="product-category">{props.category}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;