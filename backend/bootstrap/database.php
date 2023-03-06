<?php
$DB_HOST = '127.0.0.1:3306';
$DB_NAME = 'test_eva';
$DB_USER = 'root';
$DB_PASSWORD = '';

try {
  $dbh = new PDO("mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4", $DB_USER, $DB_PASSWORD);
} catch (PDOException $e) {
  print "Error!: " . $e->getMessage();
  die();
}
