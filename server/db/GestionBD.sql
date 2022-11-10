drop database if exists levels ;
create database if not exists levels ;
use levels;
drop tables if exists levels ;

create table if not exists usuarios (
numeroIdentificacion int(10) not null primary key,
nombres varchar(50) not null, 
apellidos varchar(50) not null, 
nombreUsuario varchar(25) not null, 
correo varchar(30) not null, 
contrasena varchar(15) not null, 
tipo varchar(25) NOT NULL CHECK (Tipo = 'Admin' OR Tipo = 'Usuario'));

create table if not exists canciones (
ISRC varchar(12) not null, 
titulo varchar(50) not null, 
album varchar(25) null references Albumes(idAlbum) on delete set null on update cascade, 
añoLanzamiento date not null, 
idGenero int not null references Generos(nombreGenero) on delete cascade, 
constraint PrimaryLlave primary key (ISRC, Titulo));

create table if not exists artistas (
idArtista int not null, 
nombres varchar(50) not null, 
apellidos varchar(50) not null, 
nombreArtistico varchar(25) not null, 
fechasNacimiento date not null, 
lugarNacimiento varchar(30) not null, 
fotoArtista varchar(80) not null, 
constraint PrimariaArtista primary key (idArtista, NombreArtistico));

create table if not exists generos (
idGenero int not null,
nombreGenero varchar(50) not null,
constraint PrimaryKeyGenero primary key (idGenero, nombreGenero));

create table if not exists albumes (
idAlbum int not null primary key, 
titulo varchar(50) not null, 
fotoAlbum varchar(80) not null, 
genero varchar(20) not null, 
añoLanzamiento date not null);

create table if not exists artistaXCanciones (
idArtista int not null references Artistas(idArtista) on delete cascade,
ISRC int not null references Canciones(ISRC) on delete cascade,
constraint PrimaryKeyAxC primary key (idArtista, ISRC));

create table if not exists cancionesXUsuario (
NumeroIdentificaion int not null references Usuarios(NumeroIdentificaion) on delete cascade,
ISRC int not null references Canciones(ISRC) on delete cascade,
constraint PrimaryKeyAxC primary key (NumeroIdentificaion, ISRC));

DROP TABLE usuarios;

SELECT * FROM usuarios;
INSERT INTO usuarios VALUES(1234567890,'Juan Sebastian','Casas León','jSeb23','jscleon@gmail.com','123456','Usuario');