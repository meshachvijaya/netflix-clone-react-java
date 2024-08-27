package com.joshua.netflixclone.controller;

import com.joshua.netflixclone.entity.WatchHistory;
import com.joshua.netflixclone.service.WatchHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/watch-history")
public class WatchHistoryController {
    @Autowired
    private WatchHistoryService watchHistoryService;

    @PostMapping
    public ResponseEntity<WatchHistory> createWatchHistory(@RequestBody WatchHistory watchHistory) {
        WatchHistory savedWatchHistory = watchHistoryService.saveWatchHistory(watchHistory);
        return ResponseEntity.ok(savedWatchHistory);
    }

    @GetMapping("/{id}")
    public ResponseEntity<WatchHistory> getWatchHistory(@PathVariable Long id) {
        Optional<WatchHistory> watchHistory = watchHistoryService.getWatchHistoryById(id);
        return watchHistory.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
