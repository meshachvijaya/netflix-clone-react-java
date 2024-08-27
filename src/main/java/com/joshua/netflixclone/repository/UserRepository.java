package com.joshua.netflixclone.repository;

import com.joshua.netflixclone.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
