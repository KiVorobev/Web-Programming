package com.example.Web2.results;

import java.util.LinkedList;

public class Bean {
    private LinkedList<Data> bean;

    public Bean() {
        bean = new LinkedList<>();
    }

    public LinkedList<Data> getBean() {
            return bean;
    }

    public void setBean(LinkedList<Data> bean) {
            this.bean = bean;
    }

    public void add(Data data){
        bean.push(data);
    }
}
