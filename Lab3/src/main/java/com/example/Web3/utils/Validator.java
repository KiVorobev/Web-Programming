package com.example.Web3.utils;

public class Validator {

    public boolean validate(Double x, Double y, Integer r){
        return validateX(x) && validateY(y) && validateR(r);
    }

    private boolean validateX(Double x) {
        return x >= -4 && x <= 4;
    }

    private boolean validateY(Double y) {
        return y > -3 && y < 3;
    }

    private boolean validateR(Integer r) {
        return r >= 1 && r <= 5;
    }
}
