package com.Backend.DTO;

import com.Backend.entities.Cliente;
import com.Backend.entities.Domicilio;
import com.Backend.enums.FormaPago;
import com.Backend.enums.TipoEnvio;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DTOCrearPedido {

//    @OneToMany(mappedBy = "dtoCrearPedido")
    private List<DTOArticuloCarrito> articulos = new ArrayList<>();
    //estado,total,totalCosto,fechaPedido,horaEstimadaFinalizacion
    private TipoEnvio tipoEnvio;
    private FormaPago formaPago;
    private String domicilioCalle;
    private int domicilioNumero;
    private String username;


    public void setArticulos(List<DTOArticuloCarrito> articulos) {
        this.articulos = articulos;
    }
}
