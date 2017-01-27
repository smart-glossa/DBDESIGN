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
			String userName =request.getParameter("userName");
			
			try {
				ProjectClass Project = new ProjectClass();
				Project.proAdd(proName,description,userName);
				obj.put("status", 1);
			} catch (Exception e) {
				obj.put("status",0);
				e.printStackTrace();
			}
		response.getWriter().println(obj);	
	}else if (operation.equals("getall")) {
        JSONArray result = new JSONArray();
        try {
            ProjectClass get = new ProjectClass();
            result = get.getall();
        } catch (Exception e) {
            JSONObject get = new JSONObject();
            get.put("status", 0);
            result.put(get);
            e.printStackTrace();
        }
        response.getWriter().println(result);

}else if (operation.equals("getone")) {
    int projectId = Integer.parseInt(request.getParameter("projectId"));
    JSONObject one = new JSONObject();
    try {
        ProjectClass get = new ProjectClass();
        one = get.getone(projectId);
    } catch (Exception e) {
        e.printStackTrace();
    }
    response.getWriter().println(one);
} else if (operation.equals("delete")) {
    int projectId = Integer.parseInt(request.getParameter("projectId"));
    JSONObject delete = new JSONObject();
    try {
    	 ProjectClass get = new ProjectClass();
        get.deleteproject(projectId);
        delete.put("status",1);      
    } catch (Exception e) {
        delete.put("status",0);
        e.printStackTrace();
    }
    response.getWriter().println(delete);
    

	}
}
}
