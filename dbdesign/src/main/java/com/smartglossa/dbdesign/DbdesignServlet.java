package com.smartglossa.dbdesign;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class DbdesignServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public DbdesignServlet() {
        super();
       
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doPost(request, response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String operation=request.getParameter("operation");
		int Id=Integer.parseInt(request.getParameter("Id"));
		String type=request.getParameter("type");
		int  size=Integer.parseInt(request.getParameter("size"));
		String defl=request.getParameter("defel");
	String key=request.getParameter("key");
	}

}
