package com.joshua.netflixclone.repository;

import com.joshua.netflixclone.entity.WatchHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WatchHistoryRepository extends JpaRepository<WatchHistory, Long> {
}
