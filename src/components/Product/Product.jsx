import "./Product.css"

const Product = ({product, handelAddToCart}) => {
    const {name,description,price,category,image} = product
    return (
        <div className="product">
            <img src={image} alt="" />
            <h5><b>Name:</b> {name}</h5>
            <p><b>Details:</b> {description}</p>
            <p><b>Category:</b> {category}</p>
            <p><b>Price:</b> {price}</p>
            <button onClick={()=>handelAddToCart(product)}>Purchase</button>
        </div>
    );
};

export default Product;