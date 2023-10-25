package com.Backend.services;

import com.Backend.entities.Usuario;
import com.Backend.repositories.UsuarioRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;


@SpringBootTest
class UsuarioServiceImplTest {
    @MockBean
    private UsuarioRepository usuarioRepository;

    @Autowired
    private UsuarioServiceImpl usuarioService;

    @Test
    void testSearchString() throws Exception{
        Usuario u = new Usuario();
        u.setUsername("admin");
        u.setPassword("admin");
        u.setActivo(true);

        List<Usuario> listaEnviada = new ArrayList<>();
        listaEnviada.add(u);

        when(usuarioRepository.search("admin")).thenReturn((Usuario) listaEnviada);
        assertEquals(listaEnviada, usuarioService.search("admin"));
    }



}