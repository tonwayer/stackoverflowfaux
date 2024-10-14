import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Layout } from './containers/Layout';

const App: React.FC = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </Layout>
  );
};

export default App;
