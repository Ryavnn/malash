import "./App.css";
import Homepage from "./Pages/Homepage";
import Products from "./Pages/Products";
import ShopContextProvider from "./features/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./features/Cart";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  );
}

export default App;
