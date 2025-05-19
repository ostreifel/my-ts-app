import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

import './App.css';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
