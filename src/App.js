import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Realisations from './pages/Realisations';
import RealisationDetail from './pages/RealisationDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Factures from './pages/Factures';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Page factures cachée — pas de nav ni footer */}
        <Route path="/factures" element={<Factures />} />

        {/* Pages publiques avec nav et footer */}
        <Route path="/*" element={
          <>
            <Nav />
            <Routes>
              <Route path="/"                      element={<Home />} />
              <Route path="/services"              element={<Services />} />
              <Route path="/realisations"          element={<Realisations />} />
              <Route path="/realisations/:id"      element={<RealisationDetail />} />
              <Route path="/about"                 element={<About />} />
              <Route path="/contact"               element={<Contact />} />
            </Routes>
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
