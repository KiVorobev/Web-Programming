package com.example.Web3.entity;

import lombok.Data;
import org.hibernate.annotations.Entity;
import org.hibernate.annotations.Table;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@Table(name = "results")
public class Result {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    @Column(name = "x")
    private Double x;

    @Column(name = "y")
    private Double y;

    @Column(name = "r")
    private Integer r;

    @Column(name = "curtime")
    private String currentTime;

    @Column(name = "extime")
    private long executionTime;

    @Column(name = "result")
    private boolean result;
}
