package com.Backend.repositories;

import com.Backend.entities.Usuario;
import jakarta.persistence.EntityManager;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


@DataJpaTest
class UsuarioRepositoryTest {


    @Autowired
    private EntityManager entityManager;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Test
    void testSearchString() throws Exception {
        Usuario u = new Usuario();
        u.setUsername("usuariofalso@correo.com");
        u.setPassword("Contrasena@123");
        u.setActivo(Boolean.TRUE);

        List<Usuario> listaEnviada = new ArrayList<Usuario>();
        listaEnviada.add(u);

        entityManager.persist(u);
        entityManager.flush();

        assertEquals(listaEnviada, usuarioRepository.search("usuariofalso@correo.com"));


    }
}