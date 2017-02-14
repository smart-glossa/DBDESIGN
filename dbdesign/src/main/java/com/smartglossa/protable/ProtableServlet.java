package com.smartglossa.protable;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

public class ProtableServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String operation = request.getParameter("operation");
		if (operation.equals("addTable")) {
			JSONObject obj = new JSONObject();
			String tableName = request.getParameter("tableName");
			int projectId = Integer.parseInt(request.getParameter("projectId"));

			try {
				ProtableClass Project = new ProtableClass();
				Project.proAdd(tableName, projectId);
				obj.put("status", 1);
			} catch (Exception e) {
				obj.put("status", 0);
				e.printStackTrace();
			}
			response.getWriter().println(obj);
		} else if (operation.equals("getAllTab")) {
			JSONArray result = new JSONArray();
			try {
				ProtableClass get = new ProtableClass();
				result = get.getall();
			} catch (Exception e) {
				JSONObject get = new JSONObject();
				get.put("status", 0);
				result.put(get);
				e.printStackTrace();
			}
			response.getWriter().println(result);

		} else if (operation.equals("gets")) {
			JSONObject result = new JSONObject();
			int tableId = Integer.parseInt(request.getParameter("tableId"));
			try {
				ProtableClass jj = new ProtableClass();
				result = jj.gets(tableId);
			}

			catch (Exception e) {
				result.put("status", 0);
				e.printStackTrace();

			}
			response.getWriter().print(result);
		} else if (operation.equals("getId")) {
			JSONArray result = new JSONArray();
			int projectId = Integer.parseInt(request.getParameter("projectId"));
			try {
				ProtableClass jj = new ProtableClass();
				result = jj.getId(projectId);
			}
			catch (Exception e) {
				JSONObject obj = new JSONObject();
				obj.put("status", 0);
				result.put(obj);
				e.printStackTrace();
			}
			response.getWriter().print(result);
		}
	}
}
