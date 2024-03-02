import { createContext, useState } from "react"
import categoryData from "../Pages/Products"
import PropTypes from "prop-types";

export const shopContext = createContext()
function getDefaultCart() {
    let cart = {}   
    for(let i = 1; i < categoryData.length +1; i++ ){
        cart[i] = 0
    }
    return cart
}
const ShopContextProvider =(props) =>{
    const [cartItems, setcartItems] = useState(getDefaultCart())
    function addToCart(ItemId){
        setcartItems((prev) => ({...prev, [ItemId]: prev[ItemId]+1}))
        console.log("item added")
    }
    function removeFromCart(ItemId){
        setcartItems((prev) => ({...prev, [ItemId]: prev[ItemId]-1}))
    }
    const contentValue = {cartItems, addToCart, removeFromCart}
    return(
        <shopContext.Provider value={contentValue}>{props.children}</shopContext.Provider>
    )
}
ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default  ShopContextProvider;