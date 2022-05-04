package com.example.Backend;

import com.example.Backend.Sports.Sports;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.*;

@RunWith(MockitoJUnitRunner.class)

public class SportsTest {
    @Mock
    Sports sports;


    @Before
    public void init() {
        MockitoAnnotations.openMocks(this);
    }


    @Test
    //@org.testng.annotations.Test
    public void testGetters () {
        sports = new Sports("Soccer", "des", "Tomer");
        assertEquals("Soccer", sports.getName());
        assertEquals("des",sports.getDescription());
        assertEquals("Tomer",sports.getCoach());
        assertNotEquals("football",sports.getName());
        assertNotEquals("Notgood",sports.getDescription());
        assertNotEquals("Eli",sports.getCoach());

    }

    @Test
    //@org.testng.annotations.Test
    public void testSetters() {

        sports = new Sports("Soccer", "des", "Tomer");
        sports.setName("football");
        assertTrue(sports.getName() == "football");
        sports.setDescription("good");
        assertTrue(sports.getDescription() == "good");
        sports.setCoach("matan");
        assertTrue(sports.getCoach() == "matan");
        sports.setName("football");
        assertFalse(sports.getName() == "tennis");
        sports.setDescription("good");
        assertFalse(sports.getDescription() == "bad");
        sports.setCoach("matan");
        assertFalse(sports.getCoach() == "tony");
    }
}

