package user;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


public class userClass {

	private static final String MYSQL_DRIVER = null;
	Connection conn = null;
	Statement stat = null;
	ResultSet rs = null;
		

public userClass()throws Exception{
	openConnection();
		
}
public void userAdd(String name,String userName,String pass)throws SQLException{
	try {
		String query="insert into user(name,userName,pass) values('"+name+"','"+userName+"','"+pass+"')";
		stat.execute(query);
	} finally {
		closeConnection();
	}
}


private void openConnection() throws Exception {
	Class.forName(UserConstrant.MYSQL_DRIVER);
	 String URL = "jdbc:mysql://" + UserConstrant.MYSQL_SERVER + "/" +
	 UserConstrant.DATABASE_NAME;

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

