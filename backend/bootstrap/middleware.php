<?php

use Slim\App;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use common\Common;

return function (App $app) {
  $app->add(function (Request $request, Response $response, callable $next) {
    $uri = $request->getUri();
    $path = $uri->getPath();
    $is_api = Common::str_starts_with($path, API_PATH);

    if ($is_api) {
      return $next($request, $response);
    }

    // Возвращение React представления
    if ($request->getMethod() == 'GET') {
      $filename = __DIR__ . '/../public' . $path;

      if (file_exists($filename) && $path !== '/') {
        require $filename;
        return $response->withHeader('Content-Type', $request->getHeaderLine('Accept'));
      }

      require __DIR__ . '/../public/index.html';
      return $response->withHeader('Content-Type', null);
    }

    return $next($request, $response);
  });


};
