<?php
namespace handlers;

require_once __DIR__ . '/../types/ResponseBody.php';

use types\ResponseBody;
use Slim\Handlers\AbstractHandler;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

class NotFound extends AbstractHandler {
  public function __invoke(Request $request, Response $response) {
    $response_body = new ResponseBody(null, 'This API does not exist');

    return $response->withJson($response_body);
  }
}
