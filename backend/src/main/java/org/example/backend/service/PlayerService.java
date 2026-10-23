package org.example.backend.service;

import org.example.backend.model.Player;
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

    public Player save(Player player){
        return playerRepository.save(player);
    }

    public void deleteById(Long id){
        playerRepository.deleteById(id);
    }
}
