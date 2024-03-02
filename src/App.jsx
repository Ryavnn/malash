import './App.css';
import Homepage from './Pages/Homepage';
import Products from './Pages/Products'; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products/:category" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
