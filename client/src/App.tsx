import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Layout } from './containers/Layout';
import QuestionPage from './pages/QuestionPage';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/questions/:id" element={<QuestionPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
