<?php
namespace types;

class CheckedText {
  public $ruIndexes;
  public $enIndexes;
  public $lang;

  function __construct($ruIndexes = [], $enIndexes = [], $lang = 'ru') 
  {
    $this->ruIndexes = $ruIndexes;
    $this->enIndexes = $enIndexes;
    $this->lang = $lang;
  }
}