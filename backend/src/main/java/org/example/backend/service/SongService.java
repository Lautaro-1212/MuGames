package org.example.backend.service;

import org.example.backend.model.Song;
import org.example.backend.repository.SongRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@Service
public class SongService {

    private final SongRepository songRepository;

    private final Path audioDirectory = Paths.get("files/audio");
    private final Path imageDirectory = Paths.get("files/images");

    public SongService(SongRepository songRepository){
        this.songRepository = songRepository;
    }

    public List<Song> getAll(){
        return songRepository.findAll();
    }

    public Optional<Song> getById(Long id){
        return songRepository.findById(id);
    }

    public List<Song> getThreeRandom(){
        return songRepository.findThreeRandom();
    }

    public Song save(Song song){
        return songRepository.save(song);
    }

    public Song saveSong(String name, String artist, MultipartFile audio, MultipartFile image) throws IOException {

        Files.createDirectories(audioDirectory);
        Files.createDirectories(imageDirectory);

        String audioFileName = audio.getOriginalFilename();
        String imageFileName = image.getOriginalFilename();

        Path audioPath = audioDirectory.resolve(audioFileName);
        Path imagePath = imageDirectory.resolve(imageFileName);

        Files.write(audioPath, audio.getBytes());
        Files.write(imagePath, image.getBytes());

        Song song = new Song();

        song.setName(name);
        song.setArtist(artist);
        song.setSongSrc(audioFileName);
        song.setImageSrc(imageFileName);

        return songRepository.save(song);
    }

    public void deleteById(Long id){
        songRepository.deleteById(id);
    }
}