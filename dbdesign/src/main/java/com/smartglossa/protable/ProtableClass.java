package com.smartglossa.protable;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class ProtableClass {

	Connection con = null;
	Statement sta = null;
	ResultSet res = null;
	public ProtableClass()throws Exception {
		openConnection();

	}

 	public void proAdd(String tableName,int projectId) throws SQLException {
 		
}
}
