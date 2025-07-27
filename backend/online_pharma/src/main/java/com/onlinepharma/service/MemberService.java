package com.onlinepharma.service;

import com.onlinepharma.dto.LoginResponseDTO;
import com.onlinepharma.dto.MemberLoginDTO;
import com.onlinepharma.dto.MemberRequestDTO;
import com.onlinepharma.model.Member;

public interface MemberService {
    Member registerMember(MemberRequestDTO dto);
    boolean approveMember(int id);

    LoginResponseDTO loginMember(MemberLoginDTO dto);

    
}
