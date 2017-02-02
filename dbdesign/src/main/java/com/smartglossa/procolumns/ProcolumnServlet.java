package com.smartglossa.procolumns;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

import com.smartglossa.protable.ProtableClass;



public class ProcolumnServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String operation = request.getParameter("operation");
		if (operation.equals("addColumn")) {
			JSONObject obj = new JSONObject();
			int tableId = Integer.parseInt(request.getParameter("tableId"));
			String columnName = request.getParameter("columnName");
			String dataType = request.getParameter("dataType");
			String defaults = request.getParameter("defaults");
			boolean isPrimaryKey = Boolean.parseBoolean(request.getParameter("isPrimaryKey"));
			boolean allowNull = Boolean.parseBoolean(request.getParameter("allowNull"));
			boolean isUnique = Boolean.parseBoolean(request.getParameter("isUnique"));
			boolean isAutoIncrement = Boolean.parseBoolean(request.getParameter("isAutoIncrement"));
			boolean isForeignKey = Boolean.parseBoolean(request.getParameter("isForeignKey"));
			try {
				ProcolumnClass Procol = new ProcolumnClass();
				Procol.ProcolAdd(tableId, columnName, dataType, defaults, isPrimaryKey, allowNull, isUnique, isAutoIncrement, isForeignKey);
				obj.put("status", 1);
			} catch (Exception e) {
				obj.put("status", 0);
				e.printStackTrace();
			}
			response.getWriter().println(obj);
		}
		else if (operation.equals("getAll")) {
	        JSONArray result = new JSONArray();
	        try {
	        	ProcolumnClass procolget = new ProcolumnClass();
	            result = procolget.getall();
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
