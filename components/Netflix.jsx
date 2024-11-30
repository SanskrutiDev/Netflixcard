// eslint-disable-next-line no-unused-vars
import React from 'react';
import sourcedata from '../api/sourcedata.json';
import './Netflix.css';

function Netflix() {
  return (
    <div className="container">
      <h1 className="heading">Netflix Series</h1>
      <ul className="card-list">
        {sourcedata.koreanDramas.map((drama, index) => (
          <li key={index} className="card">
            <div>
              <img 
                src={drama.imageUrl} 
                alt={drama.title} 
              />
              <div className="card-content">
                <h2>Title: {drama.title}</h2>
                <p>Description: {drama.description}</p>
                <p>Genre: {drama.genre}</p>
                <p>Release Year: {drama.releaseYear}</p>
                <a 
                  href={drama.netflixUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="watch-now-btn"
                >
                  Watch Now
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Netflix;
