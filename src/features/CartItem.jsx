import PropTypes from 'prop-types';
import { useState } from 'react';
import image from "../assets/image.jpg";
import "../styles/CartItem.css";

function CartItem({ data, onRemove }) {
    const { id, description, price, image_url } = data;
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
        const productId = data.id;
        handleAddReview(productId, newRating);
    };

    const handleAddReview = (productId, rating) => {
        const userId = 1;
        const comment = "This product exceeded my expectations. It's very reliable and performs well.";
        const createdAt = new Date().toISOString();
        const token = localStorage.getItem('access_token');

        fetch('http://127.0.0.1:5000/api/reviews', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: userId,
                product_id: productId,
                rating: rating,
                comment: comment,
                created_at: createdAt
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Review created successfully:', data);
        })
        .catch(error => {
            console.error('Error creating review:', error);
        });
    };

    return (
        <div className="cartItem">
            <img src={image_url} alt={description} />
            <div className="description">{description}</div>
            <div className="price">Ksh {price}</div>
            <div className="rating">
                {[...Array(5)].map((_, index) => (
                    <span
                        key={index}
                        className={`star ${index < rating ? 'active' : ''}`}
                        onClick={() => handleRatingChange(index + 1)}
                    >
                        &#9733;
                    </span>
                ))}
            </div>
            <button className="remove-from-cart" onClick={() => onRemove(id)}>Remove from Cart</button>
        </div>
    );
}

CartItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image_url: PropTypes.string.isRequired,
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default CartItem;
