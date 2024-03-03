import PropTypes from 'prop-types';
import image from '../assets/image.jpg';

function Card({ data }) {
  const { id, description, price } = data;

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Check if the product already exists in the cart
    const productExists = cart.some(product => product.id === id);
    if (!productExists) {
      const productToAdd = { id, description, price };
      const updatedCart = [...cart, productToAdd];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      alert("Item added to cart!");
    } else {
      alert("This item is already in your cart!");
    }
  };

  return (
    <div className="card-items" key={id}>
      <img src={image} alt="" />
      <div className="item-content">
        <div className="description">{description}</div>
        <span>Ksh {price}</span>
        <button className="add-to-cart" onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
