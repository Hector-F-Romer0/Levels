-- CREACIÓN BASE DE DATOS

drop database if exists levels ;
create database if not exists levels ;
use levels;
SHOW TABLES;

-- ------------------------------------------------------------------------------------------------

-- CREACIÓN TABLAS

create table if not exists usuarios (
numId int(10) not null primary key,
nombres varchar(50) not null, 
apellidos varchar(50) not null, 
nombreUsuario varchar(25) not null, 
correo varchar(50) not null, 
contrasena varchar(15) not null, 
tipo varchar(25) NOT NULL CHECK (Tipo = 'Admin' OR Tipo = 'Usuario'));

create table if not exists artistas (
idArtista int not null AUTO_INCREMENT, 
nombres varchar(50) not null, 
apellidos varchar(50) null, 
nombreArtistico varchar(25) not null, 
fechaNacimiento date not null, 
lugarNacimiento varchar(50) not null, 
fotoArtista varchar(100) not null, 
constraint PrimariaArtista primary key (idArtista));

create table if not exists generos (
idGenero int not null AUTO_INCREMENT,
nombreGenero varchar(50) not null,
constraint PrimaryKeyGenero primary key(idGenero));

create table if not exists albumes (
idAlbum int not null PRIMARY KEY AUTO_INCREMENT, 
titulo varchar(50) not null, 
fotoAlbum varchar(100) not null, 
fechaLanzamiento date not null,
idGenero int not null,
FOREIGN KEY(idGenero) REFERENCES generos(idGenero) ON DELETE CASCADE);

create table if not exists artistaXCanciones (
idArtista int not null references artistas(idArtista) on delete cascade,
ISRC int not null references canciones(ISRC) on delete cascade,
constraint PrimaryKeyAxC primary key (idArtista, ISRC));

create table if not exists cancionesXUsuario (
numId int not null references usuarios(numId) on delete cascade,
ISRC int not null references canciones(ISRC) on delete cascade,
constraint PrimaryKeyAxC primary key (numId, ISRC));

DROP TABLE usuarios;
DROP TABLE canciones;
DROP TABLE artistas;
DROP TABLE generos;
DROP TABLE albumes;
DROP TABLE artistaXCanciones;
DROP TABLE cancionesXUsuario;
DROP TABLE albumes;

-- ------------------------------------------------------------------------------------------------

-- INSERCIÓN DE DATOS

-- numId nombres apellidos nombreUsuario correo contrasena tipo 
INSERT INTO usuarios VALUES
(),
(),
();

-- ISRC titulo album añoLanzamiento idGenero 
INSERT INTO canciones VALUES
(),
(),
();

INSERT INTO artistas VALUES
(),
(),
();

INSERT INTO generos VALUES
(),
(),
();

INSERT INTO albumes VALUES
(),
(),
();

INSERT INTO artistaXCanciones VALUES
(),
(),
();

INSERT INTO cancionesXUsuarios VALUES
(),
(),
();


-- ------------------------------------------------------------------------------------------------