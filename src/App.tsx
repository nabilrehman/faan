import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ToastProvider } from './components/ui/ToastProvider';

import { Home } from './pages/Home';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <ToastProvider>
        <div className="flex flex-col min-h-screen bg-bg-primary text-text-primary">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ToastProvider>
    </Router>
  );
}

export default App;
