import React, { useState, useEffect } from 'react';
import RepositoryPage from './repository/RepositoryPage';
import FavoritesPages from './favorites/FavoritesPages';

const SearchRepositories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (childData) => {
    const isAlreadyInFavorites = favorites.some(
      (repository) => repository.id === childData.id
    );

    if (!isAlreadyInFavorites) {
      setFavorites((prevFavorites) => {
        const updatedFavorites = [...prevFavorites, childData];
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        return updatedFavorites;
      });
    }
  };

  const removeFromFavorites = (repoId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter(
        (repo) => repo.id !== repoId
      );
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${searchTerm}`
      );
      const data = await response.json();
      setRepositories(data.items);
    } catch (error) {
      console.error('Ошибка фетч запроса', error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <div className="container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input"
        />
        <button onClick={handleSearch} className="button">
          Поиск
        </button>
      </div>

      <div style={{ display: 'flex' }}>
        <RepositoryPage
          repositories={repositories}
          addToFavorites={addToFavorites}
        />
        <FavoritesPages
          favorites={favorites}
          removeFromFavorites={removeFromFavorites}
        />
      </div>
    </div>
  );
};

export default SearchRepositories;
