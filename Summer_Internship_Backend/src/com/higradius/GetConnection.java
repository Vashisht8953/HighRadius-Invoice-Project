package com.higradius;

import java.sql.Connection;
import java.sql.DriverManager;

public class GetConnection {
	// JDBC Driver Name and Database URL
	static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
	static final String DB_URL = "jdbc:mysql://localhost:3306/invoices";
	
	// Database credentials
	static final String USER = "root";
	static final String PASS = "root";
	
	public static Connection connectToDB() throws Exception {
		// Register JDBC Driver
		Class.forName(JDBC_DRIVER);
		
		// Open a connection
		Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
		
		return conn;
	}
}
