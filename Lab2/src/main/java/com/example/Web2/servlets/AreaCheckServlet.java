package com.example.Web2.servlets;

import com.example.Web2.results.Bean;
import com.example.Web2.results.Data;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Data data = new Data();

        try {
            int x = Integer.parseInt(request.getParameter("X"));
            double y = Double.parseDouble(request.getParameter("Y"));
            double r = Double.parseDouble(request.getParameter("R"));

            if (x < -3 || x > 5 || y <= -5 || y >= 3 || r <= 2 || r >= 5) {
                response.setStatus(422);
                return;
            }
            String currentTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss"));
            long start = System.nanoTime();
            Boolean result = isHit(x, y, r);
            long executionTime = (System.nanoTime() - start) / 1000;

            data.setX(x);
            data.setY(y);
            data.setR(r);
            data.setCurrentTime(currentTime);
            data.setExecutionTime(executionTime);
            data.setResult(result);

            Bean.getInstance().addData(data);

        } catch (NumberFormatException exception) {
            response.setStatus(422);
        }

        RequestDispatcher dispatcher = request.getRequestDispatcher("index.jsp");
        dispatcher.forward(request, response);
    }


    private boolean isHit(int x, double y, double r) {
        return upLeft(x, y, r) || downLeft(x, y, r) || downRight(x, y, r);
    }

    private boolean upLeft(int x, double y, double r) {
        return ((x >= -r / 2 && y <= r) && (x <= 0 && y >= 0));
    }

    private boolean downLeft(int x, double y, double r) {
        return ((y >= -1 / 2 * x - r / 2) && (x <= 0 && y <= 0));
    }

    private boolean downRight(int x, double y, double r) {
        return ((x * x + y * y <= r * r / 4) && (x >= 0 && y <= 0));
    }
}
