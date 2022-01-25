package model.dao;

import model.entity.Hit;
import model.entity.User;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;
import util.HibernateSessionFactoryUtil;

import javax.ejb.Singleton;
import javax.ejb.TransactionManagement;
import javax.persistence.Query;
import java.util.List;

@Singleton
@TransactionManagement(javax.ejb.TransactionManagementType.BEAN)
public class HitDao {
    public void save(Hit hit) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction transaction = session.beginTransaction();
        session.save(hit);
        transaction.commit();
        session.close();
    }

    public List<Hit> findAll() {
        return (List<Hit>) HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("From Hit ").list();
    }

    public List<Hit> findByUser(User user) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Query query = session.createQuery("SELECT p from Hit p where p.user = :user", Hit.class)
                .setParameter("user", user);
        return query.getResultList();
    }

    public void deleteAll() {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction transaction = session.beginTransaction();
        session.createQuery("DELETE FROM Hit").executeUpdate();
        transaction.commit();
        session.close();
    }
}