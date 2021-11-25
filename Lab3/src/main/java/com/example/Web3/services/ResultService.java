package com.example.Web3.services;

import com.example.Web3.dao.ResultDao;
import com.example.Web3.entity.Result;

import java.util.List;

public class ResultService {

    private final ResultDao resultsDao = new ResultDao();

    public ResultService() {
    }

    public void addResult(Result result) {
        resultsDao.save(result);
    }

    public List<Result> findAllResults() {
        return resultsDao.findAll();
    }

    public void deleteAll() {
            resultsDao.deleteAll();
    }
}
