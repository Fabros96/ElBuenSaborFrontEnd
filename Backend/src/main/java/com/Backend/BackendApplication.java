package com.Backend;


import com.Backend.entities.*;
import com.Backend.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;

import static com.Backend.enums.EstadoPedido.PAGADO;
import static com.Backend.enums.FormaPago.EFECTIVO;
import static com.Backend.enums.TipoEnvio.DELIVERY;


@SpringBootApplication
public class BackendApplication {
	@Autowired
	 ClienteRepository clienteRepository;
	@Autowired
	 ArticuloInsumoRepository articuloInsumoRepository;
	@Autowired
	 ArticuloManufacturadoRepository articuloManufacturadoRepository;
	@Autowired
	 DetalleArticuloManufacturadoRepository detalleArticuloManufacturadoRepository;
	@Autowired
	 DetalleFacturaRepository detalleFacturaRepository;
	@Autowired
	 DetallePedidoRepository detallePedidoRepository;
	@Autowired
	 DomicilioRepository domicilioRepository;
	@Autowired
	 FacturaRepository facturaRepository;
	@Autowired
	 PedidoRepository pedidoRepository;
	@Autowired
	 RubroArticuloRepository rubroArticuloRepository;
	@Autowired
	 UnidadMedidaRepository unidadMedidaRepository;
	@Autowired
	 UsuarioRepository usuarioRepository;


	public static void main(String[] args) {

		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	CommandLineRunner init(/*ClienteRepository clienteRepo, ArticuloInsumoRepository articuloInsumoRep, ArticuloManufacturadoRepository articuloManufacturadoRepo,
						   DetalleArticuloManufacturadoRepository detalleArticuloManufacturadoRepo, DetalleFacturaRepository detalleFacturaRepo, DetallePedidoRepository detallePedidoRepo,
							DomicilioRepository domicilioRepo, FacturaRepository facturaRepo, PedidoRepository pedidoRepo, RubroArticuloRepository rubroArticuloRepo,
						   UnidadMedidaRepository unidadMedidaRepository, UsuarioRepository usuarioRepo*/){
		return args -> {

//			Cliente cliente = Cliente.builder().nombre("hola").apellido("Gutierrez").email("soyGutierrez@gmail.com").telefono("2604552255").build();
//			cliente.setFechaAlta(new Date(1-10-2023));

			Cliente cliente1 = new Cliente();
			cliente1.setNombre("Hola :)");
			cliente1.setApellido("Gonzalez");
			cliente1.setEmail("gonzalez@hotmail.com");
			cliente1.setFechaAlta(new Date(1-10-2023));
			cliente1.setFechaBaja(null);
			cliente1.setFechaModificacion(null);
			cliente1.setTelefono("2604562573");

			Usuario user = new Usuario();
			user.setFechaAlta(new Date(1-10-2023));
			user.setFechaBaja(null);
			user.setFechaModificacion(null);
			user.setUsername("holaGonzalez");
			user.setPassword("password");
			usuarioRepository.save(user);

			cliente1.setUsuario(user);
			clienteRepository.save(cliente1);

			Domicilio domi = new Domicilio();
			domi.setCalle("callesiu");
			domi.setCodigoPostal(5500);
			domi.setFechaAlta(new Date(1-10-2023));
			domi.setFechaBaja(null);
			domi.setFechaModificacion(null);
			domi.setCliente(cliente1);
			domi.setCliente(cliente1);
			domicilioRepository.save(domi);

			Pedido pedido = new Pedido();
			pedido.setCliente(cliente1);
			pedido.setFechaAlta(new Date(1-10-2023));
			pedido.setFechaBaja(null);
			pedido.setFechaModificacion(null);
			pedido.setDomicilioEntrega(domi);
			pedido.setEstado(PAGADO);
			pedido.setFechaPedido(new Date(1-10-2023));
			pedido.setFormaPago(EFECTIVO);
			pedido.setHoraEstimadaFinalizacion(LocalTime.now());//ver
			pedido.setTipoEnvio(DELIVERY);
			pedido.setTotal(BigDecimal.valueOf(2500));
			pedido.setTotalCosto(BigDecimal.valueOf(1200));
			pedidoRepository.save(pedido);

			Factura factura = new Factura();
			factura.setFormaPago(EFECTIVO);
			factura.setPedido(pedido);
			factura.setFechaAlta(new Date(1-10-2023));
			factura.setFechaBaja(null);
			factura.setFechaModificacion(null);
			factura.setFechaFacturacion(new Date(1-10-2023));
			factura.setMpMerchantOrderId(1234567L);
			factura.setMpPaymentType("Tarjeta?");
			factura.setMpPaymentId(123L);
			factura.setTotalVenta(BigDecimal.valueOf(5000));
			factura.setMpPreferenceId("que es esto");
			facturaRepository.save(factura);

			RubroArticulo ra = new RubroArticulo();
			ra.setDenominacion("carne");
			ra.setFechaAlta(new Date(1-10-2023));
			ra.setFechaBaja(null);
			ra.setFechaModificacion(null);

			RubroArticulo raPadre = new RubroArticulo();
			RubroArticulo raHijo = new RubroArticulo();
			RubroArticulo raHijo2 = new RubroArticulo();
			raPadre.setDenominacion("algo");
			raHijo.setDenominacion("algotmbn");
			raHijo2.setDenominacion("algosii");
			rubroArticuloRepository.save(raPadre);
			rubroArticuloRepository.save(raHijo);
			rubroArticuloRepository.save(raHijo2);

			ra.setRubroPadre(raPadre);
			ra.addSubRubro(raHijo);
			ra.addSubRubro(raHijo2);
			rubroArticuloRepository.save(ra);

			UnidadMedida unidad = new UnidadMedida();
			unidad.setDenominacion("unidad");
			unidad.setAbreviatura("un");
			unidadMedidaRepository.save(unidad);

			ArticuloInsumo artInsumo = new ArticuloInsumo();
			artInsumo.setDenominacion("carneHamburguesa");
			artInsumo.setFechaAlta(new Date(1-10-2023));
			artInsumo.setFechaBaja(null);
			artInsumo.setFechaModificacion(null);
			artInsumo.setPrecioCompra(BigDecimal.valueOf(1200));
			artInsumo.setRubroArticulo(ra);
			artInsumo.setStockActual(BigDecimal.valueOf(20));
			artInsumo.setStockMinimo(BigDecimal.valueOf(8));
			artInsumo.setUnidadMedida(unidad);
			artInsumo.setUrlImagen("urlURLurlURLurlURL");
			articuloInsumoRepository.save(artInsumo);

			ArticuloManufacturado artMan = new ArticuloManufacturado();
			artMan.setCosto(BigDecimal.valueOf(1200));
			artMan.setDenominacion("hamburguesa");
			artMan.setDescripcion("hamburguesa rica con panceta siuu");
			artMan.setFechaAlta(new Date(1-10-2023));
			artMan.setFechaBaja(null);
			artMan.setFechaModificacion(null);
			artMan.setPrecioVenta(BigDecimal.valueOf(2500));
			artMan.setTiempoEstimadoCocina(20);
			artMan.setUrlImagen("urlURLurlURLurlURL");
			articuloManufacturadoRepository.save(artMan);

			DetalleFactura df = new DetalleFactura();
			df.setArticuloManufacturado(artMan);
			df.setCantidad(2);
			df.setFactura(factura);
			df.setSubtotal(BigDecimal.valueOf(5000));
			detalleFacturaRepository.save(df);


//			DetallePedido detped = new DetallePedido();
//			detped.setCantidad(1);

		};
	}
}
