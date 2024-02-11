import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhoAre from './pages/WhoAre';
import Contact from './pages/Contact';
import Services from './pages/Services';



export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/servicos' element={<Services />} />
          <Route path='/quem-somos' element={<WhoAre />} />
          <Route path='/contatos' element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}