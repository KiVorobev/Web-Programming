package model.entity;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "hits")
public class Hit {

    @Basic
    @Column(name = "x", nullable = false, precision = 0)
    private double x;

    @Basic
    @Column(name = "y", nullable = false, precision = 0)
    private double y;

    @Basic
    @Column(name = "r", nullable = false, precision = 0)
    private double r;

    @Basic
    @Column(name = "result", nullable = false)
    private boolean result;

    @Id
    @Column(name = "date", nullable = false)
    private Timestamp date;

    @ManyToOne(cascade = CascadeType.MERGE)
    private User user;

    public User getUser_id() {
        return user;
    }

    public void setUser_id(User userId) {
        this.user = userId;
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public boolean isResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Hit hit = (Hit) o;

        if (Double.compare(hit.x, x) != 0) return false;
        if (Double.compare(hit.y, y) != 0) return false;
        if (Double.compare(hit.r, r) != 0) return false;
        if (result != hit.result) return false;
        if (date != null ? !date.equals(hit.date) : hit.date != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result1;
        long temp;
        temp = Double.doubleToLongBits(x);
        result1 = (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(y);
        result1 = 31 * result1 + (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(r);
        result1 = 31 * result1 + (int) (temp ^ (temp >>> 32));
        result1 = 31 * result1 + (result ? 1 : 0);
        result1 = 31 * result1 + (date != null ? date.hashCode() : 0);
        return result1;
    }

    @Override
    public String toString() {
        return "Hit{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", result=" + result +
                ", date=" + date +
                ", user=" + user +
                '}';
    }
}