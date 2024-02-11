import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Quem_somos from './pages/Quem_somos';
import Contato from './pages/Contato'



export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/servicos' element={<Quem_somos />} />
          <Route path='/quem-somos' element={<Quem_somos />} />
          <Route path='/contatos' element={<Contato />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}