package com.smartglossa.project;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.json.JSONArray;
import org.json.JSONObject;

import com.smartglossa.dbdesign.UserConstrant;

public class ProjectClass {

	Connection con = null;
	Statement sta = null;
	ResultSet res = null;

	public ProjectClass() throws Exception {
		openConnection();

	}

	public void proAdd(String proName, String description) throws SQLException {
		try {
			String qry = "insert into project(projectName, description) values('" + proName + "','"
					+ description + "')";
			sta.execute(qry);
		} finally {
			closeConnection();
		}
	}

	public JSONArray getAll() throws SQLException, ClassNotFoundException {
		JSONArray result = new JSONArray();
		try {
			String query = "select * from project";
			res = sta.executeQuery(query);
			while (res.next()) {
				JSONObject get = new JSONObject();
				get.put("projectId", res.getInt("projectId"));
				get.put("proName", res.getString("projectName"));
				get.put("des", res.getString("description"));
				result.put(get);
			}
			return result;
		} finally {
			closeConnection();
		}
	}

	public JSONObject getOne(int projectId) throws SQLException, ClassNotFoundException {
		JSONObject one = new JSONObject();
		try {
			String query = "select * from project where projectId=" + projectId;
			res = sta.executeQuery(query);
			if (res.next()) {
				one.put("proName", res.getString(1));
				one.put("des", res.getString(2));
			}

		} finally {
			closeConnection();
		}
		return one;

	}

	public JSONObject getproject(String uName) throws SQLException {
		JSONObject obj = new JSONObject();
		try {
			String query = "Select * from project where userName='" + uName + "'";
			res = sta.executeQuery(query);
			if (res.next()) {
				obj.put("projectId", res.getInt("projectId"));
				obj.put("proName", res.getString("projectName"));
				obj.put("des", res.getString("description"));
			}
			return obj;
		} finally {
			closeConnection();
		}
	}

	public void delete(int projectId) throws SQLException, ClassNotFoundException {
		JSONObject obj= new JSONObject();
		try {
			String query = "delete from project where projectId=" + projectId;
			sta.execute(query);
		} finally {
			closeConnection();
		}
	}

	private void openConnection() throws SQLException, ClassNotFoundException {
		Class.forName("com.mysql.jdbc.Driver");
		con = DriverManager.getConnection(
				"jdbc:mysql://" + UserConstrant.MYSQL_SERVER + "/" + UserConstrant.DATABASE_NAME,
				UserConstrant.USERNAME, UserConstrant.PASSWORD);
		sta = con.createStatement();

	}

	private void closeConnection() throws SQLException {
		if (con != null) {
			con.close();

		}
		if (sta != null) {
			sta.close();
		}
		if (res != null) {
			res.close();
		}
	}

}