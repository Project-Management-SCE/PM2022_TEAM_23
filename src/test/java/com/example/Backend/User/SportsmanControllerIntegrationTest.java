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

import static org.hamcrest.Matchers.hasSize;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@WebMvcTest(SportsmanController.class)
@ComponentScan(basePackages = "com.example.Backend")

class SportsmanControllerIntegrationTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private SportsmanRepository sportsmanRepository;

    @Test
    void Test_getAllSportsman () throws Exception{
        Sportsman sportsman1 = new Sportsman("Shlomi15", "shlomi15@gmail.com", "shlomi123", "shlomi", "perry", 2001, 1, 1, 1.90F, 85F, "0501116677", "Semi-Pro", "Volleyball");
        Sportsman sportsman2 = new Sportsman("Ariel16", "shlomi15@gmail.com", "shlomi123", "shlomi", "perry", 2001, 1, 1, 1.90F, 85F, "0501116677", "Semi-Pro", "Volleyball");
        Sportsman sportsman3 = new Sportsman("Ron", "shlomi15@gmail.com", "shlomi123", "shlomi", "perry", 2001, 1, 1, 1.90F, 85F, "0501116677", "Semi-Pro", "Volleyball");

        ArrayList<Sportsman> sportsmen = new ArrayList<Sportsman>();
        sportsmen.add(sportsman1);
        sportsmen.add(sportsman2);
        sportsmen.add(sportsman3);

        when(sportsmanRepository.findAll()).thenReturn(sportsmen);
        mockMvc.perform(get("/sportsman/getSportsman"))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print())
                .andExpect(jsonPath("$", hasSize(3)))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].userName").value(sportsman1.getUserName()))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].userName").value(sportsman2.getUserName()))
                .andExpect(MockMvcResultMatchers.jsonPath("$[2].userName").value(sportsman3.getUserName()));







    }

}