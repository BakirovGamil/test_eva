<?php
namespace common;

require_once __DIR__ . '/../types/CheckedText.php';

use types\CheckedText;

class Common {
  static function str_starts_with($haystack, $needle): bool {
    return (string)$needle !== '' && strncmp($haystack, $needle, strlen($needle)) === 0;
  }

  static function checkText($text): CheckedText {
    $ruIndexes = [];
    $enIndexes = [];

    $ruRegExp = '/[а-я]/i';
    $enRegExp = '/[a-z]/i';
    $letters = preg_split('//u', $text, -1, PREG_SPLIT_NO_EMPTY);
    $length = count($letters);
    for($i = 0; $i < $length; $i++) {
      if(preg_match($ruRegExp, $letters[$i])) {
        $ruIndexes[] = $i;
        continue;
      }
      if(preg_match($enRegExp, $letters[$i])) {
        $enIndexes[] = $i;
        continue;
      }
    }

    $lang = count($ruIndexes) >= count($enIndexes) ? 'ru' : 'en';

    return new CheckedText($ruIndexes, $enIndexes, $lang);
  }
}
