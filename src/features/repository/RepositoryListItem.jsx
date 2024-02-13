import React from 'react';
import { Link } from 'react-router-dom';
import CopyToClipboard from '../CopyToClipboard';
import './RepositoryListItem.css'; 

const RepositoryListItem = ({ repository, addToFavorites }) => (
  <div className="container">
    <li className="listItem">
      <h2 className="title">{repository.description}</h2>
      
      <p className="info">Stars: {repository.stargazers_count}</p>
      <p className="info">Forks: {repository.forks_count}</p>
      <img src={repository.owner.avatar_url} alt="Avatar" className="avatar" />
      <CopyToClipboard text={repository.full_name} />
      <button  className="button_link">
      <Link to={`/repository/${repository.id}`} >
        Подробнее: {repository.full_name}
      </Link>
    </button>
      <button onClick={() => addToFavorites(repository)} className="button">
        Добавить в избранное
      </button>
    </li>
  </div>
);

export default RepositoryListItem;
