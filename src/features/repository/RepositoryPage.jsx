import React from 'react';
import RepositoryList from './RepositoryList';

const RepositoryPage = ({ repositories, addToFavorites }) => (
  <div style={{ flex: 1 }}>
    <RepositoryList
      repositories={repositories}
      addToFavorites={addToFavorites}
    />
  </div>
);

export default RepositoryPage;
