import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import Services from './pages/Services';
import GetWebsite from './pages/GetWebsite';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:serviceId" element={<ServiceDetail />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/:projectId" element={<ProjectDetail />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      {/* Standalone landing page — no Navbar/Footer, accessible via /get-website only */}
      <Route path="/get-website" element={<GetWebsite />} />
      </Routes>
    </>
  );
}

export default App;
