package org.example.backend.repository;

import org.example.backend.model.Player;
import org.example.backend.model.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PlayerRepository extends JpaRepository<Player, Long>{
    @Query(value = "SELECT * FROM player ORDER BY score DESC LIMIT 5", nativeQuery = true)
    List<Player> getTop5Players();
}
