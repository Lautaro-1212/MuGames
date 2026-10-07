package org.example.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.example.backend.model.Song;
import org.example.backend.service.SongService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/song")
public class SongController {

    private final SongService songService;

    public SongController(SongService songService){
        this.songService = songService;
    }

    @GetMapping
    public ResponseEntity<List<Song>> getAll(){
        List<Song> list = songService.getAll();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Song> getById(@PathVariable Long id){
        Optional<Song> song = songService.getById(id);

        if (song.isEmpty()){
            return  ResponseEntity.notFound().build();
        } else{
            return ResponseEntity.ok(song.get());
        }
    }

    @PostMapping
    public ResponseEntity<Song> save(@RequestBody Song song){
        Song newSong = songService.save(song);
        return ResponseEntity.status(HttpStatus.CREATED).body(newSong);
    }

    public ResponseEntity<Void> delete(@PathVariable Long id){
        songService.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
