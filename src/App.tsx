import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

import './App.css';



function App() {
  // TODO add navigation toolbar at top
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
