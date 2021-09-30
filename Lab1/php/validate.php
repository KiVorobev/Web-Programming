<?php
function validateForm($x, $y, $r){

    if (!is_double($x) || !is_int($y) || !is_double($r)){
        return false;
    }

    if ($y < -3 || $y > 5) {
        return false;
    }

    if ($r < 1 || $r > 3) {
        return false;
    }

    return true;

}
