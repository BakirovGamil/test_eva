<?php
require __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/database.php';

use Slim\Container;
use Slim\App;

$container = new Container();
$app = new App($container);
session_start();

CONST API_PATH = '/API';
$errorHandlers = require __DIR__ . '/error-handlers.php';
$errorHandlers($container);

$routes = require __DIR__ . '/routes.php';
$routes($app);

$middleware = require __DIR__ . '/middleware.php';
$middleware($app);

$app->run();