package com.Backend.entities;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;

import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "rubro_articulo")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder

public class RubroArticulo extends BaseFecha {


    @ManyToOne()
    @JoinColumn(name = "id_rubro_padre")
    private RubroArticulo rubroPadre;

    @OneToMany(mappedBy = "rubroPadre")
    private List<RubroArticulo> subRubros = new ArrayList<RubroArticulo>();

    @NotNull
    private String denominacion;


    public void addSubRubro(RubroArticulo rubroArticulo){
        subRubros.add(rubroArticulo);
    }
    public RubroArticulo(String denominacion, RubroArticulo rubroPadre) {
        this.denominacion = denominacion;
        this.rubroPadre = rubroPadre;
    }



}