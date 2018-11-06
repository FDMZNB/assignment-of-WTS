package controller;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.*;
import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.*;
import javax.servlet.http.*;

import java.sql.*;
import java.sql.ResultSet;

@WebServlet(name = "login", urlPatterns = {"/login"})
public class login extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            String _username = request.getParameter("username");
            String _password = request.getParameter("password");
            int flag = 0;
            HttpSession session = request.getSession(true);
            bean bea = new bean();
            session.setAttribute("bea", bea);
            if (_username != null && _password != null) {
                String connectionURL = "jdbc:derby://localhost:1527/dbms";
                //ConnectionURL, username and password should be specified in getConnection() 
                try {
                    Connection conn = DriverManager.getConnection(connectionURL, "fdmznb", "fengdingming1");
                    System.out.println("Connect successfully!");
                    bea.setName(_username);
                    String sql = "select * from fdmznb.users";
                    Statement st = conn.createStatement();
                    ResultSet rs = null;
                    rs = st.executeQuery(sql);
                    while (rs.next()) {
                        System.out.println(rs.getString("id") + "/t" + rs.getString("password"));
                        if (rs.getString("id").equals(_username) && rs.getString("password").equals(_password)) {
                            RequestDispatcher rd = request.getRequestDispatcher("welcome.jsp");
                            rd.forward(request, response);
                            flag = 1;
                        }
                    }
                    if (flag != 1) {
                        out.print("invalid user or password");
                        RequestDispatcher rd = request.getRequestDispatcher("newjsp.jsp");
                        rd.include(request, response);
                    }
                    flag = 0;
                    rs.close();
                    st.close();
                    conn.close();
                } catch (SQLException ex) {
                    System.out.println("Connect failed ! ");
                }

            } else {
                out.println("Empty Username or password");
            }
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doGet(request, response);
    }

}
