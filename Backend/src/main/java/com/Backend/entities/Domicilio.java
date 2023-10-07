package com.Backend.entities;

import jakarta.persistence.*;

import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.util.Date;

@Entity
@Table(name = "domicilio")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder

public class Domicilio extends BaseFecha {

    @NotNull
    @Column(length = 500)
    private String calle;

    @NotNull
    @Column(precision = 5)
    private Integer numero;

    @NotNull
    @Column(precision = 4)
    private Integer codigoPostal;

    @NotNull
    private String localidad;

    @Column(name = "numero_vivienda")
    private Integer numeroDpto;

    @Column(name = "piso_vivienda")
    private Integer pisoDpto;

    @NotNull
    @ManyToOne()
    @JoinColumn(name = "id_cliente")
    private Cliente cliente;


}