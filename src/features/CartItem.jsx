import PropTypes from 'prop-types'

import image from "../assets/image.jpg"
function CartItem(props){
    const {id, description, price} = props.data

    return(
        <div className="cartItem" key={id}>
            <img src={image} alt="" />
            <div className="description">{description}</div>
            <div className="price">{price}</div>
        </div>
    )
}
CartItem.propTypes = {
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  };
export default CartItem