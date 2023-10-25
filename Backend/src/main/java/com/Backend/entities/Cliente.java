package com.Backend.entities;

import com.Backend.enums.Rol;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
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

    public Rol rol;

    @OneToOne
    @JsonIgnore
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

    @JsonIgnore
    @OneToMany(mappedBy="cliente")
    private List<Domicilio> domicilios = new ArrayList<>();

    public void addDomicilio(Domicilio domicilio){
        domicilios.add(domicilio);
    }
}