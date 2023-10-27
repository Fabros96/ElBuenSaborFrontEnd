package com.Backend.entities;

import com.Backend.enums.EstadoRubro;
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


    @OneToMany(mappedBy = "rubroArticulo")
    private List<ArticuloInsumo> articuloInsumos;


    @NotNull
    private String denominacion;

   private EstadoRubro estadoRubro;
    public void addArticuloInsumos(ArticuloInsumo articuloInsumo) {
        articuloInsumos.add(articuloInsumo);
    }
}