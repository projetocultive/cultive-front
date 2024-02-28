import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Produtos from './components/produtos/Produtos';
import Categorias from './pages/categorias/Categorias';
import QuemSomos from './components/quemSomos/QuemSomos';
import Equipe from './components/equipe/Equipe';
import Contato from './components/contato/Contato';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/categorias" element={<Categorias />} />
              <Route path="/quemSomos" element={<QuemSomos />} />
              <Route path="/equipe" element={<Equipe />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
