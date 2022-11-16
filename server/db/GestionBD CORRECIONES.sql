-- CREACIÓN BASE DE DATOS

drop database if exists levels;
create database if not exists levels;
use levels;
SHOW TABLES;

-- ------------------------------------------------------------------------------------------------

-- CREACIÓN TABLAS

create table if not exists usuarios (
numId varchar(10) not null primary key,
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
idAlbum int null references albumes(idAlbum) on delete set null on update cascade,  
duracion VARCHAR(8) NOT NULL,
fechaInsercion DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, 
constraint PrimaryLlave primary key (isrc));

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
titulo varchar(80) not null, 
fotoAlbum varchar(100) null, 
fechaLanzamiento date not null,
discografia VARCHAR(50) NOT NULL);

create table if not exists artistaXCanciones (
idArtista int not null references artistas(idArtista) on delete cascade,
isrc varchar(50) not null references canciones(isrc) on delete cascade,
constraint PrimaryKeyAxC primary key (idArtista, isrc));

create table if not exists cancionesXUsuarios (
numId varchar(10) not null references usuarios(numId) on delete cascade,
isrc varchar(12) not null references canciones(isrc) on delete cascade,
constraint PrimaryKeyAxC primary key (numId, isrc));

-- DROP TABLE usuarios;
-- DROP TABLE canciones;
-- DROP TABLE artistas;
-- DROP TABLE albumes;
-- DROP TABLE generos;
-- DROP TABLE artistaXCanciones;
-- DROP TABLE cancionesXUsuario;

-- ------------------------------------------------------------------------------------------------

-- INSERCIÓN DE DATOS

-- numId nombres apellidos nombreUsuario correo contrasena tipo 
INSERT INTO usuarios VALUES
("1234567890", "Eduardo", "Manos Tijeras", "TijeritasMini", "tijeritas@gmail.com", "1111", "Usuario"),
("0987654321", "Pedro", "Manos Cuchillas", "Cuchillitas", "cuchilloPro@gmail.com", "1987", "Admin");

-- nombres, apellidos, nombreArtistico, fechaNacimiento, lugarNacimiento, fotoArtista,
INSERT INTO artistas (nombres, apellidos, nombreArtistico, fechaNacimiento, lugarNacimiento, fotoArtista)
VALUES 
("Benito Antonio", "Martínez Ocasio", "Bad Bunny", "1994-03-10", "Almirante Sur, Puerto Rico", "1.jpg"),
("Grupo Niche", "", "Grupo Niche", "1979-01-01", "Cali, Colombia", "2.jpg"),
("Los Mesoneros", "", "Los Mesoneros", "2006-01-01", "Caracas, Venezuela", "3.jpg"),
("Love Of Lesbian", "", "Love Of Lesbian", "1997-01-01", "Cataluña, España", "4.jpg"),
("Monsieur Periné", "", "Monsieur Periné", "2007-01-01", "Bogotá, Colombia", "5.jpg");

-- nombreGenero
INSERT INTO generos (nombreGenero)
VALUES
("Reguetón"),
("Tropical"),
("Salsa"),
("Rock");

-- titulo, fotoAlbum, fechaLanzamiento, idGenero, discografia 
INSERT INTO albumes (titulo, fotoAlbum, fechaLanzamiento, discografia)
VALUES
("El Último Tour Del Mundo", "1.jpg", "2020-11-27", "Rimas Entertainment"),
("Un Verano Sin Tí", "2.jpg", "2022-05-06", "Rimas Entertainment"),
("YHLQMDLG", "3.jpg", "2020-02-29", "Rimas Entertainment"),
("Cielo De Tambores", "4.jpg", "1990-12-20", "Discos CBS International"),
("Huellas Del Pasado", "5.jpg", "1995-03-31", "Sony Discos"),
("No Hay Quinto Malo", "6.jpg", "1984-10-05", "Discos Hispanos"),
("Caiga La Noche", "7.jpg", "2017-03-29", "LOS MESONEROS"),
("Indeleble", "8.jpg", "2011-05-22", "LOS MESONEROS"),
("Pangea", "9.jpg", "2019-06-06", "LOS MESONEROS"),
("1999 (o como generar incendios de nieve con una lupa enfocando la luna)", "10.jpg", "2009-03-24", "Warner Music Spain"),
("El Poeta Halley", "11.jpg", "2016-03-04", "Warner Music Spain"),
("Maniobras De Escapismo", "12.jpg", "2005-03-30", "Mushroom Pillow"),
("Caja De Música", "13.jpg", "2015-05-16", "Columbia Records"),
("Encanto Tropical", "14.jpg", "2018-05-18", "Sony Music"),
("Hecho A Mano", "15.jpg", "2012-05-20", "Independiente");

-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum, duracion, fechaInsercion 
-- EL ÚLTIMO TOUR DEL MUNDO
-- "2020-11-27"
INSERT INTO canciones VALUES
("QMFME2066848", "120", "2020-11-27", "QMFME2066848.wav", 1, 1, '2:31', default),
("QMFME2066849", "ANTES QUE SE ACABE", "2020-11-27","QMFME2066849.wav" , 1, 1, '3:41', default),
("QMFME2066844", "BOOKER T", "2020-11-27", "QMFME2066844.wav", 1, 1, '2:36', default),
("QMFME2066836", "EL MUNDO ES MÍO", "2020-11-27", "QMFME2066836.wav", 1, 1, '2:45', default),
("QMFME2066843", "HACIENDO QUE ME AMAS", "2020-11-27", "QMFME2066843.wav", 1, 1, '3:37', default),
("QMFME2066838", "HOY COBRÉ", "2020-11-27", "QMFME2066838.wav", 1, 1, '2:42', default),
("QMFME2066839", "MALDITA POBREZA", "2020-11-27", "QMFME2066839.wav", 1, 1, '3:33', default),
("QMFME2066841", "TE DESEO LO MEJOR", "2020-11-27", "QMFME2066841.wav", 1, 1, '2:19', default),
("QMFME2066837", "TE MUDASTE", "2020-11-27", "QMFME2066837.wav", 1, 1, '2:10', default),
("QMFME2066846", "TRELLAS", "2020-11-27", "QMFME2066846.wav", 1, 1, '2:37', default),
("QMFME2066842", "YO VISTO ASÍ", "2020-11-27", "QMFME2066842.wav", 1, 1, '3:11', default);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- UN VERANO SIN TI
-- 2022-05-06
("QM6MZ2214896", "Agosto", "2022-05-06", "QM6MZ2214896.wav", 1, 2, '2:19', default),
("QM6MZ2214886", "Aguacero", "2022-05-06", "QM6MZ2214886.wav", 1, 2, '3:30', default),
("QM6MZ2214876", "Después de la Playa", "2022-05-06", "QM6MZ2214876.wav", 1, 2, '3:50', default),
("QM6MZ2214889", "Dos mil 16", "2022-05-06", "QM6MZ2214889.wav", 1, 2, '3:28', default),
("QM6MZ2214884", "Efecto", "2022-05-06", "QM6MZ2214884.wav", 1, 2, '3:33', default),
("QM6MZ2214890", "El Apagón", "2022-05-06", "QM6MZ2214890.wav", 1, 2, '3:21', default),
("QM6MZ2214887", "Enséñame a Bailar", "2022-05-06", "QM6MZ2214887.wav", 1, 2, '2:56', default),
("QM6MZ2214875", "Moscow Mule", "2022-05-06", "QM6MZ2214875.wav", 1, 2, '2:32', default),
("QM6MZ2214894", "Me Fui de Vacaciones", "2022-05-06", "QM6MZ2214894.wav", 1, 2, '3:00', default),
("QM6MZ2214882", "Neverita", "2022-05-06", "QM6MZ2214882.wav", 1, 2, '2:53', default),
("QM6MZ2214878", "Tití Me Preguntó", "2022-05-06", "QM6MZ2214878.wav", 1, 2, '4:03', default),
("QM6MZ2214892", "Un Coco", "2022-05-06", "QM6MZ2214892.wav", 1, 2, '3:16', default),
("QM6MZ2214895", "Un Verano Sin Tí", "2022-05-06", "QM6MZ2214895.wav", 1, 2, '2:28', default),
("QM6MZ2214879", "Un Ratito", "2022-05-06", "QM6MZ2214879.wav", 1, 2, '2:56', default),
("QM6MZ2214880", "Yo No Soy Celoso", "2022-05-06", "QM6MZ2214880.wav", 1, 2, '3:50', default);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- YHLQMDLG
-- 2020-02-29
("QM4TX2030966", "25/8", "2020-02-29", "QM4TX2030966.wav", 1, 3, '4:03', default),
("QM4TX2030959", "A Tu Merced", "2020-02-29", "QM4TX2030959.wav", 1, 3, '2:55', default),
("QM4TX2030889", "La Difícil", "2020-02-29", "QM4TX2030889.wav", 1, 3, '2:43', default),
("QM4TX2030956", "La Zona", "2020-02-29", "QM4TX2030956.wav", 1, 3, '2:16', default),
("QM4TX2030890", "Pero Ya No", "2020-02-29", "QM4TX2030890.wav", 1, 3, '2:40', default),
("QM4TX2030842", "Si Veo a Tu Mamá", "2020-02-29", "QM4TX2030842.wav", 1, 3, '2:50', default),
("QM4TX2030949", "Solía", "2020-02-29", "QM4TX2030949.wav", 1, 3, '2:39', default),
("QMFME1914637", "Vete", "2020-02-29", "QMFME1914637.wav", 1, 3, '3:12', default),
("QM4TX2030934", "Yo Perreo Sola", "2020-02-29", "QM4TX2030934.wav", 1, 3, '2:52', default);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- CIELO DE TAMBORES
-- 1990-12-20 
("USSD19905030", "Busca Por Dentro", "1990-12-20", "USSD19905030.wav", 3, 4, '5:54', default),
("USSD10004393", "Cali Ají", "1990-12-20", "USSD10004393.wav", 3, 4, '4:36', default),
("USSD19905031", "Cielo De Tambores", "1990-12-20", "USSD19905031.wav", 3, 4, '5:37', default),
("USSD10004395", "Se Pareció Tanto A Ti", "1990-12-20", "USSD10004395.wav", 3, 4, '5:28', default),
("USUL10110306", "Sin Sentimiento", "1990-12-20", "USUL10110306.wav", 3, 4, '4:53', default),
("USSD10204721", "Una Aventura", "1990-12-20", "USSD10204721.wav", 3, 4, '5:20', default);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- HUELLAS DEL PASADO
-- 1995-03-31
("USHM21200242", "Bájame Uno", "1995-03-31", "USHM21200242.wav", 3, 5, '5:28', default),
("USHM21200236", "Balseros: Testimonios de Libertad", "1995-03-31", "USHM21200236.wav", 3, 5, '5:36', default),
("USHM21200238", "Es Mejor No Despertar", "1995-03-31", "USHM21200238.wav", 3, 5, '5:06', default),
("USSD19905033", "Gotas de Lluvia", "1995-03-31", "USSD19905033.wav", 3, 5, '5:33', default),
("USSD19905038", "Lo Bonito y Lo Feo", "1995-03-31", "USSD19905038.wav", 3, 5, '4:56', default),
("USHM21200239", "Se Me Parte el Corazón", "1995-03-31", "USHM21200239.wav", 3, 5, '5:02', default),
("USHM21200241", "Solamente Tú", "1995-03-31", "USHM21200241.wav", 3, 5, '4:58', default),
("USHM21200240", "Verdades Que Saben", "1995-03-31", "USHM21200240.wav", 3, 5, '5:38', default);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- NO HAY QUINTO MALO
-- 1984-10-05 
("USSD10504164", "Cali Pachanguero", "1984-10-05", "USSD10504164.wav", 3, 6, '5:10', default),
("ESAAI0210657", "El Coco", "1984-10-05", "ESAAI0210657.wav", 3, 6, '4:15', default),
("ESAAI0210654", "El Que Regala Quita", "1984-10-05", "ESAAI0210654.wav", 3, 6, '5:13', default),
("ESAAI0227225", "La Negra No Quiere", "1984-10-05", "ESAAI0227225.wav", 3, 6, '5:58', default),
("ESAAI0210652", "Pecado Capital", "1984-10-05", "ESAAI0210652.wav", 3, 6, '5:07', default),
("ESAAI0210649", "Rosa", "1984-10-05", "ESAAI0210649.wav", 3, 6, '4:39', default),
("ESAAI0210660", "Serenata", "1984-10-05", "ESAAI0210660.wav", 3, 6, '5:48', default),
("ESAAI0227227", "Solo un Cariño", "1984-10-05", "ESAAI0227227.wav", 3, 6, '5:55', default);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- CAIGA LA NOCHE
-- 2017-03-29 
("US7VG1733469", "Algo Bueno", "2017-03-29", "US7VG1733469.wav", 3, 7, '2:53', default),
("US7VG1733470", "Caballo Nuevo", "2017-03-29", "US7VG1733470.wav", 3, 7, '3:09', default),
("QZ5AB1619284", "Caiga la Noche", "2017-03-29", "QZ5AB1619284.wav", 3, 7, '3:46', default),
("US7VG1683292", "El Paraíso", "2017-03-29", "US7VG1683292.wav", 3, 7, '3:02', default),
("US7VG1733471", "Juntos", "2017-03-29", "US7VG1733471.wav", 3, 7, '3:34', default),
("US7VG1733472", "Luna", "2017-03-29", "US7VG1733472.wav", 3, 7, '3:02', default),
("US7VG1733474", "Mientras", "2017-03-29", "US7VG1733474.wav", 3, 7, '3:53', default),
("US7VG1733473", "Riesgo", "2017-03-29", "US7VG1733473.wav", 3, 7, '2:52', default),
("US7VG1734593", "Sabana", "2017-03-29", "US7VG1734593.wav", 3, 7, '4:50', default),
("US7VG1704811", "Solo", "2017-03-29", "US7VG1704811.wav", 3, 7, '3:32', default),
("US7VG1733475", "Sr.Prudencia", "2017-03-29", "US7VG1733475.wav", 3, 7, '2:28', default);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- INDELEBLE
-- 2011-05-22 
("USHM21144296", "Cicatriz", "2011-05-22", "USHM21144296.wav", 4, 8, '4:47', default),
("USHM21144299", "Cuando Llegue El Momento", "2011-05-22", "USHM21144299.wav", 4, 8, '3:26', default),
("USHM21144297", "La Máscara", "2011-05-22", "USHM21144297.wav", 4, 8, '3:56', default),
("USHM21144298", "Malos Tiempos", "2011-05-22", "USHM21144298.wav", 4, 8, '4:00', default),
("USHM21144300", "Retroceder", "2011-05-22", "USHM21144300.wav", 4, 8, '3:08', default),
("USHM21144293", "Sol Rojo", "2011-05-22", "USHM21144293.wav", 4, 8, '3:49', default),
("USHM21144292", "Tokio", "2011-05-22", "USHM21144292.wav", 4, 8, '2:46', default),
("USHM21144291", "Un Segundo", "2011-05-22", "USHM21144291.wav", 4, 8, '2:42', default),
("USHM21144295", "Ya No Estoy", "2011-05-22", "USHM21144295.wav", 4, 8, '3:43', default);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- PANGEA
-- 2019-06-06 
("US7VG1803256", "Dime Como Tú Quieras", "2019-06-06", "US7VG1803256.wav", 4, 9, '3:09', default),
("QZHZ31955522", "Dudo Que Lo Encuentres", "2019-06-06", "QZHZ31955522.wav", 4, 9, '3:23', default),
("US7VG1942635", "Exprópiese", "2019-06-06", "US7VG1942635.wav", 4, 9, '2:44', default),
("QZHZ31955523", "Lo Peor de Mí", "2019-06-06", "QZHZ31955523.wav", 4, 9, '2:45', default),
("QZHZ31955521", "Prefiero No Saber", "2019-06-06", "QZHZ31955521.wav", 4, 9, '2:44', default),
("QZ5AB1942555", "Te Lo Advertí", "2019-06-06", "QZ5AB1942555.wav", 4, 9, '3:32', default),
("QZHZ31955524", "Últimas Palabras", "2019-06-06", "QZHZ31955524.wav", 4, 9, '3:32', default);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- 1999 
-- 2009-03-24 
("ES7650900045", "1999", "2009-03-24", "ES7650900045.wav", 4, 10, '5:43', default),
("ES7650900040", "Algunas plantas", "2009-03-24", "ES7650900040.wav", 4, 10, '4:06', default),
("ES7650900037", "Allí donde solíamos gritar", "2009-03-24", "ES7650900037.wav", 4, 10, '5:38', default),
("ES7650900038", "Club de fans de John Boy", "2009-03-24", "ES7650900038.wav", 4, 10, '3:56', default),
("ES7650900047", "Cuando diga ya", "2009-03-24", "ES7650900047.wav", 4, 10, '2:46', default),
("ES7650900044", "Incendios de nieve", "2009-03-24", "ES7650900044.wav", 4, 10, '5:58', default),
("ES7650900043", "Segundo asalto", "2009-03-24", "ES7650900043.wav", 4, 10, '3:47', default),
("ES7650900050", "Voy a romper las ventanas", "2009-03-24", "ES7650900050.wav", 4, 10, '5:02', default),
("ES7650900048", "Miau", "2009-03-24", "ES7650900048.wav", 4, 10, '4:19', default),
("ES7650900039", "Las malas lenguas", "2009-03-24", "ES7650900039.wav", 4, 10, '3:33', default),
("ES7650900041", "Cuestiones de familia", "2009-03-24", "ES7650900041.wav", 4, 10, '3:09', default);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- EL POETA HALLEY
-- 2016-03-04 
("ES5151503886", "Bajo el volcán", "2016-03-04", "ES5151503886.wav", 4, 11, '5:47', default),
("ES5151503887", "Canción de bruma", "2016-03-04", "ES5151503887.wav", 4, 11, '3:25', default),
("ES5151503888", "Contraespionaje", "2016-03-04", "ES5151503888.wav", 4, 11, '5:11', default),
("ES5151503889", "Cuando no me ves", "2016-03-04", "ES5151503889.wav", 4, 11, '5:10', default),
("ES5151503885", "El poeta Halley", "2016-03-04", "ES5151503885.wav", 4, 11, '7:25', default),
("ES5151503891", "El yin y el yen", "2016-03-04", "ES5151503891.wav", 4, 11, '3:25', default),
("ES5151503892", "En busca del mago", "2016-03-04", "ES5151503892.wav", 4, 11, '5:07', default),
("ES5151503894", "Los males pasajeros", "2016-03-04", "ES5151503894.wav", 4, 11, '6:46', default),
("ES5151503893", "I.M.T (Incapacidad moral transitoria)", "2016-03-04", "ES5151503893.wav", 4, 11, '4:38', default),
("ES5151503896", "Planeador", "2016-03-04", "ES5151503896.wav", 4, 11, '5:37', default),
("ES5151503897", "Psiconautas", "2016-03-04", "ES5151503897.wav", 4, 11, '9:34', default);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- MANIOBRAS DE ESCAPISMO
-- 2005-03-30 
("ES5400580401", "Carta a Todas Tus Catástrofes", "2005-03-30", "ES5400580401.wav", 4, 12, '2:53', default),
("ES5400580403", "Domingo Astromántico", "2005-03-30", "ES5400580403.wav", 4, 12, '4:26', default),
("ES5400580405", "Houston, Tenemos un Poema", "2005-03-30", "ES5400580405.wav", 4, 12, '3:59', default),
("ES5400580411", "Limusinas", "2005-03-30", "ES5400580411.wav", 4, 12, '5:34', default),
("ES5400580409", "Los Niños del Mañana", "2005-03-30", "ES5400580409.wav", 4, 12, '1:11', default),
("ES5400580402", "Maniobras de Escapismo", "2005-03-30", "ES5400580402.wav", 4, 12, '3:03', default),
("ES5400580408", "Marlene, la Vecina del Ártico", "2005-03-30", "ES5400580408.wav", 4, 12, '3:00', default),
("ES5400580410", "Me Llaman Octubre", "2005-03-30", "ES5400580410.wav", 4, 12, '1:54', default),
("ES5400580404", "Mi Personulidad", "2005-03-30", "ES5400580404.wav", 4, 12, '3:10', default),
("ES5400580406", "Mi Primera Combustión", "2005-03-30", "ES5400580406.wav", 4, 12, '2:24', default),
("ES5400580407", "Música de Ascensores", "2005-03-30", "ES5400580407.wav", 4, 12, '3:17', default);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- CAJA DE MÚSICA
-- 2015-05-16 
("COSO11500154", "Año Bisiesto", "2015-05-16", "COSO11500154.wav", 2, 13, '3:58', default),
("COSO11500146", "Dejame Vivir", "2015-05-16", "COSO11500146.wav", 2, 13, '3:30', default),
("COSO11500147", "Incendio", "2015-05-16", "COSO11500147.wav", 2, 13, '3:44', default),
("COSO11500152", "Llore", "2015-05-16", "COSO11500152.wav", 2, 13, '3:58', default),
("COSO11500153", "Marinero Wawani", "2015-05-16", "COSO11500153.wav", 2, 13, '4:12', default),
("COSO11500151", "Mi Libertad", "2015-05-16", "COSO11500151.wav", 2, 13, '5:36', default),
("COSO11500145", "No Hace Falta", "2015-05-16", "COSO11500145.wav", 2, 13, '3:44', default),
("COSO11500155", "Turquesa Menina", "2015-05-16", "COSO11500155.wav", 2, 13, '3:02', default),
("COSO11500156", "Viejos Amores", "2015-05-16", "COSO11500156.wav", 2, 13, '2:55', default);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- ENCANTO TROPICAL
-- 2018-05-18 
("COSO11800041", "Bailar Contigo", "2018-05-18", "COSO11800041.wav", 2, 14, '3:35', default),
("COSO11800042", "Encanto Tropical", "2018-05-18", "COSO11800042.wav", 2, 14, '4:47', default),
("COSO11800043", "Guayabas y Flores", "2018-05-18", "COSO11800043.wav", 2, 14, '3:38', default),
("COSO11800044", "Infinito", "2018-05-18", "COSO11800044.wav", 2, 14, '2:59', default),
("COSO11800046", "Llévame", "2018-05-18", "COSO11800046.wav", 2, 14, '3:55', default),
("COSO11800047", "Me Vas a Hacer Falta", "2018-05-18", "COSO11800047.wav", 2, 14, '4:02', default),
("COSO11800049", "Tarde", "2018-05-18", "COSO11800049.wav", 2, 14, '4:07', default),
("COSO11800050", "Vámonos", "2018-05-18", "COSO11800050.wav", 2, 14, '4:07', default),
("COSO11800051", "Veneno", "2018-05-18", "COSO11800051.wav", 2, 14, '3:26', default);
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- HECHO A MANO
-- 2012-05-20 
("TCABH1224596", "Be Bop", "2012-05-20", "TCABH1224596.wav", 2, 15, '2:55', default),
("TCABH1224588", "Cou Cou", "2012-05-20", "TCABH1224588.wav", 2, 15, '3:30', default),
("TCABH1224590", "Huracán", "2012-05-20", "TCABH1224590.wav", 2, 15, '2:40', default),
("TCABH1224551", "La Ciudad", "2012-05-20", "TCABH1224551.wav", 2, 15, '3:08', default),
("TCABH1224608", "La Muerte", "2012-05-20", "TCABH1224608.wav", 2, 15, '4:19', default),
("TCABH1224593", "La Playa", "2012-05-20", "TCABH1224593.wav", 2, 15, '3:51', default),
("TCABH1224549", "La Tienda de Sombreros", "2012-05-20", "TCABH1224549.wav", 2, 15, '2:48', default),
("TCABH1224605", "Nada Puro Hay", "2012-05-20", "TCABH1224605.wav", 2, 15, '3:51', default),
("TCABH1224585", "Sabor a Mi", "2012-05-20", "TCABH1224585.wav", 2, 15, '3:23', default),
("TCABH1224552", "Suin Romanticon", "2012-05-20", "TCABH1224552.wav", 2, 15, '3:16', default),
("TCABH1224612", "Swing With Me", "2012-05-20", "TCABH1224612.wav", 2, 15, '3:51', default);

-- 
INSERT INTO artistaXCanciones VALUES
-- Bad Bunny 1
("1", "QMFME2066848"),
("1", "QMFME2066849"),
("1", "QMFME2066844"),
("1", "QMFME2066836"),
("1", "QMFME2066843"),
("1", "QMFME2066838"),
("1", "QMFME2066839"),
("1", "QMFME2066841"),
("1", "QMFME2066837"),
("1", "QMFME2066846"),
("1", "QMFME2066842"),
("1", "QM6MZ2214896"),
("1", "QM6MZ2214886"),
("1", "QM6MZ2214876"),
("1", "QM6MZ2214889"),
("1", "QM6MZ2214884"),
("1", "QM6MZ2214890"),
("1", "QM6MZ2214887"),
("1", "QM6MZ2214875"),
("1", "QM6MZ2214894"),
("1", "QM6MZ2214882"),
("1", "QM6MZ2214878"),
("1", "QM6MZ2214892"),
("1", "QM6MZ2214895"),
("1", "QM6MZ2214879"),
("1", "QM6MZ2214880"),
("1", "QM4TX2030966"),
("1", "QM4TX2030959"),
("1", "QM4TX2030889"),
("1", "QM4TX2030956"),
("1", "QM4TX2030890"),
("1", "QM4TX2030842"),
("1", "QM4TX2030949"),
("1", "QMFME1914637"),
("1", "QM4TX2030934"),
-- Grupo Niche 2
("2", "USSD19905030"),
("2", "USSD10004393"),
("2", "USSD19905031"),
("2", "USSD10004395"),
("2", "USUL10110306"),
("2", "USSD10204721"),
("2", "USHM21200242"),
("2", "USHM21200236"),
("2", "USHM21200238"),
("2", "USSD19905033"),
("2", "USSD19905038"),
("2", "USHM21200239"),
("2", "USHM21200241"),
("2", "USHM21200240"),
("2", "USSD10504164"),
("2", "ESAAI0210657"),
("2", "ESAAI0210654"),
("2", "ESAAI0227225"),
("2", "ESAAI0210652"),
("2", "ESAAI0210649"),
("2", "ESAAI0210660"),
("2", "ESAAI0227227"),
-- Los Mesoneros 3
("3", "US7VG1733469"),
("3", "US7VG1733470"),
("3", "QZ5AB1619284"),
("3", "US7VG1683292"),
("3", "US7VG1733471"),
("3", "US7VG1733472"),
("3", "US7VG1733474"),
("3", "US7VG1733473"),
("3", "US7VG1734593"),
("3", "US7VG1704811"),
("3", "US7VG1733475"),
("3", "USHM21144296"),
("3", "USHM21144299"),
("3", "USHM21144297"),
("3", "USHM21144298"),
("3", "USHM21144300"),
("3", "USHM21144293"),
("3", "USHM21144292"),
("3", "USHM21144291"),
("3", "USHM21144295"),
("3", "US7VG1803256"),
("3", "QZHZ31955522"),
("3", "US7VG1942635"),
("3", "QZHZ31955523"),
("3", "QZHZ31955521"),
("3", "QZ5AB1942555"),
("3", "QZHZ31955524"),
-- Love Of Lesbian 4
("4", "ES7650900045"),
("4", "ES7650900040"),
("4", "ES7650900037"),
("4", "ES7650900038"),
("4", "ES7650900047"),
("4", "ES7650900044"),
("4", "ES7650900043"),
("4", "ES7650900050"),
("4", "ES7650900048"),
("4", "ES7650900039"),
("4", "ES7650900041"),
("4", "ES5151503886"),
("4", "ES5151503887"),
("4", "ES5151503888"),
("4", "ES5151503889"),
("4", "ES5151503885"),
("4", "ES5151503891"),
("4", "ES5151503892"),
("4", "ES5151503894"),
("4", "ES5151503893"),
("4", "ES5151503896"),
("4", "ES5151503897"),
("4", "ES5400580401"),
("4", "ES5400580403"),
("4", "ES5400580405"),
("4", "ES5400580411"),
("4", "ES5400580409"),
("4", "ES5400580402"),
("4", "ES5400580408"),
("4", "ES5400580410"),
("4", "ES5400580404"),
("4", "ES5400580406"),
("4", "ES5400580407"),
-- Monsieur Periné 5
("5", "COSO11500154"),
("5", "COSO11500146"),
("5", "COSO11500147"),
("5", "COSO11500152"),
("5", "COSO11500153"),
("5", "COSO11500151"),
("5", "COSO11500145"),
("5", "COSO11500155"),
("5", "COSO11500156"),
("5", "COSO11800041"),
("5", "COSO11800042"),
("5", "COSO11800043"),
("5", "COSO11800044"),
("5", "COSO11800046"),
("5", "COSO11800047"),
("5", "COSO11800049"),
("5", "COSO11800050"),
("5", "COSO11800051"),
("5", "TCABH1224596"),
("5", "TCABH1224588"),
("5", "TCABH1224590"),
("5", "TCABH1224551"),
("5", "TCABH1224608"),
("5", "TCABH1224593"),
("5", "TCABH1224549"),
("5", "TCABH1224605"),
("5", "TCABH1224585"),
("5", "TCABH1224552"),
("5", "TCABH1224612");

-- 
INSERT INTO cancionesXUsuarios VALUES
-- 1234567890
("1234567890", "QM6MZ2214886"),
("1234567890", "USSD19905038"),
("1234567890", "USHM21144295"),
("1234567890", "ES7650900043"),
("1234567890", "COSO11500153"),
-- 0987654321
("0987654321", "QM4TX2030956"),
("0987654321", "ESAAI0210660"),
("0987654321", "QZHZ31955522"),
("0987654321", "ES7650900037"),
("0987654321", "TCABH1224612");


-- ------------------------------------------------------------------------------------------------