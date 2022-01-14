package controller.results;

public class HitChecker {
    public boolean isHit(double x, double y, double r) {
        return upRight(x, y, r) || downRight(x, y, r) || downLeft(x, y, r);
    }

    private boolean upRight(double x, double y, double r) {
        return ((y <= ((-1.0 / 2.0) * x) + (r / 2.0)) && (x >= 0 && y >= 0));
    }

    private boolean downRight(double x, double y, double r) {
        return ((x * x + y * y <= r * r) && (x >= 0 && y <= 0));
    }

    private boolean downLeft(double x, double y, double r) {
        return ((x >= -r && y >= -r) && (x <= 0 && y <= 0));
    }
}
