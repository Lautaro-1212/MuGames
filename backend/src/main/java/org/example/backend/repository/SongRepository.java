package org.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.example.backend.model.Song;

//@Repository
public interface SongRepository extends JpaRepository<Song, Long> {
}
