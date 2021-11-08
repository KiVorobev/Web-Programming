package com.example.Web2.servlets;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;

public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

            String x = request.getParameter("X");
            String y = request.getParameter("Y");
            String r = request.getParameter("R");

                if ((x != null && y != null && r != null) && (!x.trim().equals("") && !y.trim().equals("") && !r.trim().equals(""))) {
                    request.getRequestDispatcher("./check").forward(request, response);
                }
                else {
                    response.setStatus(422);
                    return;
                }
    }
}
