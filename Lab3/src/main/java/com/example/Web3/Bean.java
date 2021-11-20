package com.example.Web3;

import javax.annotation.ManagedBean;
import javax.faces.bean.ApplicationScoped;
import java.util.LinkedList;
import java.util.List;

@ManagedBean
@ApplicationScoped
public class Bean {
    private final List<Data> beanList;
    private static Data instance;

    private Bean(){
        beanList = new LinkedList<>();
    }

    public static Data getInstance(){
        if (instance == null) instance = new Data();
        return instance;
    }

    public List<Data> getBeanList(){
        return beanList;
    }

    public synchronized void addBean(Data data) {
        beanList.add(data);
    }
}
