import PropTypes from 'prop-types'
import image from "../assets/image.jpg";
import { shopContext } from '../features/context';
import { useContext } from 'react';
function Card(props) {
  const {id, description, price} = props.data
  const {addToCart} = useContext(shopContext)
  return (
    <>
            <div className="card-items" key={id}>
              <img src={image} alt="" />
              <div className="item-content">
        
                <div className="description">{description}</div>
                <span>Ksh {price}</span>
                <button className="add-to-cart" onClick={() => addToCart(id)}>Add to cart</button>
              </div>
            </div>
    </>
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
