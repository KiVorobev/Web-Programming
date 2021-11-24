package com.example.Web3.beans;

import com.example.Web3.entity.Result;
import com.example.Web3.utils.HitChecker;
import com.example.Web3.utils.Validator;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class ResultBean {

    private Result newResult = new Result();
    private List<Result> resultList = new ArrayList<Result>();
    private final Validator validator = new Validator();

    public void addResult() {
        if (newResult.getX() != null && newResult.getY() != null && newResult.getR() != null) {
            if (validator.validate(newResult.getX(), newResult.getY(), newResult.getR())) {
                newResult.setCurrentTime(new TimeBean().getTime());
                long start = System.nanoTime();
                newResult.setResult(new HitChecker().isHit(newResult.getX(), newResult.getY(), newResult.getR()));
                newResult.setExecutionTime((System.nanoTime() - start) / 1000);
                resultList.add(newResult);
                System.out.println(newResult);
                newResult = new Result();
            } else {
                System.out.println("Не в этот раз");
                System.out.println(newResult);
            }
        } else {
            System.out.println("ну тут нал");
            System.out.println(newResult);
        }
    }

    public void deleteList() {
        resultList.clear();
    }

    public void defaultResult() {
        newResult.setX(null);
        newResult.setY(null);
        newResult.setR(null);
    }
}
