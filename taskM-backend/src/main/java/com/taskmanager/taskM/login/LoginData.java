package com.taskmanager.taskM.login;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="login_data")
public class LoginData {
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		private int id;
		
		private String name;
		private String pass;
		private String logintype;
		
		public LoginData() {}
		public LoginData(int id, String name, String pass,String logintype) {
			super();
			this.id = id;
			this.name = name;
			this.pass = pass;
			this.logintype=logintype;
		}
		
		public String getLogintype() {
			return logintype;
		}
		public void setLogintype(String logintype) {
			this.logintype = logintype;
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getPass() {
			return pass;
		}
		public void setPass(String pass) {
			this.pass = pass;
		}
			
		
		
}
