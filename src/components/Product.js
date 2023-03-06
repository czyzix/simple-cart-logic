const Product = (props) => {
    
    const {product} = props;
    return (
        <div className="card">
            <img className="small" src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                <button>Add To Cart</button>
            </div>
        </div>
    );
}
 
export default Product;