- Database: "TIJ_DB"

-- DROP DATABASE "TIJ_DB";

CREATE DATABASE "TIJ_DB"
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'Finnish_Finland.1252'
       LC_CTYPE = 'Finnish_Finland.1252'
       CONNECTION LIMIT = -1;

COMMENT ON DATABASE "TIJ_DB"
  IS 'ryhmätyön kanta';

-- TAULUT

DROP TABLE IF EXISTS tij_maintenance_comp;
DROP TABLE IF EXISTS tij_notifications;
DROP TABLE IF EXISTS tij_users;
DROP TABLE IF EXISTS tij_flats;
DROP TABLE IF EXISTS tij_houses;
DROP TABLE IF EXISTS tij_housing_comp;

CREATE TABLE "tij_housing_comp" (
id SERIAL UNIQUE NOT NULL,
name varchar(255),
address varchar(255),
zip varchar(255),
city varchar(255),
business_id varchar(255),
PRIMARY KEY (id)
);

CREATE TABLE  "tij_houses" (
id SERIAL UNIQUE NOT NULL,
id_housing_comp INT NOT NULL,
address varchar(255),
zip varchar(255),
PRIMARY KEY (id),
FOREIGN KEY (id_housing_comp) REFERENCES tij_housing_comp(id)
);

CREATE TABLE "tij_flats" (
id SERIAL UNIQUE NOT NULL,
id_houses INT NOT NULL,
flat_number varchar(255),
stairway varchar(255),
PRIMARY KEY (id),
FOREIGN KEY (id_houses) REFERENCES tij_houses(id)
);

CREATE TABLE "tij_users" (
id SERIAL UNIQUE NOT NULL,
id_flat int,
email varchar(255) NOT NULL,
password CHAR(64),
first_name varchar(255),
last_name varchar(255),
phone varchar(255),
role smallint,
last_login DATE,
billing_address varchar(255),
zip int,
city varchar(255),
PRIMARY KEY (id),
FOREIGN KEY (id_flat) REFERENCES tij_flats(id)
);

CREATE TABLE "tij_notifications" (
id SERIAL UNIQUE NOT NULL,
id_user INT NOT NULL,
id_housing_c INT NOT NULL,
id_checkout INT,
read_id varchar(255),
sent_date date,
read_date date,
message text,
title varchar(255),
notif_type int NOT NULL,
checkout date,
checkout_message text,
status smallint,
PRIMARY KEY (id)
);

CREATE TABLE "tij_maintenance_comp" (
id SERIAL UNIQUE NOT NULL,
name varchar(255),
address varchar(255),
zip varchar(255),
city varchar(255),
business_id varchar(255),
PRIMARY KEY (id)
);
