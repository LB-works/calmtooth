
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { fetchGMBData } from './services/gmbService';
import { GMBData } from './types';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { Loader2 } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [data, setData] = useState<GMBData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const gmbData = await fetchGMBData();
        setData(gmbData);
      } catch (error) {
        console.error("Failed to load business data", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading || !data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <Loader2 className="animate-spin text-teal-600 mb-4" size={48} />
        <h2 className="text-xl font-bold text-slate-800">Loading Excellence...</h2>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <Layout data={data}>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/services" element={<ServicesPage data={data} />} />
          <Route path="/about" element={<AboutPage data={data} />} />
          <Route path="/reviews" element={<ReviewsPage data={data} />} />
          <Route path="/contact" element={<ContactPage data={data} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
