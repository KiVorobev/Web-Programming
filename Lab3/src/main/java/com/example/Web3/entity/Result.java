package com.example.Web3.entity;

import lombok.Data;

import javax.persistence.*;
import javax.persistence.Table;

@Entity
@Table(name = "RESULTS")
@Data
public class Result {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "make_id")
    private int id;

    @Column(name = "x")
    private Float x;

    @Column(name = "y")
    private Float y;

    @Column(name = "r")
    private Integer r;

    @Column(name = "curtime")
    private String currentTime;

    @Column(name = "extime")
    private long executionTime;

    @Column(name = "result")
    private boolean result;
}
