<?php
namespace controllers;

require_once __DIR__ . '/../types/ResponseBody.php';
require_once __DIR__ . '/../common/Common.php';
require_once __DIR__ . '/../models/TextModel.php';
require_once __DIR__ . '/../rules/StringRule.php';

use types\ResponseBody;
use common\Common;
use models\TextModel;
use rules\StringRule;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Rakit\Validation\Validator;

class TextController {
  private function sendError($response, $error_message) {
    $responseBody = new ResponseBody(null, $error_message);
    return $response->withJson($responseBody);
  }

  public function checkText(Request $request, Response $response, $args) {
    $body = $request->getParsedBody();

    $validator = new Validator();
    $validator->addValidator('string', new StringRule());
    $rulesValidator = [
      'text'   => 'required|string|min:15|max:65535',
      'isSave' => 'required|boolean'
    ];
    $validation = $validator->make($body, $rulesValidator);
    $validation->validate();

    if ($validation->fails()) {
      $errors = $validation->errors();
      return $this->sendError($response, $errors->firstOfAll());
    } 

    $text = $body['text'];
    $isSave = $body['isSave'];

    if($isSave) {
      TextModel::save($text);
    }

    $result = Common::checkText($text);
    $responseBody = new ResponseBody($result);

    return $response->withJson($responseBody);
  }

  public function getAll(Request $request, Response $response, $args) {
    $texts = TextModel::getAllBySid();
    $responseBody = new ResponseBody($texts);

    return $response->withJson($responseBody);
  }
}
