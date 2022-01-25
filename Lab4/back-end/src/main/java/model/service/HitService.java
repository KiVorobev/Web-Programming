package model.service;

import model.dao.HitDao;
import model.entity.Hit;
import model.entity.User;

import javax.ejb.EJB;
import javax.ejb.Singleton;
import java.util.ArrayList;
import java.util.List;

@Singleton
public class HitService {

    @EJB
    private HitDao hitDao;

    public void saveHit(Hit hit) throws Exception {
        hitDao.save(hit);
    }

    public List<Hit> findByUser(User user) {
        List<Hit> list = hitDao.findByUser(user);
        if (list != null) return hitDao.findByUser(user);
        return new ArrayList<>();
    }

    public ArrayList<Hit> findAllHits() {
        return (ArrayList<Hit>) hitDao.findAll();
    }

}
