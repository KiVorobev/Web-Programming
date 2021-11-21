package com.example.Web3;

import java.util.ArrayList;
import java.util.List;

@lombok.Data
public class ExampleBean {

    private Hit newHit = new Hit();

    private List<Hit> hitList = new ArrayList<Hit>();

    public void addHit() {
        hitList.add(newHit);
        newHit = new Hit();
    }
}
