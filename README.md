# MuGames
Proyecto final Java

# ¿Como guardar canciones en el backend? 

1) Levantar el backend desde IntelJ IDEA o desde la terminal con este comando.

```bash
cd backend
./mvnw spring-boot:run
```

2) Parate en la carpeta donde tengas la cancion y la imagen.

3) Pega este comando en la terminal cambiando las rutas.

```bash
curl -X POST http://localhost:8080/api/song \
  -F "name=Nombre de la canción" \
  -F "artist=Nombre del artista" \
  -F "audio=@audio/archivo.mp3" \
  -F "image=@images/imagen.jpeg"
```

4) Comprobar si se guardo correctamente con: 

```bash
curl http://localhost:8080/api/song
```

EXTRA: Tambien podes usar Postman.