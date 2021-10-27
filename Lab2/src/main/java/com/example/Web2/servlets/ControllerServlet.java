package com.example.Web2.servlets;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

            String x = request.getParameter("X");
            String y = request.getParameter("Y");
            String r = request.getParameter("R");

                if ((x.trim() != null && y.trim() != null && r.trim() != null) && (x.trim() != "" && y.trim() != "" && r.trim() != "")) {
                    getServletContext().getNamedDispatcher("AreaCheckServlet").forward(request, response);
                } else {
                    response.setStatus(422);
                    return;
                }
    }
}
