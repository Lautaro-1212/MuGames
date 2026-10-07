package org.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import org.example.backend.model.Song;

import java.util.List;

public interface SongRepository extends JpaRepository<Song, Long> {

    @Query(value = "SELECT * FROM song ORDER BY RANDOM() LIMIT 3", nativeQuery = true)
    List<Song> findThreeRandom();

}
