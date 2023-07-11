import '@/styles/App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from '@/components/Navbar'
import MainPage from '@/screens/Home'
import NotFound from '@/screens/NotFound'
import Cart from '@/screens/Cart'
import Footer from '@/components/Footer'
import SingleProduct from '@/screens/SingleProduct'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route index element={<MainPage/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/product/:id' element={<SingleProduct/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer />

      <Footer/>
    </>
  )
}

export default App
