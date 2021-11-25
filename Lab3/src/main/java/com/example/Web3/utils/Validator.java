package com.example.Web3.utils;

import com.example.Web3.entity.Result;

public class Validator {

    public boolean validate(Result result){
        return validateX(result) && validateY(result) && validateR(result);
    }

    private boolean validateX(Result result) {
        return result.getX() >= -4 && result.getX() <= 4 && result.getX() != null;
    }

    private boolean validateY(Result result) {
        return result.getY() > -3 && result.getY() < 3 && result.getY() != null;
    }

    private boolean validateR(Result result) {
        return result.getR() >= 1 && result.getR() <= 5 && result.getR() != null;
    }

    public String checkX(Result result) {
        if (result.getX() == null) return "You need to choose the value X!";
        else return "";
    }

    public String checkY(Result result) {
        if (result.getY() == null) {
            return "You need to choose the value Y!";
        } else if(result.getY() <= -3 || result.getY() >= 3) {
            return "Y can take value in the range (-3 ... 3)!";
        } else return "";
    }

    public String checkR(Result result) {
        if (result.getR() == null) return "You need to choose the value R!";
        else return "";
    }
}
