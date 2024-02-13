import React from 'react';
import RepositoryListItem from './RepositoryListItem';

const RepositoryList = ({ repositories, addToFavorites }) => (
  <ul>
    {repositories &&
      repositories.map((repository) => (
        <RepositoryListItem
          key={repository.id}
          repository={repository}
          addToFavorites={addToFavorites}
        />
      ))}
  </ul>
);

export default RepositoryList;
