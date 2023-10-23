package com.Backend.entities;

import com.Backend.enums.FormaPago;
import jakarta.persistence.*;

import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "factura")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder

public class Factura extends BaseFecha {

    @NotNull
    @Column(name = "fecha_facturacion")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaFacturacion;

    @Column(name = "mp_payment_id")
    private Long mpPaymentId;

    @Column(name = "mp_merchant_order_id")
    private Long mpMerchantOrderId;

    @Column(name = "mp_preference_id")
    private String mpPreferenceId;

    @Column(name = "mp_payment_type")
    private String mpPaymentType;

    @NotNull
    private FormaPago formaPago;

    @NotNull
    @Column(name = "total_venta", precision = 10, scale = 2)
    private BigDecimal totalVenta;

    @NotNull
    @OneToOne
    @JoinColumn(name = "id_pedido")
    private Pedido pedido;

    @OneToMany(mappedBy = "factura")
    private List<DetalleFactura> detallesFactura = new ArrayList<>();

    public void addDetallesFactura(DetalleFactura detalleFactura){
        detallesFactura.add(detalleFactura);
    }
}