<?php
namespace handlers;

require_once __DIR__ . '/../types/ResponseBody.php';

use types\ResponseBody;
use Slim\Handlers\AbstractHandler;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

class NotAllowed extends AbstractHandler {
  public function __invoke(Request $request, Response $response, array $methods) {
    $allow = implode(', ', $methods);
    $response_body = new ResponseBody(null, "Method not allowed. Must be one of: $allow");

    return $response->withJson($response_body);
  }
}
