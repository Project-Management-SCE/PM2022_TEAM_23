package com.example.Backend.User;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import java.util.ArrayList;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@WebMvcTest(AdminController.class)
@ComponentScan(basePackages = "com.example.Backend")
public class AdminControllerIntegrationTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AdminRepository adminRepository;

    @Test
    void getAllAdmins () throws Exception {
        Admin a1 = new Admin("eli9914","eli9914@gmail.com","1234","Eli", "Amuyev",1997,4,7,1.65F,65F, "0524696874");
        ArrayList<Admin> admins = new ArrayList<Admin>();
        admins.add(a1);
        when(adminRepository.findAll()).thenReturn(admins);
        mockMvc.perform(get("/admin/getAdmin"))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].userName").value(a1.getUserName()))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1]").doesNotExist());
    }
}
