package com.Backend.repositories;

import com.Backend.entities.Usuario;
import com.Backend.enums.Rol;
import org.hibernate.mapping.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;


@Repository
public interface UsuarioRepository extends BaseRepository<Usuario, Long> {
    @Query(value = "SELECT u FROM Usuario u WHERE u.username LIKE %:filtro%")
    Usuario search(@Param("filtro") String filtro);

    @Query(value = "SELECT u FROM Usuario u WHERE u.username LIKE %:filtro%")
    Page<Usuario> search(@Param("filtro") String filtro, Pageable pageable);


    @Query(
            value = "SELECT * FROM usuario WHERE usuario.username = :filtro AND usuario.activo = :activo",
            nativeQuery = true
    )
    Usuario searchNativo(@Param("filtro") String filtro);

    //ALTA USUARIO
    @Query(value = "INSERT INTO Usuario (ACTIVO, FECHA_ALTA, PASSWORD, ROL, USERNAME) VALUES (:Activo, :FAlta, :Password, :Rol, :Username)")
    Usuario darAltaForm(@Param("Activo") Boolean True, @Param("FAlta") Date date, @Param("Password") String password, @Param("Rol") Rol rol, @Param("Username") String filtro);

    @Query(value = "INSERT INTO Usuario (ACTIVO, FECHA_ALTA, PASSWORD, ROL, USERNAME) VALUES (:Activo, :FAlta, :Password, :Rol, :Username)")
    Usuario darAltaGoogle(@Param("Activo") Boolean True, @Param("FAlta") Date date, @Param("Password") String password, @Param("Rol") Rol rol, @Param("Username") String filtro);


    //LOGIN USUARIO
    @Query(value = "SELECT * FROM USUARIO WHERE USERNAME = :Username AND PASSWORD = :Password AND ACTIVO = :Activo ")
    Usuario LogInForm(@Param("Username") String filtro, @Param("Password") String password, @Param("Activo") Boolean bool);


    @Query(value = "SELECT * FROM USUARIO WHERE USERNAME = :Username  AND PASSWORD = :Password AND ACTIVO = :Activo ")
    Usuario LogInGoogle(@Param("Username") String filtro, @Param("Password") String password, @Param("Activo") Boolean bool);


/*    QUERy nativo
    @Query(
            value = "SELECT u FROM Usuario u WHERE u.username LIKE %:filtro%",
            value = "SELECT * FROM cliente WHERE cliente.nombre LIKE %:filtro% OR cliente.apellido LIKE %:filtro% ",
            nativeQuery = true
    )
    List<Cliente> searchNativo(@Param("filtro") String filtro);

    @Query(
            value = "SELECT * FROM cliente WHERE cliente.nombre LIKE %:filtro% OR cliente.apellido LIKE %:filtro% ",
            countQuery = "SELECT count(*) FROM cliente",
            nativeQuery = true
    )
    Page<Cliente> searchNativo(@Param("filtro") String filtro, Pageable pageable);
*/
}