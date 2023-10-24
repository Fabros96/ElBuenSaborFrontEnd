package com.Backend.services;

import com.Backend.DTO.DTOArticuloCarrito;
import com.Backend.DTO.DTOCrearPedido;
import com.Backend.entities.*;
import com.Backend.repositories.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import static com.Backend.enums.EstadoPedido.PENDIENTE_PAGO;

@Service
public class PedidoServiceImpl extends BaseServiceImpl<Pedido, Long> implements PedidoService{

    @Autowired
    private PedidoRepository pedidoRepository;
    @Autowired
    private ArticuloManufacturadoRepository articuloManufacturadoRepository;
    @Autowired
    private ClienteRepository clienteRepository;
    @Autowired
    private DomicilioRepository domicilioRepository;
    @Autowired
    private UsuarioRepository usuarioRepository;

    public PedidoServiceImpl(BaseRepository<Pedido, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    public List<Pedido> search(String string) throws Exception {
        return null;
    }

    @Override
    public Page<Pedido> search(String string, Pageable pageable) throws Exception {
        return null;
    }

    @Transactional
    public Pedido save(DTOCrearPedido dtoPedido) throws Exception {
        try {
            Calendar calendar = Calendar.getInstance();
            Pedido pedido = new Pedido(); //creo pedido
            List<DTOArticuloCarrito> articulos = dtoPedido.getArticulos();
            //aca meter el resto de atributos que necesita pedido
            pedido.setFechaPedido(new Date());
            //convertir articulos de DTOArticuloCarrito en DetallePedido
            List<DetallePedido> detallesPedidos = new ArrayList<>();
            int tiempoEstimado = 0;
            for (int i = 0; i < articulos.size(); i++) {
                DetallePedido detallePedido = new DetallePedido();
                DTOArticuloCarrito dto = articulos.get(i);
                ArticuloManufacturado articulo = articuloManufacturadoRepository.getById(dto.getId_ArticuloManufacturado());
                detallePedido.setCantidad(dto.getCantidad());
                detallePedido.setSubtotal(articulo.getPrecioVenta().multiply(BigDecimal.valueOf(dto.getCantidad())));
                detallesPedidos.add(detallePedido);
                //aprovecho a calcular el tiempo aprox de entrega
                tiempoEstimado = 0;
                if (articulo.getTiempoEstimadoCocina() >= tiempoEstimado) {
                    tiempoEstimado = articulo.getTiempoEstimadoCocina();
                }

            }
            pedido.setdetallesPedido(detallesPedidos);
            //Buscar total pedido
            List<BigDecimal> subtotales = new ArrayList<>();
            for (int i = 0; i < detallesPedidos.size(); i++) {
                subtotales.add(detallesPedidos.get(i).getSubtotal());
            }
            BigDecimal totalPedido = subtotales.stream().reduce(
                    BigDecimal.ZERO, BigDecimal::add);
            pedido.setTotal(totalPedido);
            //Buscar cliente
            Usuario usuario = usuarioRepository.search(dtoPedido.getUsername());
            pedido.setCliente(usuario.getCliente());
            //Busco Forma Pago
            pedido.setFormaPago(dtoPedido.getFormaPago());

            //Busco domicilio
            Domicilio domicilio = domicilioRepository.search(dtoPedido.getDomicilioCalle(), dtoPedido.getDomicilioNumero());
            pedido.setDomicilio(domicilio);
            //Busco Tipo Envio
            pedido.setTipoEnvio(dtoPedido.getTipoEnvio());
            //Seteo Estado
            pedido.setEstado(PENDIENTE_PAGO);
            //Busco tiempo estimado
//            pedido.setHoraEstimadaFinalizacion(calendar.add(Calendar.HOUR_OF_DAY,tiempoEstimado));
            return pedidoRepository.save(pedido);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}
