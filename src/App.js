import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Items from './components/Items';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
      <Navbar>
      </Navbar>
      <Routes>
        <Route path='/navbar' element={<Navbar />}>Navbar</Route>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/item' element={<Items />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
