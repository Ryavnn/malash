import { useEffect, useState } from 'react';
import CartItem from './CartItem';
import Navbar from '../components/Navbar';
import '../styles/Cart.css'; 
import useAuthCheck from '../features/useAuthCheck';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    useAuthCheck();

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(items);
    }, []);

    const handleRemoveItem = (itemId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    };

    return (
        <div className="cart-container">
            <Navbar />
            <h1 className="cart-title">Your Cart Items</h1>
            <div className="cart-items">
                {cartItems.length > 0 ? (
                    cartItems.map(item => (
                        <CartItem key={item.id} data={item} onRemove={handleRemoveItem} />
                    ))
                ) : (
                    <p className="no-items">No items in cart.</p>
                )}
            </div>
        </div>
    );
}

export default Cart;
