import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home, Subsidiaries, SubsidiaryDetail, About, Contact, Testimonials, NotFound } from './pages';
import { useAnalytics, useScrollDepth } from './hooks';

const AppContent: React.FC = () => {
  // Track page views and scroll depth
  useAnalytics();
  useScrollDepth();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subsidiaries" element={<Subsidiaries />} />
        <Route path="/subsidiary/:id" element={<SubsidiaryDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

