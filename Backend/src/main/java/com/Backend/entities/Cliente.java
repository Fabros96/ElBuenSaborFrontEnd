package com.Backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "cliente")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Cliente extends Base {

    private String nombre;

    private String apellido;

    private String telefono;

    private String email;

    @OneToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;


}