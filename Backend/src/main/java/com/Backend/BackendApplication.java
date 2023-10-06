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
	CommandLineRunner init(ClienteRepository clienteRepo, ArticuloInsumoRepository articuloInsumoRep, ArticuloManufacturadoRepository articuloManufacturadoRepo,
						   DetalleArticuloManufacturadoRepository detalleArticuloManufacturadoRepo, DetalleFacturaRepository detalleFacturaRepo, DetallePedidoRepository detallePedidoRepo,
							DomicilioRepository domicilioRepo, FacturaRepository facturaRepo, PedidoRepository pedidoRepo, RubroArticuloRepository rubroArticuloRepo,
						   UnidadMedidaRepository unidadMedidaRepository, UsuarioRepository usuarioRepo){
		return args -> {


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


//			DetallePedido detped = new DetallePedido();
//			detped.setCantidad(1);

		};
	}
}
