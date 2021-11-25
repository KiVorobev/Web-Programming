package com.example.Web3.dao;

import com.example.Web3.entity.Result;
import com.example.Web3.utils.HibernateSessionFactoryUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class ResultDao {

    public void save(Result result) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction transaction = session.beginTransaction();
        session.save(result);
        transaction.commit();
        session.close();
    }

    public List<Result> findAll() {
        return (List<Result>) HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("From Result ").list();
    }

    public void deleteAll() {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction transaction = session.beginTransaction();
        session.createQuery("DELETE FROM Result").executeUpdate();
        transaction.commit();
        session.close();
    }
}
