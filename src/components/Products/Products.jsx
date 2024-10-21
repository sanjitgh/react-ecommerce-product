import { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";
import { addToLS, getStoredCard } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // load cart from local stroage
  useEffect(() => {
    if (products.length > 0) {
      const storedCart = getStoredCard();
      const saveCart = [];
      for (const id of storedCart) {
        const product = products.find((product) => product.id === id);
        if (product) {
          saveCart.push(product);
        }
      }
      setCart(saveCart);
    }
  }, [products]);

  const handelAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToLS(product.id);
  };

  return (
    <div>
      <h2>Available Product:{products.length}</h2>
      <Cart cart={cart}></Cart>
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handelAddToCart={handelAddToCart}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
