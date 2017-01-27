package com.smartglossa.protable;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class ProtableServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		String operation=request.getParameter("operation");
		if(operation.equals("protableAdd")){
		String tableName=request.getParameter("tableName");
		int projectId=Integer.parseInt(request.getParameter("projectId"));
		
	}

}
}
