package org.example.backend.repository;

import org.example.backend.model.Player;
import org.example.backend.model.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PlayerRepository extends JpaRepository<Player, Long>{

    @Query(value = "SELECT * FROM song ORDER BY RANKING() LIMIT 5", nativeQuery = true)
    List<Song> findThreeRandom();

}
