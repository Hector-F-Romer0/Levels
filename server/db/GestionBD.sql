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

INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- EL ÚLTIMO TOUR DEL MUNDO
-- "2020-11-27"
("QMFME2066848", "120", "2020-11-27", "120.wav", "1", "1",),
("QMFME2066849", "ANTES QUE SE ACABE", "2020-11-27", "ANTES QUE SE ACABE.wav", "1", "1",),
("QMFME2066844", "BOOKER T", "2020-11-27", "BOOKER T.wav", "1", "1",),
("QMFME2066836", "EL MUNDO ES MÍO", "2020-11-27", "EL MUNDO ES MÍO.wav", "1", "1",)
("QMFME2066843", "HACIENDO QUE ME AMAS", "2020-11-27", "HACIENDO QUE ME AMAS.wav", "1", "1",),
("QMFME2066838", "HOY COBRÉ", "2020-11-27", "HOY COBRÉ.wav", "1", "1",),
("QMFME2066839", "MALDITA POBREZA", "2020-11-27", "MALDITA POBREZA.wav", "1", "1",),
("QMFME2066841", "TE DESEO LO MEJOR", "2020-11-27", "TE DESEO LO MEJOR.wav", "1", "1",),
("QMFME2066837", "TE MUDASTE", "2020-11-27", "TE MUDASTE.wav", "1", "1",),
("QMFME2066846", "TRELLAS", "2020-11-27", "TRELLAS.wav", "1", "1",),
("QMFME2066842", "YO VISTO ASÍ", "2020-11-27", "YO VISTO ASÍ.wav", "1", "1",);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- UN VERANO SIN TI
-- 2022-05-06
("QM6MZ2214896", "Agosto", "2022-05-06", "Agosto.wav", "1", "2",),
("QM6MZ2214886", "Aguacero", "2022-05-06", "Aguacero.wav", "1", "2",),
("QM6MZ2214876", "Después de la Playa", "2022-05-06", "Después de la Playa.wav", "1", "2",),
("QM6MZ2214889", "Dos mil 16", "2022-05-06", "Dos mil 16.wav", "1", "2",),
("QM6MZ2214884", "Efecto", "2022-05-06", "Efecto.wav", "1", "2",),
("QM6MZ2214890", "El Apagón", "2022-05-06", "El Apagón.wav", "1", "2",),
("QM6MZ2214887", "Enséñame a Bailar", "2022-05-06", "Enséñame a Bailar.wav", "1", "2",),
("QM6MZ2214875", "Moscow Mule", "2022-05-06", "Moscow Mule.wav", "1", "2",),
("QM6MZ2214894", "Me Fui de Vacaciones", "2022-05-06", "Me Fui de Vacaciones.wav", "1", "2",),
("QM6MZ2214882", "Neverita", "2022-05-06", "Neverita.wav", "1", "2",),
("QM6MZ2214878", "Tití Me Preguntó", "2022-05-06", "Tití Me Preguntó.wav", "1", "2",),
("QM6MZ2214892", "Un Coco", "2022-05-06", "Un Coco.wav", "1", "2",),
("QM6MZ2214895", "Un Verano Sin Tí", "2022-05-06", "Un Verano Sin Tí.wav", "1", "2",),
("QM6MZ2214879", "Un Ratito", "2022-05-06", "Un Ratito.wav", "1", "2",),
("QM6MZ2214880", "Yo No Soy Celoso", "2022-05-06", "Yo No Soy Celoso.wav", "1", "2",);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- YHLQMDLG
-- 2020-02-29
("QM4TX2030966", "25/8", "2020-02-29", "25/8.wav", "1", "3",),
("QM4TX2030959", "A Tu Merced", "2020-02-29", "A Tu Merced.wav", "1", "3",),
("QM4TX2030889", "La Difícil", "2020-02-29", "La Difícil.wav", "1", "3",),
("QM4TX2030956", "La Zona", "2020-02-29", "La Zona.wav", "1", "3",),
("QM4TX2030890", "Pero Ya No", "2020-02-29", "Pero Ya No.wav", "1", "3",),
("QM4TX2030842", "Si Veo a Tu Mamá", "2020-02-29", "Si Veo a Tu Mamá.wav", "1", "3",),
("QM4TX2030949", "Solía", "2020-02-29", "Solía.wav", "1", "3",),
("QMFME1914637", "Vete", "2020-02-29", "Vete.wav", "1", "3",),
("QM4TX2030934", "Yo Perreo Sola", "2020-02-29", "Yo Perreo Sola.wav", "1", "3",),
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- CIELO DE TAMBORES
-- 1990-12-20 
("", "", "", ".wav", "3", "4",),
("", "", "", ".wav", "3", "4",),
("", "", "", ".wav", "3", "4",),
("", "", "", ".wav", "3", "4",),
("", "", "", ".wav", "3", "4",),
("", "", "", ".wav", "3", "4",),
("", "", "", ".wav", "3", "4",),
("", "", "", ".wav", "3", "4",);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- HUELLAS DEL PASADO
("", "", "", ".wav", "3", "5",),
("", "", "", ".wav", "3", "5",),
("", "", "", ".wav", "3", "5",),
("", "", "", ".wav", "3", "5",),
("", "", "", ".wav", "3", "5",),
("", "", "", ".wav", "3", "5",),
("", "", "", ".wav", "3", "5",),
("", "", "", ".wav", "3", "5",);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- NO HAY QUINTO MALO
("", "", "", ".wav", "3", "6",),
("", "", "", ".wav", "3", "6",),
("", "", "", ".wav", "3", "6",),
("", "", "", ".wav", "3", "6",),
("", "", "", ".wav", "3", "6",),
("", "", "", ".wav", "3", "6",),
("", "", "", ".wav", "3", "6",),
("", "", "", ".wav", "3", "6",);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- CAIGA LA NOCHE
("", "", "", ".wav", "3", "7",),
("", "", "", ".wav", "3", "7",),
("", "", "", ".wav", "3", "7",),
("", "", "", ".wav", "3", "7",),
("", "", "", ".wav", "3", "7",),
("", "", "", ".wav", "3", "7",),
("", "", "", ".wav", "3", "7",),
("", "", "", ".wav", "3", "7",),
("", "", "", ".wav", "3", "7",),
("", "", "", ".wav", "3", "7",),
("", "", "", ".wav", "3", "7",);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- INDELEBLE
("", "", "", ".wav", "4", "8",),
("", "", "", ".wav", "4", "8",),
("", "", "", ".wav", "4", "8",),
("", "", "", ".wav", "4", "8",),
("", "", "", ".wav", "4", "8",),
("", "", "", ".wav", "4", "8",),
("", "", "", ".wav", "4", "8",),
("", "", "", ".wav", "4", "8",),
("", "", "", ".wav", "4", "8",);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- PANGEA
("", "", "", ".wav", "4", "9",),
("", "", "", ".wav", "4", "9",),
("", "", "", ".wav", "4", "9",),
("", "", "", ".wav", "4", "9",),
("", "", "", ".wav", "4", "9",),
("", "", "", ".wav", "4", "9",),
("", "", "", ".wav", "4", "9",),
("", "", "", ".wav", "4", "9",);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- 1999 
("", "", "", ".wav", "4", "10",),
("", "", "", ".wav", "4", "10",),
("", "", "", ".wav", "4", "10",),
("", "", "", ".wav", "4", "10",),
("", "", "", ".wav", "4", "10",),
("", "", "", ".wav", "4", "10",),
("", "", "", ".wav", "4", "10",),
("", "", "", ".wav", "4", "10",),
("", "", "", ".wav", "4", "10",),
("", "", "", ".wav", "4", "10",),
("", "", "", ".wav", "4", "10",);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- EL POETA HALLEY
("", "", "", ".wav", "4", "11",),
("", "", "", ".wav", "4", "11",),
("", "", "", ".wav", "4", "11",),
("", "", "", ".wav", "4", "11",),
("", "", "", ".wav", "4", "11",),
("", "", "", ".wav", "4", "11",),
("", "", "", ".wav", "4", "11",),
("", "", "", ".wav", "4", "11",),
("", "", "", ".wav", "4", "11",),
("", "", "", ".wav", "4", "11",),
("", "", "", ".wav", "4", "11",);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- MANIOBRAS DE ESCAPISMO
("", "", "", ".wav", "4", "12",),
("", "", "", ".wav", "4", "12",),
("", "", "", ".wav", "4", "12",),
("", "", "", ".wav", "4", "12",),
("", "", "", ".wav", "4", "12",),
("", "", "", ".wav", "4", "12",),
("", "", "", ".wav", "4", "12",),
("", "", "", ".wav", "4", "12",),
("", "", "", ".wav", "4", "12",),
("", "", "", ".wav", "4", "12",),
("", "", "", ".wav", "4", "12",);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- CAJA DE MÚSICA
("", "", "", ".wav", "2", "13",),
("", "", "", ".wav", "2", "13",),
("", "", "", ".wav", "2", "13",),
("", "", "", ".wav", "2", "13",),
("", "", "", ".wav", "2", "13",),
("", "", "", ".wav", "2", "13",),
("", "", "", ".wav", "2", "13",),
("", "", "", ".wav", "2", "13",),
("", "", "", ".wav", "2", "13",),
("", "", "", ".wav", "2", "13",),
("", "", "", ".wav", "2", "13",);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- ENCANTO TROPICAL
("", "", "", ".wav", "2", "14",),
("", "", "", ".wav", "2", "14",),
("", "", "", ".wav", "2", "14",),
("", "", "", ".wav", "2", "14",),
("", "", "", ".wav", "2", "14",),
("", "", "", ".wav", "2", "14",),
("", "", "", ".wav", "2", "14",),
("", "", "", ".wav", "2", "14",),
("", "", "", ".wav", "2", "14",),
("", "", "", ".wav", "2", "14",),
("", "", "", ".wav", "2", "14",);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- HECHO A MANO
("", "", "", ".wav", "2", "15",),
("", "", "", ".wav", "2", "15",),
("", "", "", ".wav", "2", "15",),
("", "", "", ".wav", "2", "15",),
("", "", "", ".wav", "2", "15",),
("", "", "", ".wav", "2", "15",),
("", "", "", ".wav", "2", "15",),
("", "", "", ".wav", "2", "15",),
("", "", "", ".wav", "2", "15",),
("", "", "", ".wav", "2", "15",),
("", "", "", ".wav", "2", "15",);

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