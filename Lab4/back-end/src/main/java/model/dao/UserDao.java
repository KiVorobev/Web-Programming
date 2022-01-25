package model.dao;

import model.entity.User;
import org.hibernate.Session;
import org.hibernate.Transaction;
import util.HibernateSessionFactoryUtil;

import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.persistence.Query;
import java.util.List;

@Stateless
@TransactionManagement(javax.ejb.TransactionManagementType.BEAN)
public class UserDao {
    public void save(User user) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction transaction = session.beginTransaction();
        session.save(user);
        transaction.commit();
        session.close();
    }

    public User findByUsername(String username) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Query query = session.createQuery("from User where username = :username");
        query.setParameter("username", username);
        User resultUser;
        try {
            resultUser = (User) query.getSingleResult();
        } catch (Exception exception) {
            resultUser = null;
        }
        return resultUser;
    }

    public List<User> findAll() {
        return (List<User>) HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("From User ").list();
    }

    public void deleteAll() {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction transaction = session.beginTransaction();
        session.createQuery("DELETE FROM User ").executeUpdate();
        transaction.commit();
        session.close();
    }
}