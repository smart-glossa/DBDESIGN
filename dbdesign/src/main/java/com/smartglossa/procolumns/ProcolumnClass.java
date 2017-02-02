package com.smartglossa.procolumns;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.json.JSONArray;
import org.json.JSONObject;

import com.smartglossa.dbdesign.UserConstrant;

       
	public class ProcolumnClass {

		Connection con = null;
		Statement sta = null;
		ResultSet res = null;
		public ProcolumnClass()throws Exception {
			openConnection();

		}
	 	public void ProcolAdd(int tableId,String columnName,String dataType,String defaults,boolean isPrimaryKey,boolean allowNull,boolean isUnique,boolean isAutoIncrement,boolean isForeignKey) throws SQLException {
	 		try {
				String qry = "insert into procolumn(tableId,columnName,dataType,defaults,isPrimaryKey,allowNull,isUnique,isautoIncrement,isForeignKey)values("
						+ tableId + ",'"+ columnName + "','"+ dataType +"','"+ defaults +"',"+ isPrimaryKey +","+ allowNull +","+ isUnique +","+ isAutoIncrement +","+ isForeignKey +")";
				sta.execute(qry);
			} finally {
				closeConnection();
			}

		}
	 	public JSONArray getall() throws SQLException, ClassNotFoundException {
	        JSONArray result = new JSONArray();
	        try {
	            String query = "select * from procolumn";
	            res = sta.executeQuery(query);
	            while (res.next()) {
	                JSONObject get = new JSONObject();
	                get.put("columnId", res.getInt("columnId"));
	                get.put("tableId", res.getInt("tableId"));
	                get.put("columnName", res.getString("columnName"));
	                get.put("dataType", res.getString("dataType"));
	                get.put("defaults", res.getString("defaults"));
	                get.put("isPrimaryKey", res.getBoolean("isPrimaryKey"));
	                get.put("allowNull", res.getBoolean("allowNull"));
	                get.put("isautoIncrement", res.getBoolean("isautoIncrement"));
	                get.put("isForeignKey", res.getBoolean("isForeignKey"));
	                result.put(get);
	            }
	            
	        } finally {
	            closeConnection();
	        }
	        return result;
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
