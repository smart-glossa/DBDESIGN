package com.smartglossa.dbdesign;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;


public class UserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String operation = request.getParameter("operation");
		if (operation.equals("userAdd")) {
			JSONObject obj = new JSONObject();
			String name = request.getParameter("name");
			String userName = request.getParameter("userName");
			String pass = request.getParameter("pass");

			try {
			UserClass Add = new UserClass();
				Add.userAdd(name, userName, pass);
				obj.put("status", 1);
			} catch (Exception e) {
				obj.put("status", 0);
				e.printStackTrace();
				obj.put("message", e.getMessage());
			}
			response.getWriter().println(obj);
		} else if (operation.equals("getAll")) {
			JSONArray result = new JSONArray();
			try {
				UserClass user = new UserClass();
				result = user.getAll();
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