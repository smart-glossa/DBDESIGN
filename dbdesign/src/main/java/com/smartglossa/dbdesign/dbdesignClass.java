package com.smartglossa.dbdesign;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.json.JSONObject;

public class dbdesignClass {
	 Connection conn = null;
	    Statement stmt = null;
	    ResultSet rs = null;
	    public dbdesignClass()throws ClassNotFoundException, SQLException {
	        openConnection();

	    }
		public void adddealer(int dealerId, String name, String address, String phoneNumber, String TINNumber)
	            throws SQLException, ClassNotFoundException {
	        JSONObject obj = new JSONObject();
		
		}


}

