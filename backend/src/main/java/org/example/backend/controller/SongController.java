package org.example.backend.controller;

import org.example.backend.model.Song;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/song")
public class SongController {

    @GetMapping
    public int getAll(){

    }

    @GetMapping("/{id}")
    public Song getXId(@PathVariable Long id){

    }
}
