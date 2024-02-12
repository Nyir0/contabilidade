import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhoAre from './pages/WhoAre';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Adm from './pages/Adm';
import Login from './pages/Login';

const Layout = ({children}) => (
    <>
    <Header />
    {children}
    <Footer />
    </>
);

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout><Home /></Layout>} />
          <Route path='/servicos' element={<Layout><Services /></Layout>} />
          <Route path='/quem-somos' element={<Layout><WhoAre /></Layout>} />
          <Route path='/contatos' element={<Layout><Contact /></Layout>} />
          <Route path='/login' element={<Login />} />
          <Route path='/adm' element={<Adm />} />
        </Routes>
      </Router>
    </>
  )
}