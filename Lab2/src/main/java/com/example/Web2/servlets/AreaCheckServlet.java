package com.example.Web2.servlets;

import com.example.Web2.results.Bean;
import com.example.Web2.results.Data;
import org.decimal4j.util.DoubleRounder;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Bean bean = new Bean();

        try {
            double x = Double.parseDouble(request.getParameter("X"));
            double y = Double.parseDouble(request.getParameter("Y"));
            double r = Double.parseDouble(request.getParameter("R"));

            if (x < -3 || x > 5 || y <= -5 || y >= 3 || r <= 2 || r >= 5) {
                response.setStatus(422);
                return;
            }

            String currentTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss"));
            long start = System.nanoTime();
            boolean result = isHit(x, y, r);
            long executionTime = (System.nanoTime() - start) / 1000;

            bean.setX(DoubleRounder.round(x,6));
            bean.setY(DoubleRounder.round(y,6));
            bean.setR(DoubleRounder.round(r,6));
            bean.setCurrentTime(currentTime);
            bean.setExecutionTime(executionTime);
            bean.setResult(result);

            Data.getInstance().addBean(bean);

        } catch (NumberFormatException exception) {
            response.setStatus(422);
        }

        response.setHeader("Cache-Control", "no-cache");
        response.setContentType("application/json; charset=UTF-8");
        response.getWriter().println(bean.jsonBean()); }


    private boolean isHit(double x, double y, double r) {
        return upLeft(x, y, r) || downLeft(x, y, r) || downRight(x, y, r);
    }

    private boolean upLeft(double x, double y, double r) {
        return ((x >= -r / 2.0 && y <= r) && (x <= 0 && y >= 0));
    }

    private boolean downLeft(double x, double y, double r) {
        return ((y >= ((-1.0 / 2.0) * x) - (r / 2.0)) && (x <= 0 && y <= 0));
    }

    private boolean downRight(double x, double y, double r) {
        return ((x * x + y * y <= r * r / 4.0) && (x >= 0 && y <= 0));
    }
}
