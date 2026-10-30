package org.example.backend.service;

import org.example.backend.model.Player;
import org.example.backend.model.Song;
import org.example.backend.repository.PlayerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlayerService {
    private final PlayerRepository playerRepository;

    public PlayerService(PlayerRepository playerRepository){
        this.playerRepository = playerRepository;
    }

    public List<Player> getAll(){
        return playerRepository.findAll();
    }

    public Optional<Player> getById(Long id){
        return playerRepository.findById(id);
    }

    public List<Player> getTop5Players(){
        return playerRepository.getTop5Players();
    }

    public Player save(String name, String school, int points ) {
        Player player = new Player();

        player.setName(name);
        player.setScore(points);
        player.setSchool(school);

        return playerRepository.save(player);
    }

    public void deleteById(Long id){
        playerRepository.deleteById(id);
    }
}
