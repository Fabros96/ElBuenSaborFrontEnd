package com.Backend.services;

import com.Backend.DTO.DTOmostrarPedidos;
import com.Backend.entities.Cliente;
import com.Backend.entities.Pedido;
import com.Backend.enums.EstadoPedido;
import com.Backend.enums.Rol;
import com.Backend.repositories.BaseRepository;
import com.Backend.repositories.ClienteRepository;

import com.Backend.repositories.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class ClienteServiceImpl extends BaseServiceImpl<Cliente, Long> implements ClienteService{

    @Autowired
    private ClienteRepository clienteRepository;
    @Autowired
    private PedidoRepository pedidoRepository;

    public ClienteServiceImpl(BaseRepository<Cliente, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    public List<Cliente> search(String filtro) throws Exception {
        try{
           // List<Cliente> clientes = clienteRepository.findByNombreContainingOrApellidoContaining(filtro, filtro);
           // List<Cliente> clientes = clienteRepository.search(filtro);
            List<Cliente> clientes = clienteRepository.searchNativo(filtro);
            return clientes;
        }catch(Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Page<Cliente> search(String filtro, Pageable pageable) throws Exception {
        try{
            // Page<Cliente> clientes = clienteRepository.findByNombreContainingOrApellidoContaining(filtro, filtro, pageable);
            // Page<Cliente> clientes = clienteRepository.search(filtro, pageable);
            Page<Cliente> clientes = clienteRepository.searchNativo(filtro, pageable);
            return clientes;
        }catch(Exception e){
            throw new Exception(e.getMessage());
        }
    }
    public List<Pedido> get(DTOmostrarPedidos dtomostrarPedidos ) throws Exception{
        try{

            List<Pedido> pedidosCandidatos =pedidoRepository.findAll();
            List<Pedido> pedidosMostrar= new ArrayList<>();
            for (int i =0; i<=pedidosCandidatos.size();i++){
               if (pedidosCandidatos.get(i).getEstado()!= EstadoPedido.COMPLETADO && pedidosCandidatos.get(i).getEstado()!= EstadoPedido.CANCELADO){
                   pedidosMostrar.add(pedidosCandidatos.get(i));

               }
           }
         return pedidosMostrar;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}
