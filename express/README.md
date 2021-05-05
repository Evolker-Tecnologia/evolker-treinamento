Projeto de um servidor backend em Node que simula uma API utilizando Express. O objetivo foi criar a cada tarefa funcionalidades para o funcionamento do servidor como retornar um texto em caixa alta, retornar um texto "Hello World", criar endpoints que retornem arquivos json.

# Tecnologias
* Node.js 14.16.0
  * npm 6.14.11

# Instalação
* npm install

# Execução
* npm start

  

#  DDL do banco de dados

-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`,`name`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (6,'Karen'),(7,'Lucas'),(8,'Lilian'),(9,'Kimberly'),(10,'Robert'),(11,'Margaret'),(12,'Sandro'),(13,'Thomas'),(15,'Novo'),(16,'Novo'),(17,'James'),(18,'Ana'),(19,'Marco'),(20,'Erika'),(21,'Maria'),(22,'Jonas'),(23,'Lucas'),(24,'Lilian'),(25,'Kimberly'),(26,'Robert'),(27,'Margaret'),(28,'Sandro'),(29,'Thomas'),(30,'Cris'),(31,'James'),(32,'Ana'),(33,'Marco'),(34,'Erika'),(35,'Maria'),(36,'Jonas'),(37,'Lucas'),(38,'Lilian'),(39,'Kimberly'),(40,'Robert'),(41,'Margaret'),(42,'Sandro'),(43,'Thomas'),(44,'MÃ´nica'),(45,'James'),(46,'Ana'),(47,'Marco'),(48,'Erika'),(49,'Maria'),(50,'Jonas'),(51,'Lucas'),(52,'Lilian'),(53,'Kimberly'),(54,'Robert'),(55,'Margaret'),(56,'Sandro'),(57,'Thomas'),(58,'MÃ´nica'),(59,'James'),(60,'Ana'),(61,'Marco'),(62,'Erika'),(63,'Maria'),(64,'Jonas'),(65,'Lucas'),(66,'Lilian'),(67,'Kimberly'),(68,'Robert'),(69,'Margaret'),(70,'Sandro'),(71,'Thomas'),(72,'MÃ´nica'),(73,'Karen'),(74,'MÃ¡rcia'),(75,'Teste1');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-05 17:56:42

