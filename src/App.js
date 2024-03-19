import NavBar from './Component/Navbar';
import React from 'react';
import { BrowserRouter as Router, Route ,Routes,useLocation} from 'react-router-dom';
import Home from './Component/Home';
import Footer from './Component/Footer';
import './App.css';
import About from './Component/About';
import Event from './Component/Event';
import Gallary from './Component/Gallary';
import Contact from './Component/Contact';
import Donate from './Component/Donate';
import Policy from './Component/Policy';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <>
   <Router>
  <ScrollToTop />
  <NavBar /> 
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/aboutus" element={<About />} />
    <Route path="/events" element={<Event />} />
    <Route path="/gallary" element={<Gallary />} />
    <Route path="/contactus" element={<Contact />} />
    <Route path="/donate" element={<Donate />} />
    <Route path="/privacypolicy" element={<Policy />} />


  </Routes>
  <Footer />
</Router>
</>
  );
}

export default App;
