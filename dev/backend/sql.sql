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
zip INT,
city varchar(255),
business_id varchar(255),
PRIMARY KEY (id)
);

CREATE TABLE  "tij_houses" (
id SERIAL UNIQUE NOT NULL,
id_housing_comp INT NOT NULL,
address varchar(255),
zip INT,
city varchar(255),
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
id_flat INT NOT NULL,
email varchar(255) NOT NULL,
password CHAR(64),
first_name varchar(255),
last_name varchar(255),
phone varchar(255),
role smallint,
last_login TIMESTAMP without time zone,
address varchar(255),
zip int,
city varchar(255),
PRIMARY KEY (id),
FOREIGN KEY (id_flat) REFERENCES tij_flats(id)
);

CREATE TABLE "tij_notifications" (
id SERIAL UNIQUE NOT NULL,
id_user INT NOT NULL,
id_housing_c INT,
id_checkout INT,
read_id INT,
sent_date TIMESTAMP without time zone,
read_date TIMESTAMP without time zone,
message text,
title varchar(255),
notif_type int NOT NULL,
checkout_date TIMESTAMP without time zone,
checkout_message text,
status smallint,
PRIMARY KEY (id),
);

CREATE TABLE "tij_maintenance_comp" (
id SERIAL UNIQUE NOT NULL,
mc_name varchar(255),
mc_address varchar(255),
mc_zip INT,
mc_city varchar(255),
mc_business_id varchar(255),
PRIMARY KEY (id)
);

insert into tij_housing_comp (id, name, address, zip, city, business_id) values (1, 'Yata', '6375 Golden Leaf Pass', 74915, 'Palcza', 772108);
insert into tij_housing_comp (id, name, address, zip, city, business_id) values (2, 'Pixonyx', '8085 Hayes Hill', 13708, 'Attard', 208804);
insert into tij_housing_comp (id, name, address, zip, city, business_id) values (3, 'Quimm', '3 Tony Hill', 42183, 'Płoniawy-Bramura', 336622);
insert into tij_housing_comp (id, name, address, zip, city, business_id) values (4, 'Tekfly', '539 Melrose Junction', 81727, 'Ribeirão Pires', 249204);
insert into tij_housing_comp (id, name, address, zip, city, business_id) values (5, 'Feedmix', '81151 Crownhardt Crossing', 33487, 'Jagupit', 440856);

insert into tij_houses (id, id_housing_comp, address, zip) values (1, 2, '315 Del Mar Avenue', 70003);
insert into tij_houses (id, id_housing_comp, address, zip) values (2, 4, '6139 Warbler Trail', 67030);
insert into tij_houses (id, id_housing_comp, address, zip) values (3, 2, '18503 Moland Parkway', 68384);
insert into tij_houses (id, id_housing_comp, address, zip) values (4, 2, '62757 Transport Pass', 27403);
insert into tij_houses (id, id_housing_comp, address, zip) values (5, 5, '21666 Elka Alley', 10657);
insert into tij_houses (id, id_housing_comp, address, zip) values (6, 4, '0791 Muir Crossing', 12121);
insert into tij_houses (id, id_housing_comp, address, zip) values (7, 1, '6 Jana Way', 85592);
insert into tij_houses (id, id_housing_comp, address, zip) values (8, 3, '317 Golf View Trail', 74770);
insert into tij_houses (id, id_housing_comp, address, zip) values (9, 2, '6556 Michigan Lane', 25267);
insert into tij_houses (id, id_housing_comp, address, zip) values (10, 2, '4 Bartelt Street', 33221);

insert into tij_flats (id, id_houses, flat_number, stairway) values (1, 8, 34, 'CN');
insert into tij_flats (id, id_houses, flat_number, stairway) values (2, 7, 29, 'PH');
insert into tij_flats (id, id_houses, flat_number, stairway) values (3, 6, 83, 'US');
insert into tij_flats (id, id_houses, flat_number, stairway) values (4, 8, 92, 'ID');
insert into tij_flats (id, id_houses, flat_number, stairway) values (5, 1, 34, 'MX');
insert into tij_flats (id, id_houses, flat_number, stairway) values (6, 7, 98, 'PH');
insert into tij_flats (id, id_houses, flat_number, stairway) values (7, 9, 84, 'PH');
insert into tij_flats (id, id_houses, flat_number, stairway) values (8, 1, 53, 'PT');
insert into tij_flats (id, id_houses, flat_number, stairway) values (9, 4, 66, 'PL');
insert into tij_flats (id, id_houses, flat_number, stairway) values (10, 7, 99, 'RU');
insert into tij_flats (id, id_houses, flat_number, stairway) values (11, 3, 43, 'RU');
insert into tij_flats (id, id_houses, flat_number, stairway) values (12, 6, 65, 'VN');
insert into tij_flats (id, id_houses, flat_number, stairway) values (13, 10, 65, 'BR');
insert into tij_flats (id, id_houses, flat_number, stairway) values (14, 1, 80, 'PH');
insert into tij_flats (id, id_houses, flat_number, stairway) values (15, 8, 59, 'CN');
insert into tij_flats (id, id_houses, flat_number, stairway) values (16, 10, 30, 'ID');
insert into tij_flats (id, id_houses, flat_number, stairway) values (17, 4, 46, 'ID');
insert into tij_flats (id, id_houses, flat_number, stairway) values (18, 5, 90, 'CN');
insert into tij_flats (id, id_houses, flat_number, stairway) values (19, 3, 1, 'ID');
insert into tij_flats (id, id_houses, flat_number, stairway) values (20, 9, 77, 'CN');

insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (1, 20, 'sjancar0@psu.edu', 'c754aec46da0602416833881942adaee46960595', 'Sven', 'Jancar', '399-454-9011', 3, '2017-05-23', '88370 Glendale Way', 45214, 'Nowshera Cantonment');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (2, 19, 'hwormstone1@goodreads.com', '0d6dba6b629ca60c46103c80d8bbf409aab57247', 'Helen-elizabeth', 'Wormstone', '797-604-5385', 1, '2017-08-22', '3 Memorial Center', 81894, 'Roslavl’');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (3, 18, 'breece2@hibu.com', '65c870ecf77ad0b2d3937a911347884954d9577d', 'Berta', 'Reece', '327-378-1207', 3, '2017-11-19', '0859 Crescent Oaks Drive', 50355, 'Santo Tomas');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (4, 6, 'bsarjent3@ca.gov', '0d5587f5e873dc1f4150de485f941827d2212659', 'Brantley', 'Sarjent', '202-654-3005', 2, '2017-08-13', '6441 Sunbrook Avenue', 85694, 'Obudovac');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (5, 2, 'nyirrell4@go.com', 'fa0f7dda5f1bb815219a19a1dfff394b13388824', 'Nickolai', 'Yirrell', '513-590-4316', 3, '2017-05-12', '2 5th Parkway', 21213, 'Sigaozhuang');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (6, 16, 'bwillis5@cornell.edu', '8a95870d6a5263ccd1175f7110892b5c1f95ebf3', 'Berton', 'Willis', '741-939-9435', 3, '2017-08-17', '6 Jackson Crossing', 87553, 'Bakıxanov');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (7, 6, 'hmordaunt6@blog.com', '9922eaaf13b18c31fc2235b842103005d615767e', 'Homerus', 'Mordaunt', '591-303-0279', 2, '2017-04-26', '342 Miller Hill', 33889, 'Enonkoski');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (8, 4, 'mbrandhardy7@flickr.com', '2b6fcac8964c8235e18f0c5de3b42a9ebc6f5866', 'Maddie', 'Brand-Hardy', '508-361-7455', 3, '2017-07-19', '1451 Coleman Avenue', 13706, 'Karviná');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (9, 8, 'jmalden8@devhub.com', '3f4060e00e5514ea6a2a746acc815770af57350f', 'Jayme', 'Malden', '325-457-2622', 1, '2017-09-26', '637 Quincy Place', 67248, 'Sparwood');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (10, 14, 'jsutlieff9@people.com.cn', 'bd055138bd7369872a4fd299266ff22be25a5a75', 'Jeth', 'Sutlieff', '535-864-1829', 1, '2017-07-19', '93304 Oak Plaza', 20674, 'Hushan');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (11, 19, 'ttrimmea@taobao.com', '3df2253132c53b248ce186a52fbcf1b1f302ef50', 'Terrell', 'Trimme', '147-678-5049', 1, '2017-12-04', '4 Emmet Circle', 19884, 'Xiagang');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (12, 18, 'eprayerb@barnesandnoble.com', '4f16dbd44c6ea0b8391d9ff87dbc7c57f4c5e3dd', 'Ebenezer', 'Prayer', '191-782-5820', 2, '2017-03-25', '0 American Crossing', 12820, 'San Rafael');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (13, 13, 'cmcguckinc@archive.org', '785b4dcfe42240be98d2af83b41992eca2113543', 'Cindelyn', 'McGuckin', '788-812-6324', 1, '2017-06-04', '1699 Green Ridge Hill', 38325, 'Xiangshan');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (14, 9, 'ckilalead@ebay.com', '8b395340db1e562bb578a9b1eecc07e047850483', 'Clarance', 'Kilalea', '537-823-6070', 3, '2017-05-02', '06 Bunker Hill Pass', 58905, 'Lyon');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (15, 15, 'gbiddlese@cisco.com', '491c03ccd71c250526919a04ee3af7fbfed5e165', 'Goober', 'Biddles', '369-562-6655', 2, '2017-11-15', '33424 Warbler Pass', 95222, 'Charenton-le-Pont');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (16, 11, 'aabrashkovf@cpanel.net', '4635e6551e172a32c4d55ba4d28705590b7839bb', 'Anthiathia', 'Abrashkov', '588-409-3947', 3, '2017-06-18', '5441 Butterfield Terrace', 14293, 'Takanabe');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (17, 10, 'ckleinzweigg@examiner.com', 'dab0b9c52f5cb4740cd9410f23a51f8162c8a89c', 'Cobby', 'Kleinzweig', '716-453-7880', 1, '2018-03-12', '1303 Logan Alley', 19309, 'Susoh');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (18, 7, 'lhayshamh@statcounter.com', '9db913751857d507745611ebaf100586747f593b', 'Leanna', 'Haysham', '721-669-8643', 1, '2018-01-18', '5 Jana Drive', 44557, 'Taverny');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (19, 1, 'adietschei@auda.org.au', '2db567abc51d7ebc2e1690d078ccc6c567052299', 'Anica', 'Dietsche', '315-244-4602', 1, '2017-07-09', '20473 Michigan Avenue', 16944, 'Pindobaçu');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (20, 14, 'jhaldinj@goo.ne.jp', '7f5f9b76bba97d1f3f823f0bc95205d20624536d', 'Jacob', 'Haldin', '682-763-7271', 1, '2018-03-15', '656 Hooker Road', 81177, 'Samran');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (21, 2, 'jbuffk@wisc.edu', '51afef524e73c74a93815147d704e65d36073c4f', 'Jarred', 'Buff', '311-259-8985', 2, '2017-05-24', '6793 Pepper Wood Avenue', 63137, 'Buri');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (22, 2, 'ldurnelll@sourceforge.net', 'f8592f2ec7fa72166c20026d5fb02ba1b447ec4c', 'Livvy', 'Durnell', '399-307-3709', 3, '2017-09-01', '82 Spohn Court', 23530, 'Songbai');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (23, 13, 'ganscombem@biglobe.ne.jp', '51dab7a4a4b174a6c2760bf8ec3297bb2216e174', 'Goraud', 'Anscombe', '748-707-5202', 3, '2018-02-21', '37 Alpine Way', 40159, 'Tilamuta');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (24, 4, 'clowtonn@ft.com', '6043f4f80627abe28dd174523cf89e404c93b947', 'Caril', 'Lowton', '907-770-7779', 2, '2018-03-09', '3768 Rockefeller Point', 73362, 'Jikamshi');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (25, 19, 'ryukhnevo@youtu.be', 'a5bcb27c362b104af82d19cafa93990ef6bf0e7c', 'Rozanna', 'Yukhnev', '309-346-5296', 2, '2017-07-26', '79 Lotheville Street', 66477, 'Phú Khương');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (26, 10, 'pdooleyp@people.com.cn', 'c33645ff91fefafa0ff5594131d9de8b5eaabacd', 'Philippa', 'Dooley', '659-549-6800', 1, '2018-01-24', '67723 David Center', 54528, 'Löddeköpinge');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (27, 9, 'ccutforthq@senate.gov', 'a98ec12ed3aac273f47f168bf5041d22c559ec58', 'Cull', 'Cutforth', '497-101-8286', 1, '2017-05-15', '09 Doe Crossing Road', 90891, 'Shencun');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (28, 18, 'jburginr@zdnet.com', '316c8ca83a35182f65dc951ea23576ecce52a639', 'Jeth', 'Burgin', '496-953-0583', 3, '2017-11-03', '34 Rockefeller Way', 40700, 'Xilaiqiao');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (29, 15, 'ewhitens@dyndns.org', '27aec3459dd4e134bb0e5302aba3895913aff0b4', 'Emilee', 'Whiten', '226-618-7578', 2, '2017-11-21', '49 Mallard Parkway', 94988, 'Tsovazard');
insert into tij_users (id, id_flat, email, password, first_name, last_name, phone, role, last_login, billing_address, zip, city) values (30, 7, 'aattawellt@uol.com.br', '09d175806a7063b2cf8afe7047309a63619b1131', 'Auria', 'Attawell', '969-296-1307', 3, '2017-08-18', '0 Mcbride Avenue', 52169, 'Zarszyn');

/* lisätty id_flat */
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (1, 10, 4, 0, 3, '2017-07-22', '2017-12-30', 'Etiam justo.', 'Vestibulum sed magna at nunc commodo placerat.', 10, '2018-02-03', '', 2);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (2, 4, 3, 1, 3, '2017-11-19', '2018-02-23', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.', 'Maecenas pulvinar lobortis est.', 8, '2017-05-11', 'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.', 4);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (3, 5, 3, 1, 10, '2017-07-18', '2017-06-30', 'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.', 'Nullam porttitor lacus at turpis.', 6, '2017-10-26', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.', 1);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (4, 5, 4, 0, 10, '2017-11-30', '2017-06-27', 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.', 'Fusce consequat.', 2, '2017-11-19', 'Nulla ut erat id mauris vulputate elementum.', 0);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (5, 7, 2, 1, 7, '2017-10-06', '2017-07-12', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.', 'Donec ut mauris eget massa tempor convallis.', 1, '2017-11-06', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.', 2);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (6, 6, 1, 1, 2, '2018-03-06', '2018-02-16', 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.', 10, '2017-12-08', '', 4);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (7, 10, 5, 1, 5, '2017-06-04', '2017-04-05', 'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'Donec quis orci eget orci vehicula condimentum.', 1, '2017-11-28', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.', 5);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (8, 10, 4, 0, 2, '2018-03-09', '2017-09-30', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 'Duis consequat dui nec nisi volutpat eleifend.', 1, '2018-02-22', 'Duis consequat dui nec nisi volutpat eleifend.', 1);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (9, 2, 3, 0, 2, '2017-12-19', '2017-10-06', 'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'Nam tristique tortor eu pede.', 4, '2017-12-02', 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 5);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (10, 4, 2, 1, 9, '2017-09-07', '2017-07-10', 'Integer non velit.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1, '2018-02-15', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 2);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (11, 9, 4, 1, 1, '2017-05-10', '2017-08-26', 'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.', 'Donec quis orci eget orci vehicula condimentum.', 5, '2017-06-11', 'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 4);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (12, 10, 2, 1, 7, '2017-06-28', '2017-09-21', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.', 'Morbi non lectus.', 7, '2017-10-01', 'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.', 2);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (13, 6, 2, 0, 7, '2017-04-09', '2017-07-18', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.', 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.', 1, '2018-01-09', 'Morbi non lectus.', 1);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (14, 3, 5, 0, 3, '2017-12-09', '2017-04-07', 'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.', 'Pellentesque ultrices mattis odio.', 10, '2018-01-20', '', 2);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (15, 3, 3, 1, 7, '2017-05-20', '2017-09-14', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'Maecenas pulvinar lobortis est.', 8, '2017-09-01', 'Maecenas rhoncus aliquam lacus.', 3);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (16, 5, 3, 0, 5, '2018-03-14', '2017-05-18', 'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.', 5, '2017-04-14', '', 2);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (17, 9, 1, 0, 4, '2017-07-03', '2017-07-08', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.', 9, '2017-05-08', '', 4);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (18, 1, 5, 0, 5, '2017-05-01', '2018-02-24', 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.', 'Morbi quis tortor id nulla ultrices aliquet.', 6, '2017-07-30', 'Pellentesque eget nunc.', 2);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (19, 6, 3, 1, 1, '2018-01-03', '2018-01-15', 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.', 'Praesent id massa id nisl venenatis lacinia.', 7, '2017-07-12', 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.', 2);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (20, 3, 4, 0, 2, '2017-09-02', '2018-02-04', 'Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'Vestibulum ac est lacinia nisi venenatis tristique.', 8, '2017-06-27', 'Praesent blandit. Nam nulla.', 5);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (21, 5, 5, 1, 6, '2017-05-09', '2017-10-17', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 'Morbi porttitor lorem id ligula.', 1, '2018-01-04', 'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.', 4);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (22, 10, 3, 0, 7, '2017-10-22', '2017-12-25', 'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.', 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.', 3, '2017-07-15', 'Etiam justo.', 0);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (23, 1, 4, 1, 3, '2017-08-21', '2017-12-07', 'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.', 'Suspendisse potenti.', 4, '2017-09-02', 'In quis justo. Maecenas rhoncus aliquam lacus.', 2);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (24, 2, 5, 0, 6, '2018-03-20', '2017-11-01', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.', 'Morbi non quam nec dui luctus rutrum.', 6, '2017-04-11', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 3);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (25, 6, 3, 0, 1, '2017-05-22', '2017-12-28', 'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.', 'Quisque id justo sit amet sapien dignissim vestibulum.', 5, '2017-10-06', 'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.', 1);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (26, 1, 1, 0, 6, '2017-10-06', '2017-06-11', 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'Aenean lectus.', 8, '2017-08-28', '', 1);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (27, 6, 4, 1, 2, '2017-06-03', '2017-12-19', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.', 'In hac habitasse platea dictumst.', 8, '2017-07-04', 'Proin risus.', 1);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (28, 2, 2, 1, 9, '2018-01-01', '2017-06-11', 'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.', 'Nam dui.', 1, '2017-11-20', 'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.', 1);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (29, 9, 2, 1, 2, '2017-08-21', '2017-11-19', 'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.', 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.', 7, '2017-06-07', 'Aenean auctor gravida sem.', 2);
insert into tij_notifications (id, id_user, id_housing_c, id_checkout, read_id, sent_date, read_date, message, title, notif_type, checkout, checkout_message, status) values (30, 10, 1, 0, 3, '2017-05-08', '2018-01-02', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.', 'Vivamus vel nulla eget eros elementum pellentesque.', 4, '2017-05-16', 'Maecenas pulvinar lobortis est.', 1);


insert into tij_maintenance_comp (id, name, address, zip, city, business_id) values (1, 'Topdrive', '86 Blue Bill Park Plaza', 54779, 'Dieppe', 850261);
insert into tij_maintenance_comp (id, name, address, zip, city, business_id) values (2, 'Yotz', '99 Ridgeway Point', 51130, 'Anadia', 182319);
insert into tij_maintenance_comp (id, name, address, zip, city, business_id) values (3, 'Zoonoodle', '3451 Summit Trail', 47722, 'La Mohammedia', 785378);
insert into tij_maintenance_comp (id, name, address, zip, city, business_id) values (4, 'Thoughtstorm', '10 Forest Dale Place', 61615, 'Graneros', 489133);
insert into tij_maintenance_comp (id, name, address, zip, city, business_id) values (5, 'Oyonder', '72997 Chinook Avenue', 98387, 'Bang Mun Nak', 579499);
insert into tij_maintenance_comp (id, name, address, zip, city, business_id) values (6, 'Realfire', '87 Welch Hill', 30189, 'Văn Giang', 870236);
insert into tij_maintenance_comp (id, name, address, zip, city, business_id) values (7, 'Skyndu', '39689 Golden Leaf Alley', 55239, 'Labog', 613657);
ta.sql
