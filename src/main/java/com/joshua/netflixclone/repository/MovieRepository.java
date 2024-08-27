package com.joshua.netflixclone.repository;

import com.joshua.netflixclone.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}
