import "./Cart.css";
const Cart = ({ cart }) => {
  return (
    <div>
        <h2>Total Cart: {cart.length}</h2>
        <div className="cart-container">
            {
                cart.map(product => <img key={product.id} src={product.image}></img>)
            }
        </div>
    </div>
  )
};

export default Cart;
