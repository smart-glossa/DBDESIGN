package com.smartglossa.dbdesign;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.json.JSONArray;
import org.json.JSONObject;


public class UserClass {

	Connection conn = null;
	Statement stat = null;
	ResultSet rs = null;

	public UserClass() throws Exception {
		openConnection();

	}

	public void userAdd(String name, String userName, String pass) throws SQLException {
		try {
			String query = "insert into user(name,userName,pass) values('" + name + "','" + userName + "','" + pass
					+ "')";
			stat.execute(query);
		} finally {
			closeConnection();
		}
	}
		 public JSONArray getAll() throws SQLException, ClassNotFoundException {
		        JSONArray result = new JSONArray();
		        try {
		            String qry = "select * from user";
		            rs = stat.executeQuery(qry);
		            while (rs.next()) {
		                JSONObject get = new JSONObject();
		                get.put("name", rs.getString("name"));
		                get.put("userName", rs.getString("userName"));
		                get.put("pass", rs.getString("pass"));
		               
		                result.put(get);
		            }
		            return result;
		        } finally {
		            closeConnection();
		        }
		    }
	

	private void openConnection() throws SQLException, ClassNotFoundException {
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection("jdbc:mysql://" + UserConstrant.MYSQL_SERVER + "/" + UserConstrant.DATABASE_NAME,
				UserConstrant.USERNAME, UserConstrant.PASSWORD);
		stat = conn.createStatement();

	}

	private void closeConnection() throws SQLException {
		if (conn != null) {
			conn.close();

		}
		if (stat != null) {
			stat.close();
		}
		if (rs != null) {
			rs.close();
		}
	}

	
	
}