package com.example.Web3.beans;

import com.example.Web3.entity.Result;
import com.example.Web3.services.ResultService;
import com.example.Web3.utils.HitChecker;
import com.example.Web3.utils.Validator;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class ResultBean {

    private String xError = "";
    private String yError = "";
    private String rError = "";
    private int pointer5 = 0;
    private int pointer2 = 0;
    private int isPointer = 0;
    private Result newResult = new Result();
    private Result clickResult = new Result();
    private final Validator validator = new Validator();
    private final ResultService resultService = new ResultService();
    private List<Result> resultList = new ArrayList<Result>(resultService.findAllResults());

    public void addResult() {
        makeSubmitErrors();
        if (newResult.getX() != null && newResult.getY() != null && newResult.getR() != null) {
            if (validator.validate(newResult)) {
                try {
                    makeResult(newResult);
                    resultService.addResult(newResult);
                    update();
                    saveSubmitValues(newResult.getX(), newResult.getY(), newResult.getR());
                } catch (Exception exception) {
                    System.out.println("Database is dead...");
                }
            }
        } else {
            System.out.println("NullPointer here");
            System.out.println(newResult);
        }
    }

    public void makeSubmitErrors() {
        xError = validator.checkX(newResult);
        yError = validator.checkY(newResult);
        rError = validator.checkR(newResult);
    }

    public void makeClickErrors() {
        xError = "";
        yError = "";
        rError = validator.checkR(clickResult);
    }

    public void deleteList() {
        try {
            resultService.deleteAll();
            resultList.clear();
        } catch (Exception exception) {
            System.out.println("Database is dead...");
        }
    }

    public void defaultResult() {
        newResult.setX(null);
        newResult.setY(null);
        newResult.setR(null);
        clickResult.setX(null);
        clickResult.setY(null);
        clickResult.setR(null);
        isPointer = 0;
        xError = "";
        yError = "";
        rError = "";
    }

    public void setNewR(int r) {
        newResult.setR(r);
        clickResult.setR(r);
        rError = "";
        if (r == 5) this.pointer5 = 1;
        else this.pointer5 = 0;
        if (r == 2) this.pointer2 = 0;
        else this.pointer2 = 1;
        if (r == 0) this.isPointer = 0;
        else this.isPointer = 1;
    }

    public void update() {
        try {
            resultList = resultService.findAllResults();
        } catch (Exception exception) {
            System.out.println("Database is dead...");
        }
    }

    public void addCheck() {
        if (clickResult.getX() != null && clickResult.getY() != null) addClick();
        else addResult();
    }

    public void saveSubmitValues(Float x, Float y, Integer r) {
        newResult = new Result();
        newResult.setX(x);
        newResult.setY(y);
        newResult.setR(r);
    }

    public void coordinatesToValues(Result result) {
        result.setX((float) (((result.getR() * (result.getX() - 175) / 135.0) / 1.2) * 4.0 / result.getR()));
        result.setY((float) (((result.getR() * (175 - result.getY()) / 135.0) / 1.2) * 4.0 / result.getR()));
    }

    public void addClick() {
        clickResult.setR(newResult.getR());
        makeClickErrors();
        if (validator.checkR(clickResult) == "") {
            try {
                coordinatesToValues(clickResult);
                makeResult(clickResult);
                resultService.addResult(clickResult);
                update();
                saveSubmitValues(newResult.getX(), newResult.getY(), newResult.getR());
            } catch (Exception exception) {
                System.out.println("Database is dead...");
            }
        } else {
            System.out.println("NullPointer here");
            System.out.println(newResult);
        }
        clickResult.setX(null);
        clickResult.setY(null);
    }

    public void makeResult(Result result) {
        result.setCurrentTime(new TimeBean().getTime());
        long start = System.nanoTime();
        result.setResult(new HitChecker().isHit(result.getX(), result.getY(), result.getR()));
        result.setExecutionTime((System.nanoTime() - start) / 1000);
    }
}