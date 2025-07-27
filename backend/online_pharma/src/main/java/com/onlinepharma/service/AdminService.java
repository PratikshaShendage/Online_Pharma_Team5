// File: com.onlinepharma.service.AdminService.java

package com.onlinepharma.service;

import com.onlinepharma.dto.AdminLoginDTO;
import com.onlinepharma.dto.LoginResponseDTO;

public interface AdminService {
    LoginResponseDTO loginAdmin(AdminLoginDTO dto);
}
