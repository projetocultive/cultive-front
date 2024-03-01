import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import QuemSomos from './components/quemSomos/QuemSomos';
import Equipe from './components/equipe/Equipe';
import Contato from './components/contato/Contato';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormularioCategorias from './components/categorias/formularioCategorias/FormularioCategorias';
import DeletarCategorias from './components/categorias/deletarCategorias/DeletarCategorias';
import { ToastContainer } from 'react-toastify';
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <ToastContainer />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/quemSomos" element={<QuemSomos />} />
              <Route path="/equipe" element={<Equipe />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategorias" element={<FormularioCategorias />} />
              <Route path="/deletarCategorias/:id" element={<DeletarCategorias />} />
              <Route path="/editarCategoria/:id" element= {<FormularioCategorias />} />
              <Route path="/produtos" element={<ListaProdutos />} />
            </Routes>
          </div>

          <Footer />
        </BrowserRouter>

      </AuthProvider>
    </>
  );
}
export default App;
