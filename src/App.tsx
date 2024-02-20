
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Produtos from './pages/produtos/Produtos';
import Categorias from './pages/categorias/Categorias';
import QuemSomos from './pages/quemSomos/QuemSomos';
import Equipe from './pages/equipe/Equipe';
import Contato from './pages/contato/Contato';
import Login from './pages/login/Login';


function App() {
  return (
    <>
    <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/categorias" element={<Categorias />} />
              <Route path="/quemSomos" element={<QuemSomos />} />
              <Route path="/equipe" element={<Equipe />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/login" element={<Login />} />

            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>

  
);
}
export default App;