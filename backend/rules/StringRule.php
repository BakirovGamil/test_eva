<?php
namespace rules;
use Rakit\Validation\Rule as Rule;

class StringRule extends Rule
{
    protected $message = "The :attribute must be a string";
    public function check($value): bool
    {
        return is_string($value);
    }
}
