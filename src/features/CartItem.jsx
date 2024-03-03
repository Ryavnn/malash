import PropTypes from 'prop-types';
import { useState } from 'react';
import image from "../assets/image.jpg";
import "../styles/CartItem.css";

function CartItem({ data, onRemove }) {
    const { id, description, price, image_url } = data;
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState(""); // State to store comment
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility

    const handleRatingChange = (newRating) => {
        setRating(newRating);
        setShowModal(true); // Show modal after rating is set
    };

    const handleAddReview = () => {
        const userId = 1;
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
                product_id: id,
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
            setShowModal(false); // Hide modal after review is submitted
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

            {/* Modal for inputting comment */}
            {showModal && (
                <div className="modal">
                    <textarea
                        className="comment-input"
                        placeholder="Enter your comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button className="submit-btn" onClick={handleAddReview}>Submit</button>
                </div>
            )}
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
