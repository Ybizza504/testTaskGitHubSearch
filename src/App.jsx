import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import SearchRepositories from './features/SearchRepositories';
import RepositoryDetail from './features/repository/RepositoryDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchRepositories />} />
        <Route path="/repository/:id" element={<RepositoryDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
