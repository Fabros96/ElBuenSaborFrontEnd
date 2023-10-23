package com.Backend.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "cliente")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder

@Setter
public class Cliente extends BaseFecha {

    private String nombre;

    private String apellido;

    private String telefono;

    private String email;

    @OneToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

    @OneToMany(mappedBy="cliente")
    private List<Domicilio> domicilios;

    public void addDomicilio(Domicilio domicilio){
        domicilios.add(domicilio);
    }
}