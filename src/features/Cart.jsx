import { categoryData } from "../Pages/Products";
import { shopContext } from "./context";
import { useContext } from "react";
import CartItem from "./CartItem";
import Navbar from "../components/Navbar";
function Cart() {
  const { cartItems } = useContext(shopContext);
  return (
    <>
      <Navbar />
      <div className="cart">
        <div>
          <h1>Your cart items</h1>
        </div>
        <div className="cart-items">
          {categoryData.map((item) => {
            if (cartItems[item.id] !== 0) {
              return <CartItem key={2} data={item} />;
            }
          })}
        </div>
      </div>
    </>
  );
}
export default Cart;
