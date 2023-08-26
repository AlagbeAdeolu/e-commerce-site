import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';

import ProductDetail from './pages/ProductDetail';
import Layout from './pages/Layout';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
