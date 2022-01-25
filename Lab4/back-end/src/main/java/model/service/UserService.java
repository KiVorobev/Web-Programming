package model.service;

import model.dao.UserDao;
import model.entity.User;

import javax.ejb.EJB;
import javax.ejb.Singleton;
import javax.inject.Inject;
import java.util.ArrayList;

@Singleton
public class UserService {

    @EJB
    private UserDao userDao = new UserDao();

    public void saveUser(User user) throws Exception {
        userDao.save(user);
    }

    public User findByUsername(String username) throws IndexOutOfBoundsException {
        return userDao.findByUsername(username);
    }

    public ArrayList<User> findAllUsers() {
        return (ArrayList<User>) userDao.findAll();
    }

}
