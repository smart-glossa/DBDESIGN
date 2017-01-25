package user;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;


public class UserServlets extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public UserServlets() {
        super();
        
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		String operation=request.getParameter("operation");
	if(operation.equals("userAdd")){
		JSONObject obj = new JSONObject();
		String name=request.getParameter("name");
		String userName=request.getParameter("userName");
		String pass=request.getParameter("pass");
	
			try {
				userClass Add=new userClass();
				Add.userAdd(name,userName,pass);
				obj.put("status", 1);
			} catch (Exception e) {
				obj.put("status", 0);
				e.printStackTrace();
				obj.put("message", e.getMessage());
				
			}
		
	}

}
}
