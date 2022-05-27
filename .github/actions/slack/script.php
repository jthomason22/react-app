<?php

require_once 'vendor/autoload.php';
Requests:: register_autoloader();

var_dump($argv);
var_dump($_ENV);
// $response = Requests::post(
//     "https://hooks.slack.com/services/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",
//     array(
//         'Content-type' => 'application/json'
//     ),
//     json_encode(array(
//         "text" => "You have a new request: *<fakeLink.to EmployeeProfile.com|FredEnriquez - A New device request>*.
//         *Type:*\nComputer (laptop)
//         *When:*\nSubmitted Aut10",
//     ))
// );

// var_dump($response);

// if (!$reponse->success){
//     echo $response->body;
// }