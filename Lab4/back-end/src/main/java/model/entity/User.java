package model.entity;

import lombok.Data;

import javax.persistence.*;
import javax.persistence.Table;

@Entity
@Table(name = "Users")
@Data
public class User {

    @Id
    @Column(name = "login")
    private String login;

    @Column(name = "x")
    private String password;
}