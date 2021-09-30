<?php

require_once "validate.php";
require_once "result.php";

date_default_timezone_set('Europe/Moscow');

$start = microtime(true);
$current_time = date("H:i:s");

if (isset($_POST["x"]) && isset($_POST["y"]) && isset($_POST["r"])) {

    $x = $_POST["x"];
    $y = $_POST["y"];
    $r = $_POST["r"];

    $allowedValuesOfY = ['-3', '-2', '-1', '0', '1', '2', '3', '4', '5'];
    $allowedValuesOfR = ['1', '1.5', '2', '2.5', '3'];

    if (preg_match("/^((-?[0-3].\d*(?=[1-9])[1-9])|0|(-?[12]))$/", $x) && in_array($y, $allowedValuesOfY) && in_array($r, $allowedValuesOfR)) {

        $hit_result = isHit($x, $y, $r) ? "<span style='color: #0fc40f'>TRUE</span>" : "<span style='color: red'>FALSE</span>";

        $execution_time = number_format(microtime(true) - $start, 8, ".", "") * 1000000;

        die(<<<_END
        <tr>
            <th style="max-width: 300px; word-wrap: break-word";>$x</th>
            <th>$y</th>
            <th>$r</th>
            <th>$current_time</th>
            <th>$execution_time</th>
            <th>$hit_result</th>
        </tr>
_END
        );
    }
}
die("Data is incorrect!");