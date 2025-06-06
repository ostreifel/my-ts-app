import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails';

import './App.css';


function App() {
  // TODO add navigation toolbar at top
  return (
    <BrowserRouter>
      {/* For styling purposes. */}
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
