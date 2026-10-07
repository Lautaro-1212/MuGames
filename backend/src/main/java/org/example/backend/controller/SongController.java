package org.example.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.multipart.MultipartFile;

import org.example.backend.model.Song;
import org.example.backend.service.SongService;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/song")
@CrossOrigin(origins = "http://127.0.0.1:5500")
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

    @GetMapping("/random")
    public ResponseEntity<List<Song>> getThreeRandom(){
        List<Song> songs = songService.getThreeRandom();

        if (songs.size() < 3){
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(songs);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Song> getById(@PathVariable Long id){
        Optional<Song> song = songService.getById(id);

        if (song.isEmpty()){
            return ResponseEntity.notFound().build();
        } else{
            return ResponseEntity.ok(song.get());
        }
    }

    @PostMapping
    public ResponseEntity<Song> save(
            @RequestParam String name,
            @RequestParam String artist,
            @RequestParam MultipartFile audio,
            @RequestParam MultipartFile image
    ) throws IOException {

        Song newSong = songService.saveSong(name, artist, audio, image);

        return ResponseEntity.status(HttpStatus.CREATED).body(newSong);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        songService.deleteById(id);
        return ResponseEntity.ok().build();
    }
}