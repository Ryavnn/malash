import PropTypes from 'prop-types';
import image from "../assets/image.jpg";


function CartItem({ data, onRemove }) {
    const { id, description, price } = data;

    return (
        <div className="cartItem">
            <img src={image} alt="" />
            <div className="description">{description}</div>
            <div className="price">Ksh {price}</div>
            <button className="remove-from-cart" onClick={() => onRemove(id)}>Remove from Cart</button>
        </div>
    );
}

CartItem.propTypes = {
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string,
      price: PropTypes.number.isRequired,
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default CartItem;
