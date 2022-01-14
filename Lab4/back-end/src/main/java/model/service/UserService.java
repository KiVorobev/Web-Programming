package model.service;

import model.dao.UserDao;
import model.entity.User;

import java.util.ArrayList;
import java.util.List;

public class UserService {

    private final UserDao usersDao = new UserDao();

    public UserService() {
    }

    public void addUser(User user) {
        usersDao.save(user);
    }

    public List<User> findAllResults() {
        List<User> users = new ArrayList<User>(usersDao.findAll());
        return users;
    }

    public void deleteAll() {
        usersDao.deleteAll();
    }
}
