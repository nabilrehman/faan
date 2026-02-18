import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ToastProvider } from './components/ui/ToastProvider';

// Pages
import { Home } from './pages/Home';
// Stubs for remaining pages
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Industries } from './pages/Industries';
import { CaseStudies } from './pages/CaseStudies';
import { CaseStudyDetail } from './pages/CaseStudyDetail';
import { Partners } from './pages/Partners';
import { Hub } from './pages/Hub';
import { BlogPost } from './pages/BlogPost';
import { About } from './pages/About';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>
      <ToastProvider>
        <div className="flex flex-col min-h-screen bg-bg-primary text-text-primary selection:bg-accent-blue/30 selection:text-white">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/work" element={<CaseStudies />} />
              <Route path="/work/:slug" element={<CaseStudyDetail />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/hub" element={<Hub />} />
              <Route path="/hub/:slug" element={<BlogPost />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ToastProvider>
    </Router>
  );
}

export default App;
