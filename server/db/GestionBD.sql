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
("QMFME2066848", "120", "2020-11-27", "120.wav", "1", "1"),
("QMFME2066849", "ANTES QUE SE ACABE", "2020-11-27", "ANTES QUE SE ACABE.wav", "1", "1"),
("QMFME2066844", "BOOKER T", "2020-11-27", "BOOKER T.wav", "1", "1"),
("QMFME2066836", "EL MUNDO ES MÍO", "2020-11-27", "EL MUNDO ES MÍO.wav", "1", "1")
("QMFME2066843", "HACIENDO QUE ME AMAS", "2020-11-27", "HACIENDO QUE ME AMAS.wav", "1", "1"),
("QMFME2066838", "HOY COBRÉ", "2020-11-27", "HOY COBRÉ.wav", "1", "1"),
("QMFME2066839", "MALDITA POBREZA", "2020-11-27", "MALDITA POBREZA.wav", "1", "1"),
("QMFME2066841", "TE DESEO LO MEJOR", "2020-11-27", "TE DESEO LO MEJOR.wav", "1", "1"),
("QMFME2066837", "TE MUDASTE", "2020-11-27", "TE MUDASTE.wav", "1", "1"),
("QMFME2066846", "TRELLAS", "2020-11-27", "TRELLAS.wav", "1", "1"),
("QMFME2066842", "YO VISTO ASÍ", "2020-11-27", "YO VISTO ASÍ.wav", "1", "1");
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- UN VERANO SIN TI
-- 2022-05-06
("QM6MZ2214896", "Agosto", "2022-05-06", "Agosto.wav", "1", "2"),
("QM6MZ2214886", "Aguacero", "2022-05-06", "Aguacero.wav", "1", "2"),
("QM6MZ2214876", "Después de la Playa", "2022-05-06", "Después de la Playa.wav", "1", "2"),
("QM6MZ2214889", "Dos mil 16", "2022-05-06", "Dos mil 16.wav", "1", "2"),
("QM6MZ2214884", "Efecto", "2022-05-06", "Efecto.wav", "1", "2"),
("QM6MZ2214890", "El Apagón", "2022-05-06", "El Apagón.wav", "1", "2"),
("QM6MZ2214887", "Enséñame a Bailar", "2022-05-06", "Enséñame a Bailar.wav", "1", "2"),
("QM6MZ2214875", "Moscow Mule", "2022-05-06", "Moscow Mule.wav", "1", "2"),
("QM6MZ2214894", "Me Fui de Vacaciones", "2022-05-06", "Me Fui de Vacaciones.wav", "1", "2"),
("QM6MZ2214882", "Neverita", "2022-05-06", "Neverita.wav", "1", "2"),
("QM6MZ2214878", "Tití Me Preguntó", "2022-05-06", "Tití Me Preguntó.wav", "1", "2"),
("QM6MZ2214892", "Un Coco", "2022-05-06", "Un Coco.wav", "1", "2"),
("QM6MZ2214895", "Un Verano Sin Tí", "2022-05-06", "Un Verano Sin Tí.wav", "1", "2"),
("QM6MZ2214879", "Un Ratito", "2022-05-06", "Un Ratito.wav", "1", "2"),
("QM6MZ2214880", "Yo No Soy Celoso", "2022-05-06", "Yo No Soy Celoso.wav", "1", "2");
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- YHLQMDLG
-- 2020-02-29
("QM4TX2030966", "25/8", "2020-02-29", "25/8.wav", "1", "3"),
("QM4TX2030959", "A Tu Merced", "2020-02-29", "A Tu Merced.wav", "1", "3"),
("QM4TX2030889", "La Difícil", "2020-02-29", "La Difícil.wav", "1", "3"),
("QM4TX2030956", "La Zona", "2020-02-29", "La Zona.wav", "1", "3"),
("QM4TX2030890", "Pero Ya No", "2020-02-29", "Pero Ya No.wav", "1", "3"),
("QM4TX2030842", "Si Veo a Tu Mamá", "2020-02-29", "Si Veo a Tu Mamá.wav", "1", "3"),
("QM4TX2030949", "Solía", "2020-02-29", "Solía.wav", "1", "3"),
("QMFME1914637", "Vete", "2020-02-29", "Vete.wav", "1", "3"),
("QM4TX2030934", "Yo Perreo Sola", "2020-02-29", "Yo Perreo Sola.wav", "1", "3");
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- CIELO DE TAMBORES
-- 1990-12-20 
("USSD19905030", "Busca Por Dentro", "1990-12-20", "Busca Por Dentro.wav", "3", "4"),
("USSD10004393", "Cali Ají", "1990-12-20", "Cali Ají.wav", "3", "4"),
("USSD19905031", "Cielo De Tambores", "1990-12-20", "Cielo De Tambores.wav", "3", "4"),
("USSD10004395", "Se Pareció Tanto A Ti", "1990-12-20", "Se Pareció Tanto A Ti.wav", "3", "4"),
("USUL10110306", "Sin Sentimiento", "1990-12-20", "Sin Sentimiento.wav", "3", "4"),
("USSD10204721", "Una Aventura", "1990-12-20", "Una Aventura.wav", "3", "4");
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- HUELLAS DEL PASADO
-- 1995-03-31
("USHM21200242", "Bájame Uno", "1995-03-31", "Bájame Uno.wav", "3", "5"),
("USHM21200236", "Balseros: Testimonios de Libertad", "1995-03-31", "Balseros Testimonios de Libertad.wav", "3", "5"),
("USHM21200238", "Es Mejor No Despertar", "1995-03-31", "Es Mejor No Despertar.wav", "3", "5"),
("USSD19905033", "Gotas de Lluvia", "1995-03-31", "Gotas de Lluvia.wav", "3", "5"),
("USSD19905038", "Lo Bonito y Lo Feo", "1995-03-31", "Lo Bonito y Lo Feo.wav", "3", "5"),
("USHM21200239", "Se Me Parte el Corazón", "1995-03-31", "Se Me Parte el Corazón.wav", "3", "5"),
("USHM21200241", "Solamente Tú", "1995-03-31", "Solamente Tú.wav", "3", "5"),
("USHM21200240", "Verdades Que Saben", "1995-03-31", "Verdades Que Saben.wav", "3", "5");
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- NO HAY QUINTO MALO
-- 1984-10-05 
("USSD10504164", "Cali Pachanguero", "1984-10-05", "Cali Pachanguero.wav", "3", "6"),
("ESAAI0210657", "El Coco", "1984-10-05", "El Coco.wav", "3", "6"),
("ESAAI0210654", "El Que Regala Quita", "1984-10-05", "El Que Regala Quita.wav", "3", "6"),
("ESAAI0227225", "La Negra No Quiere", "1984-10-05", "La Negra No Quiere.wav", "3", "6"),
("ESAAI0210652", "Pecado Capital", "1984-10-05", "Pecado Capital.wav", "3", "6"),
("ESAAI0210649", "Rosa", "1984-10-05", "Rosa.wav", "3", "6"),
("ESAAI0210660", "Serenata", "1984-10-05", "Serenata.wav", "3", "6"),
("ESAAI0227227", "Solo un Cariño", "1984-10-05", "Solo un Cariño.wav", "3", "6");
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- CAIGA LA NOCHE
-- 2017-03-29 
("US7VG1733469", "Algo Bueno", "2017-03-29", "Algo Bueno.wav", "3", "7"),
("US7VG1733470", "Caballo Nuevo", "2017-03-29", "Caballo Nuevo.wav", "3", "7"),
("QZ5AB1619284", "Caiga la Noche", "2017-03-29", "Caiga la Noche.wav", "3", "7"),
("US7VG1683292", "El Paraíso", "2017-03-29", "El Paraíso.wav", "3", "7"),
("US7VG1733471", "Juntos", "2017-03-29", "Juntos.wav", "3", "7"),
("US7VG1733472", "Luna", "2017-03-29", "Luna.wav", "3", "7"),
("US7VG1733474", "Mientras", "2017-03-29", "Mientras.wav", "3", "7"),
("US7VG1733473", "Riesgo", "2017-03-29", "Riesgo.wav", "3", "7"),
("US7VG1734593", "Sabana", "2017-03-29", "Sabana.wav", "3", "7"),
("US7VG1704811", "Solo", "2017-03-29", "Solo.wav", "3", "7"),
("US7VG1733475", "Sr.Prudencia", "2017-03-29", "Sr.Prudencia.wav", "3", "7");
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- INDELEBLE
-- 2011-05-22 
("USHM21144296", "Cicatriz", "2011-05-22", "Cicatriz.wav", "4", "8"),
("USHM21144299", "Cuando Llegue El Momento", "2011-05-22", "Cuando Llegue El Momento.wav", "4", "8"),
("USHM21144297", "La Máscara", "2011-05-22", "La Máscara.wav", "4", "8"),
("USHM21144298", "Malos Tiempos", "2011-05-22", "Malos Tiempos.wav", "4", "8"),
("USHM21144300", "Retroceder", "2011-05-22", "Retroceder.wav", "4", "8"),
("USHM21144293", "Sol Rojo", "2011-05-22", "Sol Rojo.wav", "4", "8"),
("USHM21144292", "Tokio", "2011-05-22", "Tokio.wav", "4", "8"),
("USHM21144291", "Un Segundo", "2011-05-22", "Un Segundo.wav", "4", "8"),
("USHM21144295", "Ya No Estoy", "2011-05-22", "Ya No Estoy.wav", "4", "8");
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- PANGEA
-- 2019-06-06 
("US7VG1803256", "Dime Como Tú Quieras", "2019-06-06", "Dime Como Tú Quieras.wav", "4", "9"),
("QZHZ31955522", "Dudo Que Lo Encuentres", "2019-06-06", "Dudo Que Lo Encuentres.wav", "4", "9"),
("US7VG1942635", "Exprópiese", "2019-06-06", "Exprópiese.wav", "4", "9"),
("QZHZ31955523", "Lo Peor de Mí", "2019-06-06", "Lo Peor de Mí.wav", "4", "9"),
("QZHZ31955521", "Prefiero No Saber", "2019-06-06", "Prefiero No Saber.wav", "4", "9"),
("QZ5AB1942555", "Te Lo Advertí", "2019-06-06", "Te Lo Advertí.wav", "4", "9"),
("QZHZ31955524", "Últimas Palabras", "2019-06-06", "Últimas Palabras.wav", "4", "9");
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- 1999 
-- 2009-03-24 
("ES7650900045", "1999", "2009-03-24", "1999.wav", "4", "10"),
("ES7650900040", "Algunas plantas", "2009-03-24", "Algunas plantas.wav", "4", "10"),
("ES7650900037", "Allí donde solíamos gritar", "2009-03-24", "Allí donde solíamos gritar.wav", "4", "10"),
("ES7650900038", "Club de fans de John Boy", "2009-03-24", "Club de fans de John Boy.wav", "4", "10"),
("ES7650900047", "Cuando diga ya", "2009-03-24", "Cuando diga ya.wav", "4", "10"),
("ES7650900044", "Incendios de nieve", "2009-03-24", "Incendios de nieve.wav", "4", "10"),
("ES7650900043", "Segundo asalto", "2009-03-24", "Segundo asalto.wav", "4", "10"),
("ES7650900050", "Voy a romper las ventanas", "2009-03-24", "Voy a romper las ventanas.wav", "4", "10"),
("ES7650900048", "Miau", "2009-03-24", "Miau.wav", "4", "10"),
("ES7650900039", "Las malas lenguas", "2009-03-24", "Las malas lenguas.wav", "4", "10"),
("ES7650900041", "Cuestiones de familia", "2009-03-24", "Cuestiones de familia.wav", "4", "10");
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- EL POETA HALLEY
-- 2016-03-04 
("ES5151503886", "Bajo el volcán", "2016-03-04", "Bajo el volcán.wav", "4", "11"),
("ES5151503887", "Canción de bruma", "2016-03-04", "Canción de bruma.wav", "4", "11"),
("ES5151503888", "Contraespionaje", "2016-03-04", "Contraespionaje.wav", "4", "11"),
("ES5151503889", "Cuando no me ves", "2016-03-04", "Cuando no me ves.wav", "4", "11"),
("ES5151503885", "El poeta Halley", "2016-03-04", "El poeta Halley.wav", "4", "11"),
("ES5151503891", "El yin y el yen", "2016-03-04", "El yin y el yen.wav", "4", "11"),
("ES5151503892", "En busca del mago", "2016-03-04", "En busca del mago.wav", "4", "11"),
("ES5151503894", "Los males pasajeros", "2016-03-04", "Los males pasajeros.wav", "4", "11"),
("ES5151503893", "I.M.T (Incapacidad moral transitoria)", "2016-03-04", "I.M.T (Incapacidad moral transitoria).wav", "4", "11"),
("ES5151503896", "Planeador", "2016-03-04", "Planeador.wav", "4", "11"),
("ES5151503897", "Psiconautas", "2016-03-04", "Psiconautas.wav", "4", "11");
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- MANIOBRAS DE ESCAPISMO
-- 2005-03-30 
("ES5400580401", "Carta a Todas Tus Catástrofes", "2005-03-30", "Carta a Todas Tus Catástrofes.wav", "4", "12"),
("ES5400580403", "Domingo Astromántico", "2005-03-30", "Domingo Astromántico.wav", "4", "12"),
("ES5400580405", "Houston, Tenemos un Poema", "2005-03-30", "Houston, Tenemos un Poema.wav", "4", "12"),
("ES5400580405", "Limusinas", "2005-03-30", "Limusinas.wav", "4", "12"),
("ES5400580409", "Los Niños del Mañana", "2005-03-30", "Los Niños del Mañana.wav", "4", "12"),
("ES5400580402", "Maniobras de Escapismo", "2005-03-30", "Maniobras de Escapismo.wav", "4", "12"),
("ES5400580408", "Marlene, la Vecina del Ártico", "2005-03-30", "Marlene, la Vecina del Ártico.wav", "4", "12"),
("ES5400580410", "Me Llaman Octubre", "2005-03-30", "Me Llaman Octubre.wav", "4", "12"),
("ES5400580404", "Mi Personulidad", "2005-03-30", "Mi Personulidad.wav", "4", "12"),
("ES5400580406", "Mi Primera Combustión", "2005-03-30", "Mi Primera Combustión.wav", "4", "12"),
("ES5400580407", "Música de Ascensores", "2005-03-30", "Música de Ascensores.wav", "4", "12");
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- CAJA DE MÚSICA
-- 2015-05-16 
("COSO11500154", "Año Bisiesto", "2015-05-16", "Año Bisiesto.wav", "2", "13"),
("COSO11500146", "Dejame Vivir", "2015-05-16", "Dejame Vivir.wav", "2", "13"),
("COSO11500147", "Incendio", "2015-05-16", "Incendio.wav", "2", "13"),
("COSO11500152", "Llore", "2015-05-16", "Llore.wav", "2", "13"),
("COSO11500153", "Marinero Wawani", "2015-05-16", "Marinero Wawani.wav", "2", "13"),
("COSO11500151", "Mi Libertad", "2015-05-16", "Mi Libertad.wav", "2", "13"),
("COSO11500145", "No Hace Falta", "2015-05-16", "No Hace Falta.wav", "2", "13"),
("COSO11500155", "Turquesa Menina", "2015-05-16", "Turquesa Menina.wav", "2", "13"),
("COSO11500156", "Viejos Amores", "2015-05-16", "Viejos Amores.wav", "2", "13");
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- ENCANTO TROPICAL
-- 2018-05-18 
("COSO11800041", "Bailar Contigo", "2018-05-18", "Bailar Contigo.wav", "2", "14"),
("COSO11800042", "Encanto Tropical", "2018-05-18", "Encanto Tropical.wav", "2", "14"),
("COSO11800043", "Guayabas y Flores", "2018-05-18", "Guayabas y Flores.wav", "2", "14"),
("COSO11800044", "Infinito", "2018-05-18", "Infinito.wav", "2", "14"),
("COSO11800046", "Llévame", "2018-05-18", "Llévame.wav", "2", "14"),
("COSO11800047", "Me Vas a Hacer Falta", "2018-05-18", "Me Vas a Hacer Falta.wav", "2", "14"),
("COSO11800049", "Tarde", "2018-05-18", "Tarde.wav", "2", "14"),
("COSO11800050", "Vámonos", "2018-05-18", "Vámonos.wav", "2", "14"),
("COSO11800051", "Veneno", "2018-05-18", "Veneno.wav", "2", "14");
INSERT INTO canciones VALUES
-- ISRC, titulo, fechaLanzamiento, rutacancion, idGenero, idAlbum
-- HECHO A MANO
-- 2012-05-20 
("TCABH1224596", "Be Bop", "2012-05-20", "Be Bop.wav", "2", "15"),
("TCABH1224588", "Cou Cou", "2012-05-20", "Cou Cou.wav", "2", "15"),
("TCABH1224590", "Huracán", "2012-05-20", "Huracán.wav", "2", "15"),
("TCABH1224551", "La Ciudad", "2012-05-20", "La Ciudad.wav", "2", "15"),
("TCABH1224608", "La Muerte", "2012-05-20", "La Muerte.wav", "2", "15"),
("TCABH1224593", "La Playa", "2012-05-20", "La Playa.wav", "2", "15"),
("TCABH1224549", "La Tienda de Sombreros", "2012-05-20", "La Tienda de Sombreros.wav", "2", "15"),
("TCABH1224605", "Nada Puro Hay", "2012-05-20", "Nada Puro Hay.wav", "2", "15"),
("TCABH1224585", "Sabor a Mi", "2012-05-20", "Sabor a Mi.wav", "2", "15"),
("TCABH1224552", "Suin Romanticon", "2012-05-20", "Suin Romanticon.wav", "2", "15"),
("TCABH1224612", "Swing With Me", "2012-05-20", "Swing With Me.wav", "2", "15");

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
("4", "ES5400580405"),
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
(),
(),
();


-- ------------------------------------------------------------------------------------------------