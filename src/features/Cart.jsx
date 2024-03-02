import { useState, useEffect, useContext } from 'react';
import CartItem from './CartItem';
import Navbar from '../components/Navbar';
import { shopContext } from './context';

function Cart() {
  const { cartItems } = useContext(shopContext);
  const [cartItemsData, setCartItemsData] = useState([]);

  useEffect(() => {
    setCartItemsData(Object.values(cartItems).filter(item => item.id === 1));
  }, [cartItems]);

  return (
    <>
      <Navbar />
      <div className="cart">
        <div>
          <h1>Your cart items</h1>
        </div>
        <div className="cart-items">
          {cartItemsData.map((item) => (
            <CartItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Cart;
