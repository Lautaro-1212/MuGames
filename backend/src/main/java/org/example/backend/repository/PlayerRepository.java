package org.example.backend.repository;

import org.example.backend.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long>{
}
