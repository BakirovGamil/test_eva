<?php
require_once __DIR__ . '/../handlers/NotFound.php';
require_once __DIR__ . '/../handlers/NotAllowed.php';

use Slim\Container;
use handlers\NotAllowed;
use handlers\NotFound;

return function (Container $container) {
  $container['notFoundHandler'] = function ()  {
    return new NotFound();
  };

  $container['notAllowedHandler'] = function () {
    return new NotAllowed();
  };
};