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

create table if not exists canciones (
isrc varchar(12) not null, 
titulo varchar(50) not null, 
fechaLanzamiento date not null,
rutaCancion varchar(100) NOT NULL, 
idGenero int not null references generos(nombreGenero) on delete cascade,
idAlbum varchar(50) null references albumes(idAlbum) on delete set null on update cascade,  
constraint PrimaryLlave primary key (isrc, titulo));

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
isrc int not null references canciones(isrc) on delete cascade,
constraint PrimaryKeyAxC primary key (idArtista, isrc));

create table if not exists cancionesXUsuario (
numId int not null references usuarios(numId) on delete cascade,
isrc int not null references canciones(isrc) on delete cascade,
constraint PrimaryKeyAxC primary key (numId, isrc));

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
("1234567890", "Eduardo", "Manos Tijeras", "TijeritasMini", "tijeritas@gmail.com", "1111", "Usuario"),
("0987654321", "Pedro", "Manos Cuchillas", "Cuchillitas", "cuchilloPro@gmail.com", "1987", "Admin");

-- nombres, apellidos, nombreArtistico, fechaNacimiento, lugarNacimiento, fotoArtista
INSERT INTO artistas VALUES
("Benito Antonio", "Martínez Ocasio", "Bad Bunny", "1994-03-10", "Almirante Sur, Puerto Rico", ""),
("Grupo Niche", "", "Grupo Niche", "1979-01-01", "Cali, Colombia", ""),
("Los Mesoneros", "", "Los Mesoneros", "2006-01-01", "Caracas, Venezuela", ""),
("Love Of Lesbian", "", "Love Of Lesbian", "1997-01-01", "Cataluña, España", ""),
("Monsieur Periné", "", "Monsieur Periné", "2007-01-01", "Bogotá, Colombia", "");

-- nombreGenero
INSERT INTO generos VALUES
("Reguetón"),
("Tropical"),
("Salsa"),
("Rock");

-- titulo, fotoAlbum, fechaLanzamiento, idGenero,
INSERT INTO albumes VALUES
("El Último Tour Del Mundo", "El Último Tour Del Mundo.jpg", "2020-11-27", "1"),
("Un Verano Sin Tí", "Un Verano Sin Tí.jpg", "2022-05-06", "1"),
("YHLQMDLG", "YHLQMDLG.jpg", "2020-02-29", "1"),
("Cielo De Tambores", "Cielo De Tambores.jpg", "1990-12-20", "3"),
("Huellas Del Pasado", "Huellas Del Pasado.jpg", "1995-03-31", "3"),
("No Hay Quinto Malo", "No Hay Quinto Malo.jpg", "1984-10-05", "3"),
("Caiga La Noche", "Caiga La Noche.jpg", "2017-03-29", "4"),
("Indeleble", "Indeleble.jpg", "2011-05-22", "4"),
("Pangea", "Pangea.jpg", "2019-06-06", "4"),
("1999 (o como generar incendios de nieve con una lupa enfocando la luna)", "1999.jpg", "2009-03-24", "4"),
("El Poeta Halley", "El Poeta Halley.jpg", "2016-03-04", "4"),
("Maniobras De Escapismo", "Maniobras De Escapismo.jpg", "2005-03-30", "4"),
("Caja De Música", "Caja De Música.jpg", "2015-05-16", "2"),
("Encanto Tropical", "Encanto Tropical.jpg", "2018-05-18", "2"),
("Hecho A Mano", "Hecho A Mano.jpg", "2012-05-20", "2");

-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
INSERT INTO canciones VALUES
-- EL ÚLTIMO TOUR DEL MUNDO
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,);
INSERT INTO canciones VALUES
-- UN VERANO SIN TI
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,);
INSERT INTO canciones VALUES
-- YHLQMDLG
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,);
INSERT INTO canciones VALUES
-- CIELO DE TAMBORES
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,);
INSERT INTO canciones VALUES
-- HUELLAS DEL PASADO
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,);
INSERT INTO canciones VALUES
-- NO HAY QUINTO MALO
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,);
INSERT INTO canciones VALUES
-- CAIGA LA NOCHE
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,);
INSERT INTO canciones VALUES
-- INDELEBLE
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,);
INSERT INTO canciones VALUES
-- PANGEA
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,);
INSERT INTO canciones VALUES
-- 1999 
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,);
INSERT INTO canciones VALUES
-- EL POETA HALLEY
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,);
INSERT INTO canciones VALUES
-- MANIOBRAS DE ESCAPISMO
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,);
INSERT INTO canciones VALUES
-- CAJA DE MÚSICA
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,);
INSERT INTO canciones VALUES
-- ENCANTO TROPICAL
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,);
INSERT INTO canciones VALUES
-- HECHO A MANO
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,),
("", "", "", "", , ,);

-- 
INSERT INTO artistaXCanciones VALUES
(),
(),
();

-- 
INSERT INTO cancionesXUsuarios VALUES
(),
(),
();


-- ------------------------------------------------------------------------------------------------