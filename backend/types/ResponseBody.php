<?php
namespace types;

class ResponseBody {
  public $result;
  public $errorMessages;

  function __construct($result = null, $errorMessages = null) 
  {
    $this->result = $result;
    $this->errorMessages = $errorMessages;
  }
}