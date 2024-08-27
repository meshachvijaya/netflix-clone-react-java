package com.joshua.netflixclone.repository;

import com.joshua.netflixclone.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
