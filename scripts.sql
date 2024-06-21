-- Creación de las tablas en PostgreSQL
-- Tablas de lookup
-- Tabla: empleado_cargo
-- CREATE TABLE cargo (
--     id_cargo NUMERIC(1) PRIMARY KEY,
--     nombre VARCHAR(50)
-- );
-- -- Tabla: genero
-- CREATE TABLE genero (
--     id_genero VARCHAR(1) PRIMARY KEY,
--     nombre VARCHAR(50)
-- );
-- -- Tabla: estado_civil
-- CREATE TABLE estado_civil (
--     id_genero VARCHAR(1) PRIMARY KEY,
--     nombre VARCHAR(50)
-- );
-- Tabla: campania_estado
-- CREATE TABLE campania_estado (
--     id_campania_estado VARCHAR(1) PRIMARY KEY,
--     nombre VARCHAR(50)
-- );
-- Tabla: predio_nivel_socioeco
-- CREATE TABLE predio_nivel_socioeco (
--     nivel_socioeco VARCHAR(2),
--     nombre_socioeco VARCHAR(50)
-- );
-- -- Tabla: predio_categoria
-- CREATE TABLE predio_categoria (
--     categoria VARCHAR(2),
--     nombre_categoria VARCHAR(50)
-- );
-- -- Tabla: conexion_estado
-- CREATE TABLE conexion_estado (
--     estado VARCHAR(2),
--     nombre_estado VARCHAR(50)
-- );
-- -- Tabla: conexion_tipo
-- CREATE TABLE conexion_tipo (
--     tipo VARCHAR(2),
--     nombre_tipo VARCHAR(50)
-- );
-- -- Tabla: direccion_tipo_via
-- CREATE TABLE direccion_tipo_via (
--     tipo_via VARCHAR(50),
--     nombre_tipo_via VARCHAR(50)
-- );
-- -- Tabla: tipo_modificacion
-- CREATE TABLE tipo_modificacion (
--     id_tipo_modificacion NUMERIC(9, 0) PRIMARY KEY,
--     nombre_modificacion VARCHAR(50)
-- );
-- -- Tabla: direccion_urbanizacion
-- CREATE TABLE direccion_urbanizacion (
--     urbanizacion NUMERIC(2, 0),
--     nombre_urbanizacion VARCHAR(50)
-- );
-- Tabla: revision_estado
-- CREATE TABLE revision_estado (
--     estado VARCHAR(1),
--     nombre VARCHAR(50)
-- );
-- -- Tabla: usuario
-- CREATE TABLE usuario (
--     id_usuario SERIAL PRIMARY KEY,
--     username VARCHAR(50) UNIQUE,
--     contrasenia VARCHAR()
-- );
-- -- Tabla: empleado
-- CREATE TABLE empleado (
--     id_empleado SERIAL PRIMARY KEY,
--     dni NUMERIC(8, 0) UNIQUE,
--     nombre_pri VARCHAR(50),
--     nombre_seg VARCHAR(50),
--     apellido_pat VARCHAR(50),
--     apellido_mat VARCHAR(50),
--     cargo NUMERIC(1, 0),
--     correo VARCHAR(100),
--     fecha_contrato DATE,
--     genero VARCHAR(1),
--     telefono NUMERIC(9, 0),
--     id_usuario INT,
--     CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
-- );
-- -- Tabla: inspectores
-- CREATE TABLE inspectores (
--     id_inspectores SERIAL PRIMARY KEY,
--     cantidad NUMERIC(4, 0)
-- );
-- -- Tabla: localizacion
-- CREATE TABLE localizacion (
--     id_localizacion SERIAL PRIMARY KEY,
--     urbanizacion NUMERIC(2, 0)
-- );
-- -- Tabla: cliente
-- CREATE TABLE cliente (
--     id_cliente SERIAL PRIMARY KEY,
--     dni NUMERIC(8) UNIQUE,
--     nombre_pri VARCHAR(20),
--     nombre_seg VARCHAR(20),
--     apellido_pat VARCHAR(60),
--     apellido_mat VARCHAR(60),
--     genero VARCHAR(1),
--     estado_civil VARCHAR(1),
--     fecha_nacimiento DATE,
--     correo VARCHAR(100),
--     telefono NUMERIC(9)
-- );
-- falta crear
-- Tabla: campania_catastral
CREATE TABLE
    campania_catastral (
        id_campania SERIAL PRIMARY KEY,
        inspectores_campania NUMERIC(4, 0),
        fecha_inicio DATE,
        fecha_fin DATE,
        estado VARCHAR(1),
        id_empleado INT,
        CONSTRAINT fk_empleado FOREIGN KEY (id_empleado) REFERENCES empleado (id_empleado)
    );

-- Tabla: inspector_campania
CREATE TABLE
    inspector_campania (
        id_inspectores INT,
        id_campania INT,
        fecha_inspeccion DATE,
        PRIMARY KEY (id_inspectores, id_campania),
        CONSTRAINT fk_inspectores FOREIGN KEY (id_inspectores) REFERENCES inspectores (id_inspectores),
        CONSTRAINT fk_campania FOREIGN KEY (id_campania) REFERENCES campania_catastral (id_campania)
    );

-- Tabla: modificacion_empleado
CREATE TABLE
    modificacion_empleado (
        id_empleado INT,
        id_cliente INT,
        fecha_modificacion DATE,
        id_tipo_modificacion NUMERIC(9, 0),
        PRIMARY KEY (id_empleado, id_cliente),
        CONSTRAINT fk_empleado_modificacion FOREIGN KEY (id_empleado) REFERENCES empleado (id_empleado),
        CONSTRAINT fk_cliente_modificacion FOREIGN KEY (id_cliente) REFERENCES cliente (id_cliente),
        CONSTRAINT fk_tipo_modificacion FOREIGN KEY (id_tipo_modificacion) REFERENCES tipo_modificacion (id_tipo_modificacion)
    );

-- Tabla: revision
CREATE TABLE
    revision (
        id_campania INT,
        id_cliente INT,
        fecha_recepcion DATE,
        estado VARCHAR(1),
        PRIMARY KEY (id_campania, id_cliente),
        CONSTRAINT fk_campania_revision FOREIGN KEY (id_campania) REFERENCES campania_catastral (id_campania),
        CONSTRAINT fk_cliente_revision FOREIGN KEY (id_cliente) REFERENCES cliente (id_cliente)
    );

-- -- Tabla: predio
-- CREATE TABLE
--     predio (
--         id_predio SERIAL PRIMARY KEY,
--         id_cliente INT,
--         niveles NUMERIC(9, 0),
--         nivel_socioeco VARCHAR(50),
--         categoria VARCHAR(50),
--         CONSTRAINT fk_cliente_predio FOREIGN KEY (id_cliente) REFERENCES cliente (id_cliente)
--     );

-- Tabla: direccion
CREATE TABLE
    direccion (
        id_direccion SERIAL PRIMARY KEY,
        id_predio INT,
        tipo_via VARCHAR(50),
        nombre_via VARCHAR(100),
        numero NUMERIC(9, 0),
        urbanizacion NUMERIC(2, 0),
        CONSTRAINT fk_predio_direccion FOREIGN KEY (id_predio) REFERENCES predio (id_predio)
    );

-- Tabla: conexion
CREATE TABLE
    conexion (
        id_conexion SERIAL,
        id_predio INT,
        tipo VARCHAR(50),
        estado VARCHAR(50),
        num_medidor NUMERIC(8),
        PRIMARY KEY (id_conexion, id_predio),
        CONSTRAINT fk_predio_conexion FOREIGN KEY (id_predio) REFERENCES predio (id_predio)
    );

-- Tabla: localizacion_campania
CREATE TABLE
    localizacion_campania (
        id_localizacion INT,
        id_campania INT,
        fecha_inicio DATE,
        fecha_fin DATE,
        censados NUMERIC(4, 0),
        PRIMARY KEY (id_localizacion, id_campania),
        CONSTRAINT fk_localizacion FOREIGN KEY (id_localizacion) REFERENCES localizacion (id_localizacion),
        CONSTRAINT fk_campania_localizacion FOREIGN KEY (id_campania) REFERENCES campania_catastral (id_campania)
    );