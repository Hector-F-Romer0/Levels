SHOW TABLES;

SELECT * FROM usuarios;
SELECT * FROM generos;

INSERT INTO usuarios VALUES(1234567890,'Juan Sebastian','Casas León','jSeb23','jscleon@gmail.com','123456','Usuario');
INSERT INTO generos VALUES (default,'Merengue');

UPDATE usuarios SET tipo = IFNULL(null,tipo) WHERE numeroIdentificacion='1234567890';
UPDATE generos SET nombreGenero = IFNULL('Electrónica', nombreGenero) WHERE idGenero = '1';

DELETE FROM usuarios WHERE numeroIdentificacion='1234567890';
