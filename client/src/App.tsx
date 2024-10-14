import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Layout } from './containers/Layout';
import QuestionPage from './pages/QuestionPage';
import ProtectedRoute from './components/ProtectedRoute';
import SignIn from './pages/SignInPage';
import SignUp from './pages/SignUpPage';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute />
            }
          >
            <Route path="/" element={<HomePage />} />
            <Route path="/questions/:id" element={<QuestionPage />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
