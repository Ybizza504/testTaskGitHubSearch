import React from 'react';
import FavoritesList from './FavoritesList';

const FavoritesPages = ({ favorites, removeFromFavorites }) => {
  return (
    <div style={{ flex: 1}}>
      <FavoritesList
        favorites={favorites}
        removeFromFavorites={removeFromFavorites}
      />
    </div>
  );
};

export default FavoritesPages;
