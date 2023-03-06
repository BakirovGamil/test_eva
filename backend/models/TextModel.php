<?php
namespace models;

use PDO;
use PDOException;

class TextModel {
  static function save($text) {
    try {
      global $dbh;
      $sqlCreate = 'INSERT INTO `texts` (`sid`, `text`) VALUES (:sid, :text)';
      $stmtCreate = $dbh->prepare($sqlCreate);
      $stmtCreate->execute([
        'sid' => session_id(),
        'text' => $text
      ]);

      $id = $dbh->lastInsertId();
      $sqlRead = 'SELECT `id`, `text` FROM `texts` WHERE `id` = :id';
      $stmtRead = $dbh->prepare($sqlRead);
      $stmtRead->execute([
        'id' => $id
      ]);

      return $stmtRead->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
      print "Error!: " . $e->getMessage();
      die();
    }
  }
  static function getAllBySid() {
    try {
      global $dbh;

      $sqlRead = 'SELECT `id`, `text` FROM `texts` WHERE `sid` = :sid';
      $stmtRead = $dbh->prepare($sqlRead);
      $stmtRead->execute([
        'sid' => session_id()
      ]);

      return $stmtRead->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
      print "Error!: " . $e->getMessage();
      die();
    }
  }
}