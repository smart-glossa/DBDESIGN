package com.smartglossa.dbdesign;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

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

	public JSONObject login(String uname, String pass) throws SQLException {
		JSONObject obj = new JSONObject();
		try {
			String query = "Select * from user where userName='" + uname + "'AND pass='" + pass + "'";
			rs = stat.executeQuery(query);
			if (rs.next()) {
				obj.put("user", rs.getString("userName"));
				obj.put("status", 1);
			}
			return obj;
		} finally {
			closeConnection();
		}
	}

	public JSONObject getName(String uname) throws SQLException {
		JSONObject obj = new JSONObject();
		try {
			String query = "Select name from user where userName='" + uname + "''";
			rs = stat.executeQuery(query);
			if (rs.next()) {
				obj.put("name", rs.getString("name"));
				obj.put("status", 1);
			}
			return obj;
		} finally {
			closeConnection();
		}
	}

	private void openConnection() throws SQLException, ClassNotFoundException {
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(
				"jdbc:mysql://" + UserConstrant.MYSQL_SERVER + "/" + UserConstrant.DATABASE_NAME,
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