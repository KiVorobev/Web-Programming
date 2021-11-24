package com.example.Web3.utils;

public class HitChecker {

    public boolean isHit(double x, double y, int r) {
        return upLeft(x, y, r) || downLeft(x, y, r) || upRight(x, y, r);
    }

    private boolean upLeft(double x, double y, int r) {
        return ((x >= -r && y <= r / 2.0) && (x <= 0 && y >= 0));
    }

    private boolean upRight(double x, double y, int r) {
        return ((y <= ((-1.0 / 2.0) * x) + (r / 2.0)) && (x >= 0 && y >= 0));
    }

    private boolean downLeft(double x, double y, int r) {
        return ((x * x + y * y <= r * r / 4.0) && (x <= 0 && y <= 0));
    }
}
