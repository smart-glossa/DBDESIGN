package com.smartglossa.dbdesign;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.undo.CannotRedoException;

import org.json.JSONObject;


public class DbdesignServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public DbdesignServlet() {
		super();

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	    JSONObject objec = new JSONObject();
		String operation = request.getParameter("operation");
		int Id = Integer.parseInt(request.getParameter("Id"));
		String type = request.getParameter("type");
		int size = Integer.parseInt(request.getParameter("size"));
		String defel = request.getParameter("defel");
		String keyword = request.getParameter("keyword");

         
        	 
			try {
				dbdesignClass design = new dbdesignClass();
				design.addDB(Id,type,size,defel,keyword);
				  objec.put("status1", "1");
				
			} catch (Exception e) {
				e.printStackTrace();
			
			} 
			
			
	

	}

}
