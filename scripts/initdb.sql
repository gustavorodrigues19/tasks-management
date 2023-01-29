DROP DATABASE IF EXISTS managementdb;
CREATE DATABASE managementdb;
USE managementdb;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `role` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `user` VALUES (1,'Manager', 'manager'), (2, 'Technician John', 'technician'), (3, 'Technician Mike', 'technician');

DROP TABLE IF EXISTS `task`;
CREATE TABLE `task` (`id` int NOT NULL AUTO_INCREMENT,`summary` varchar(2500) NOT NULL,`performedAt` datetime(6) DEFAULT NULL,
`userId` int NOT NULL,
  CONSTRAINT `FK_5a435efc1c4739804e60a76e52f` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  PRIMARY KEY (`id`)
);
INSERT INTO `task` VALUES (1,'First task', NULL, 2);
  