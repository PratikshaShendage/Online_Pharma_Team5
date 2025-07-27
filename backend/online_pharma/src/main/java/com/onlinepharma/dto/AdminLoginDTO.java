// File: com.onlinepharma.dto.AdminLoginDTO.java

package com.onlinepharma.dto;

public class AdminLoginDTO {
    private String email;
    private String password;

    // ✅ Required Getters
    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    // ✅ Setters
    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
