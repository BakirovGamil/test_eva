<?php
require_once __DIR__ . '/../controllers/TextController.php';

use Slim\App;
use controllers\TextController;

return function (App $app) {
  $app->group(API_PATH,  function (App $app) {
    $app->get('/Texts', TextController::class . ':getAll');
    $app->post('/Texts/Check', TextController::class . ':checkText');
  });
};