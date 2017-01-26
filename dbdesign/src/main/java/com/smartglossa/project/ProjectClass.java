package com.smartglossa.project;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.smartglossa.dbdesign.UserConstrant;

public class ProjectClass {

	Connection con = null;
	Statement sta = null;
	ResultSet res = null;


     public ProjectClass()throws Exception {
	openConnection();

}
 	public void proAdd(String proName, String description,String userName) throws SQLException {
 try{
 		String qry="insert into project(projectName, description,userName) values('" + proName + "','" + description + "','" + userName
					+ "')";
			sta.execute(qry);
 	} finally {
		closeConnection();
	}
 	}
 	
 	private void openConnection() throws SQLException, ClassNotFoundException {
		Class.forName("com.mysql.jdbc.Driver");
		con = DriverManager.getConnection("jdbc:mysql://" + UserConstrant.MYSQL_SERVER + "/" + UserConstrant.DATABASE_NAME,
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