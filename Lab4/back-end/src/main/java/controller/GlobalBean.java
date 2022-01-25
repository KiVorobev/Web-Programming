package controller;

import controller.results.HitChecker;
import model.entity.Hit;
import model.entity.User;
import model.service.HitService;
import model.service.UserService;

import javax.ejb.EJB;
import javax.ejb.Singleton;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;

@Singleton
@TransactionManagement(value= TransactionManagementType.BEAN)
public class GlobalBean {

    @EJB
    private HitService hitService;

    @EJB
    private UserService userService;

    private HitChecker hitChecker = new HitChecker();

    public void addHit(Hit hit, String username) throws Exception {
        hit.setResult(hitChecker.isHit(hit.getX(), hit.getY(), hit.getR()));
        hit.setDate(new Timestamp(new Date().getTime()));
        hit.setUser_id(userService.findByUsername(username));
        hitService.saveHit(hit);
    }

    public void addUser(User user) throws Exception {
        userService.saveUser(user);
    }

    public ArrayList<Hit> getHits(String username) {
        return (ArrayList<Hit>) hitService.findByUser(userService.findByUsername(username));
    }

    public ArrayList<User> getUsers() {
        return userService.findAllUsers();
    }

    public boolean isRegistered(String username, String password) {
        User user = userService.findByUsername(username);
        if (user != null) return user.getPassword().equals(password);
        return false;
    }
}
