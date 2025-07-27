package com.onlinepharma.dto;

import jakarta.validation.constraints.*;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDate;

public class MemberRequestDTO {

    @NotBlank
    private String name;
    
    @NotBlank
    private String password;

    @NotNull
    private LocalDate dob;

    @Email
    @NotBlank
    private String email;

    @NotBlank
    private String mobile;

    @NotBlank
    private String address;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	 public String getPassword() {
	        return password;
	    }
	    public void setPassword(String password) {
	        this.password = password;
	    }

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

    // Getters and Setters
}
