<?php

function upLeft($x, $y, $r){
    return ($y <= 1/2 * $x + $r/2) && ($x <= 0 && $y >= 0);
}

function upRight($x, $y, $r){
    return ($x * $x + $y * $y <= $r * $r / 4) && ($x >= 0 && $y >= 0);
}

function downRight($x, $y, $r){
    return ($x <= $r/2 && $y >= -$r) && ($x >= 0 && $y <= 0);
}

function isHit($x, $y, $r){
    return upLeft($x, $y, $r) || upRight($x, $y, $r) || downRight($x, $y, $r);
}