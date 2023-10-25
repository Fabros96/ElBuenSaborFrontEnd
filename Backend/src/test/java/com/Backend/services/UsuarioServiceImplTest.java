package com.Backend.services;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.Backend.entities.Usuario;
import com.Backend.repositories.UsuarioRepository;
import com.Backend.services.UsuarioServiceImpl;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;


@SpringBootTest
class PersonaServiceImplTest {

    @MockBean
    private UsuarioRepository usuarioRepository;

    @Autowired
    private UsuarioServiceImpl usuarioService;

    @Test
    void testSearchString() throws Exception {
        Usuario us = new Usuario();
        us.setUsername("admin");
        us.setPassword("admin");
        us.setActivo(true);

        List<Usuario> listaEnviada = new ArrayList<Usuario>();
        listaEnviada.add(us);

        when(usuarioRepository.searchNativo("admin")).thenReturn((List<Usuario>) listaEnviada);

        assertEquals(listaEnviada, usuarioService.search("admin"));

    }


}