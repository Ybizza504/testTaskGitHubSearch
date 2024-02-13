import React from 'react';
import FavoritesListItem from './FavoritesListItem';

const FavoritesList = ({ favorites, removeFromFavorites }) => (
  <div>
    <ul>
      {favorites &&
        favorites.map((repository) => (
          <FavoritesListItem
            key={repository.id}
            repo={repository}
            removeFromFavorites={removeFromFavorites}
          />
        ))}
    </ul>
  </div>
);

export default FavoritesList;
