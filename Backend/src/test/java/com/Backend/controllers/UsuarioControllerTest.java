package com.Backend.controllers;

import com.Backend.entities.Usuario;
import com.Backend.services.UsuarioServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;

import java.util.ArrayList;
import java.util.List;

import static net.bytebuddy.matcher.ElementMatchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UsuarioController.class)
class UsuarioControllerTest {

    @MockBean
    private UsuarioServiceImpl usuarioService;

    @Autowired
    private MockMvc mockMvc;

    @Test
    void testSearchString() throws Exception {

        Usuario u = new Usuario();
        u.setUsername("usuariofalso@correo.com");
        u.setPassword("Contrasena@123");
        u.setActivo(true);

        List<Usuario> listaEnviada = new ArrayList<>();
        listaEnviada.add(u);

        when(usuarioService.search("usuariofalso@correo.com")).thenReturn(listaEnviada);

        mockMvc.perform(get("/api/v1/usuarios/search")
                        .param("filtro", "usuariofalso@correo.com")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect((ResultMatcher) jsonPath("$[0].username", is("usuariofalso@correo.com")))
                .andExpect((ResultMatcher) jsonPath("$[0].password", is("Contrasena@123")))
                .andExpect((ResultMatcher) jsonPath("$[0].activo", is(true)));



    }
}