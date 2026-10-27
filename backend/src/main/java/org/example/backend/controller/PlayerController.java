package org.example.backend.controller;

import org.example.backend.service.PlayerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.example.backend.model.Player;
import org.example.backend.service.PlayerService;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/player")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class PlayerController {

    private final PlayerService playerService;

    public PlayerController(PlayerService playerService){
        this.playerService = playerService;
    }

    @GetMapping
    public ResponseEntity<List<Player>> getAll(){
        List<Player> list = playerService.getAll();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Player> getById(@PathVariable Long id){
        Optional<Player> player = playerService.getById(id);

        if(player.isEmpty()){
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(player.get());
        }
    }

    @PostMapping
    public ResponseEntity<Player> save(@RequestBody Player player)
            throws IOException {

        Player newPlayer = playerService.save(
                player.getName(),
                player.getSchool(),
                player.getPoints()
        );

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(newPlayer);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        playerService.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
