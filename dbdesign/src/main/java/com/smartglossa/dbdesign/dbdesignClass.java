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

	public dbdesignClass() throws ClassNotFoundException, SQLException {
		openConnection();

	}

	private void openConnection() {
		// TODO Auto-generated method stub
		
	}

	public void addDB(int Id, String type, int size, String defel, String keyword)
			throws SQLException, ClassNotFoundException {
		JSONObject obj = new JSONObject();

		String query = "insert into design(id,type,size,defel,keyword) values(" + Id + ",'" + type + "'," + size + ",'"
				+ defel + "'," + keyword + "')";

	}

}
