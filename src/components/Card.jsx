import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card({ data }) {
  const { id, description, price, image_url } = data;

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productExists = cart.some(product => product.id === id);
    if (!productExists) {
      const productToAdd = { id, description, price, image_url };
      const updatedCart = [...cart, productToAdd];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      alert("Item added to cart!");
    } else {
      alert("This item is already in your cart!");
    }
  };

  return (
    <div className="card-items" key={id}>
      <Link to={`/product_details/${id}`} className="card-link">
        <img src={image_url} alt={description} />
      </Link>
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
    image_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
