import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RepositoryDetail = () => {
  const { id } = useParams();
  const [repository, setRepository] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRepositoryDetails = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repositories/${id}`
        );
        const data = await response.json();
        setRepository(data);
      } catch (error) {
        console.error('Error fetching repository details:', error);
      }
    };

    fetchRepositoryDetails();
  }, [id]);

  return (
    <div className="container" >
      {repository ? (
        <>
        <div>

          <h2>{repository.full_name}</h2>
          <p className="info">Stars: {repository.stargazers_count}</p>
          <p>Forks: {repository.forks_count}</p>
          <p>Описание: {repository.description}</p>
          <img className="avatar" src={repository.owner.avatar_url} alt="Avatar" />
        </div>
        <button className="button" onClick={() => navigate(-1)}>Назад</button>
        </>
      ) : (
        <p>Загрузка</p>
      )}
    </div>
  );
};

export default RepositoryDetail;
