SHOW TABLES;
use levels2;

SELECT * FROM usuarios;
SELECT * FROM generos;
SELECT * FROM artistas;
SELECT * FROM albumes;
SELECT * FROM canciones;

DROP TABLE canciones;

# Obtengo las 10 últimas canciones insertadas
SELECT * FROM canciones ORDER BY fechaInsercion DESC LIMIT 10;

SELECT * FROM canciones JOIN artistas;
SELECT * FROM artistaXCanciones;

SELECT * FROM artistaXCanciones AS axc INNER JOIN artistas AS a ON axc.idArtista = a.idArtista;

SELECT * FROM artistaXCanciones AS axc INNER JOIN artistas AS a ON axc.idArtista = a.idArtista
INNER JOIN canciones AS c ON axc.isrc = c.isrc;

SELECT * FROM artistaXCanciones AS axc INNER JOIN artistas AS a ON axc.idArtista = a.idArtista
INNER JOIN canciones AS c ON axc.isrc = c.isrc INNER JOIN generos AS g ON g.idGenero = c.idGenero;

SELECT * FROM artistaXCanciones AS axc INNER JOIN artistas AS a ON axc.idArtista = a.idArtista
INNER JOIN canciones AS c ON axc.isrc = c.isrc INNER JOIN generos AS g ON g.idGenero = c.idGenero
INNER JOIN albumes as al  ON al.idAlbum = c.idAlbum;

# RECUPERA TODA LA INFO DE UNA CANCIÓN
SELECT axc.isrc, a.nombreArtistico, a.fotoArtista, c.titulo, c.fechaLanzamiento,
c.duracion, g.nombreGenero, al.titulo,al.fotoAlbum, al.discografia
 FROM artistaXCanciones AS axc INNER JOIN artistas AS a ON axc.idArtista = a.idArtista
INNER JOIN canciones AS c ON axc.isrc = c.isrc INNER JOIN generos AS g ON g.idGenero = c.idGenero
INNER JOIN albumes as al  ON al.idAlbum = c.idAlbum;

#
SELECT axc.isrc, a.nombreArtistico, a.fotoArtista, c.titulo,g.nombreGenero, al.titulo,al.fotoAlbum
 FROM artistaXCanciones AS axc INNER JOIN artistas AS a ON axc.idArtista = a.idArtista
INNER JOIN canciones AS c ON axc.isrc = c.isrc INNER JOIN generos AS g ON g.idGenero = c.idGenero
INNER JOIN albumes as al  ON al.idAlbum = c.idAlbum;

# RECUPERA CÓDIGO, NOMBRES Y URL DE ÁLBUM Y ARTISTAS Y GÉNERO.
SELECT axc.isrc, a.nombreArtistico, a.fotoArtista, c.titulo, c.fechaLanzamiento,
c.duracion, g.nombreGenero, al.titulo,al.fotoAlbum, al.discografia
 FROM artistaXCanciones AS axc INNER JOIN artistas AS a ON axc.idArtista = a.idArtista
INNER JOIN canciones AS c ON axc.isrc = c.isrc INNER JOIN generos AS g ON g.idGenero = c.idGenero
INNER JOIN albumes as al  ON al.idAlbum = c.idAlbum;


# DEFINITIVO: RECUPERA CÓDIGO, NOMBRES Y URL DE ÁLBUM Y ARTISTAS Y GÉNERO.
SELECT axc.isrc, a.nombreArtistico AS artista, a.fotoArtista, c.titulo AS tituloCancion,c.rutaCancion, c.fechaLanzamiento,
c.duracion, g.nombreGenero, al.titulo AS tituloAlbum,al.fotoAlbum
FROM artistaXCanciones AS axc INNER JOIN artistas AS a ON axc.idArtista = a.idArtista
INNER JOIN canciones AS c ON axc.isrc = c.isrc INNER JOIN generos AS g ON g.idGenero = c.idGenero
INNER JOIN albumes as al  ON al.idAlbum = c.idAlbum ORDER BY c.fechaInsercion DESC LIMIT 10;

SELECT axc.isrc, a.nombreArtistico AS artista, a.fotoArtista, c.titulo AS tituloCancion, c.fechaLanzamiento, c.duracion, g.nombreGenero, al.titulo AS tituloAlbum,al.fotoAlbum FROM artistaXCanciones AS axc INNER JOIN artistas AS a ON axc.idArtista = a.idArtista INNER JOIN canciones AS c ON axc.isrc = c.isrc INNER JOIN generos AS g ON g.idGenero = c.idGenero INNER JOIN albumes as al  ON al.idAlbum = c.idAlbum ORDER BY c.fechaInsercion DESC LIMIT 10;


SELECT  c.isrc,c.titulo,c.fechaLanzamiento,c.rutaCancion,c.duracion,g.nombreGenero, a.titulo,a.fotoAlbum, a.discografia
FROM canciones AS c INNER JOIN generos AS g ON c.idGenero = g.idGenero INNER JOIN albumes AS a ON c.idAlbum=a.idAlbum;

SELECT  c.isrc,c.titulo,c.fechaLanzamiento,c.rutaCancion,c.duracion,g.nombreGenero, a.titulo,a.fotoAlbum, a.discografia
FROM canciones AS c INNER JOIN generos AS g ON c.idGenero = g.idGenero INNER JOIN albumes AS a ON c.idAlbum=a.idAlbum
INNER JOIN genero AS g ON g.idGenero = c.idGenero;

SELECT  c.isrc,c.titulo,c.fechaLanzamiento,c.rutaCancion,c.duracion,g.nombreGenero, a.titulo,a.fotoAlbum, a.discografia
FROM canciones AS c INNER JOIN generos AS g ON c.idGenero = g.idGenero INNER JOIN albumes AS a ON c.idAlbum=a.idAlbum
INNER JOIN genero AS g ON g.idGenero = c.idGenero INNER JOIN ;


INSERT INTO canciones VALUES ("QMFME2066848", "120", "2020-11-27", "QMFME2066848.wav", 1, 1,'2:32',default);
INSERT INTO canciones VALUES ("QMFME2066849", "ANTES QUE SE ACABE", "2020-11-27","QMFME2066849.wav" , 1, 1,'3:41',default);



SELECT curdate();


INSERT INTO usuarios VALUES(1234567890,'Juan Sebastian','Casas León','jSeb23','jscleon@gmail.com','123456','Usuario');
INSERT INTO generos VALUES (default,'Merengue');

UPDATE usuarios SET tipo = IFNULL(null,tipo) WHERE numeroIdentificacion='1234567890';
UPDATE generos SET nombreGenero = IFNULL('Electrónica', nombreGenero) WHERE idGenero = '1';

DELETE FROM usuarios WHERE numeroIdentificacion='1234567890';

# 7. El proyecto de aplicación web debe permitir al usuario buscar canciones por artista. 
SELECT * FROM canciones WHERE id="";
