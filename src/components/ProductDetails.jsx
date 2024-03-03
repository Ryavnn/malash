import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/ProductDetails.css';

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch product details based on the productId
    fetch(`http://127.0.0.1:5000/api/products/${productId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setProduct(data);
        setReviews(data.reviews); // Set reviews from product data
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [productId]);

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <Navbar /> {/* Include Navbar component */}
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: Ksh {product.price}</p>
        <img className="product-image" src={product.image_url} alt={product.description} />

        <div className="reviews">
          <h3 className="reviews-heading">Reviews</h3>
          <ul className="review-list">
            {reviews.map(review => (
              <li key={review.id} className="review-item">
                <p><strong>Rating:</strong> {review.rating}</p>
                <p><strong>Comment:</strong> {review.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
