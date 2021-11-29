package com.example.Web3.services;

import com.example.Web3.dao.ResultDao;
import com.example.Web3.entity.Result;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class ResultService {

    private final ResultDao resultsDao = new ResultDao();

    public ResultService() {
    }

    public void addResult(Result result) {
        resultsDao.save(result);
    }

    public List<Result> findAllResults() {
        List<Result> newRes = new ArrayList<Result>(resultsDao.findAll());
        newRes = sortById(newRes);
        return newRes;
    }

    public List<Result> sortById(List<Result> results){
        return results.stream()
                .sorted(Comparator.comparing(Result::getId))
                .collect(Collectors.toList());
    }

    public void deleteAll() {
            resultsDao.deleteAll();
    }
}
