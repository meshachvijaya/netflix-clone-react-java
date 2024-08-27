"use client"

import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axios';

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get('/movies');
        console.log('Movies:', response.data); // Debugging
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.length > 0 ? (
        movies.map(movie => (
          <div key={movie.id} className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-white text-lg">{movie.title}</h2>
          </div>
        ))
      ) : (
        <p className="text-white">No movies available.</p>
      )}
    </div>
  );
}
