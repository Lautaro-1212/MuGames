package org.example.backend.service;

import org.example.backend.model.Song;
import org.example.backend.repository.SongRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SongService {

    private final SongRepository songRepository;

    public SongService(SongRepository songRepository){
        this.songRepository = songRepository;
    }

    public List<Song> getAll(){
        return songRepository.findAll();
    }

    public Optional<Song> getById(Long id){
        return songRepository.findById(id);
    }

    public Song save(Song song){
        return songRepository.save(song);
    }

    public void deleteById(Long id){
        songRepository.deleteById(id);
    }
}
