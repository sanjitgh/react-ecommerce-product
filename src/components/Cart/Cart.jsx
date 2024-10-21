import "./Cart.css";
const Cart = ({ cart, handelRemoveFromCart }) => {
  return (
    <div>
      <h2>Total Cart: {cart.length}</h2>
      <div className="cart-container">
        {cart.map((product) => (
          <div key={product.id} className="cart-inner-container">
            <img src={product.image}></img>
            <button onClick={() => handelRemoveFromCart(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
