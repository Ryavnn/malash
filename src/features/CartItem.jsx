import PropTypes from 'prop-types';
import '../styles/CartItem.css';

function CartItem({ data, onRemove }) {
    const { id, description, price, image_url } = data;

    return (
        <div className="cartItem">
            <img src={image_url} alt={description} />
            <div className="description">{description}</div>
            <div className="price">Ksh {price}</div>
            <button className="remove-from-cart" onClick={() => onRemove(id)}>Remove from Cart</button>
        </div>
    );
}

CartItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image_url: PropTypes.string,
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default CartItem;
