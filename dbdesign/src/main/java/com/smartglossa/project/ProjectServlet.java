package com.smartglossa.project;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;



public class ProjectServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doPost(request, response);
		}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		String operation = request.getParameter("operation");
		if (operation.equals("addProject")) {
			JSONObject obj = new JSONObject();
			 String proName = request.getParameter("proName");
			String description= request.getParameter("description");
			try {
				ProjectClass Project = new ProjectClass();
				Project.proAdd(proName, description);
				obj.put("status", 1);
			} catch (Exception e) {
				obj.put("status",0);
				e.printStackTrace();
			}
		response.getWriter().println(obj);	
	}else if (operation.equals("getAll")) {
        JSONArray result = new JSONArray();
        try {
            ProjectClass get = new ProjectClass();
            result = get.getAll();
        } catch (Exception e) {
            JSONObject get = new JSONObject();
            get.put("status", 0);
            result.put(get);
            e.printStackTrace();
        }
        response.getWriter().println(result);

}
	
}
}