import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Header from './components/Header';
import Produtos from './components/Produtos';
import Produto from './components/Produto';



function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Header />

      <div className="content">
      <Routes>
        <Route path="/" element={<Produtos />}/>
        <Route path="produto/:id" element={<Produto />}/>
        <Route path="contato" element={<Contato />}/>
      </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

