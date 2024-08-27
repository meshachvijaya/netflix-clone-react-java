package com.joshua.netflixclone.service;

import com.joshua.netflixclone.entity.WatchHistory;
import com.joshua.netflixclone.repository.WatchHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class WatchHistoryService {
    @Autowired
    private WatchHistoryRepository watchHistoryRepository;

    public WatchHistory saveWatchHistory(WatchHistory watchHistory) {
        return watchHistoryRepository.save(watchHistory);
    }

    public Optional<WatchHistory> getWatchHistoryById(Long id) {
        return watchHistoryRepository.findById(id);
    }
}
