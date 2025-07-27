// File: com.onlinepharma.repository.AdminRepository.java

package com.onlinepharma.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.onlinepharma.model.Admin;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
    Optional<Admin> findByEmail(String email);
}
