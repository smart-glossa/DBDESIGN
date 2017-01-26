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
 	 public JSONArray getall() throws SQLException, ClassNotFoundException {
         JSONArray result = new JSONArray();
         try {
             String query = "select * from project";
             res = sta.executeQuery(query);
             while (res.next()) {
                 JSONObject get = new JSONObject();
                 get.put("projectId", res.getInt(1));
                 get.put("proName", res.getString(2));
                 get.put("description", res.getString(3));
                 get.put("userName", res.getString(4));
                
                 result.put(get);
             }
             return result;
         } finally {
             closeConnection();
         }
     }
 	  public JSONObject getone(int projectId) throws SQLException, ClassNotFoundException {
 	        JSONObject one = new JSONObject();
 	        try {
 	            String query = "select * from project where projectId="+projectId;
 	            res = sta.executeQuery(query);
 	            if (res.next()) {
 	            	 one.put("proName", res.getString(2));
 	                 one.put("description", res.getString(3));
 	                 one.put("userName", res.getString(4));
 	                  
 	            }

 	        } finally {
 	            closeConnection();
 	        }
 	        return one;

 	    }
 	  
 	 public void deleteproject(int projectId) throws SQLException, ClassNotFoundException {
 	       JSONObject delete = new JSONObject();
 	        try {
 	            String query = "delete from project where projectId="+projectId;
 	            sta.execute(query);
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