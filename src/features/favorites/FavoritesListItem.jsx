import React from 'react';
import { Link } from 'react-router-dom';

const FavoritesListItem = ({ repo, removeFromFavorites }) => (
  <div className="container">
    <li className="listItem">
      <h2 className="title">{repo.description}</h2>
      <Link to={`/repository/${repo.id}`} className="link">
        {repo.full_name}
      </Link>
      <p className="info">Stars: {repo.stargazers_count}</p>
      <p className="info">Forks: {repo.forks_count}</p>
      <img src={repo.owner.avatar_url} alt="Avatar" className="avatar" />
      <button onClick={() => removeFromFavorites(repo.id)} className="button">
        Удалить
      </button>
    </li>
  </div>
);

export default FavoritesListItem;
