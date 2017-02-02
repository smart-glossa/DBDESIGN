package com.smartglossa.protable;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.json.JSONArray;
import org.json.JSONObject;

import com.smartglossa.dbdesign.UserConstrant;

public class ProtableClass {

	Connection con = null;
	Statement sta = null;
	ResultSet res = null;
	public ProtableClass()throws Exception {
		openConnection();

	}

 	public void proAdd(String tableName,int projectId) throws SQLException {
 		try {
			String qry = "insert into protable(tableName,projectId)values('"
					+ tableName + "'," + projectId + ")";
			sta.execute(qry);
		} finally {
			closeConnection();
		}

	}
 	public JSONArray getall() throws SQLException, ClassNotFoundException {
        JSONArray result = new JSONArray();
        try {
            String query = "select * from protable";
            res = sta.executeQuery(query);
            while (res.next()) {
                JSONObject get = new JSONObject();
                get.put("tableId", res.getInt(1));
                get.put("tableName", res.getString(2));
                get.put("projectId", res.getInt(3));
               
               
                result.put(get);
            }
            return result;
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

