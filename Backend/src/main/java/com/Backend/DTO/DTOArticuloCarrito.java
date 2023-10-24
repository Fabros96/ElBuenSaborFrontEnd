package com.Backend.DTO;

import jakarta.persistence.ManyToOne;
import lombok.*;

import java.math.BigDecimal;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DTOArticuloCarrito {

    private Integer cantidad;
    private Long id_ArticuloManufacturado;


}
