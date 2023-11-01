package com.Backend.services;

import com.Backend.entities.Pedido;
import com.Backend.entities.Usuario;
import com.Backend.enums.EstadoPedido;
import com.Backend.repositories.BaseRepository;
import com.Backend.repositories.PedidoRepository;
import com.Backend.repositories.UsuarioRepository;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioServiceImpl extends BaseServiceImpl<Usuario, Long> implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private PedidoRepository pedidoRepository;

    public UsuarioServiceImpl(BaseRepository<Usuario, Long> baseRepository) {
        super(baseRepository);
    }

    private EntityManager entityManager;

    @Override
    public List<Usuario> search(String string) throws Exception {
        return null;
    }

    @Override
    public Page<Usuario> search(String string, Pageable pageable) throws Exception {
        return null;
    }

    public List<Pedido> searchPedidosActivos() throws Exception {
        try {
            List<Pedido> pedidos = pedidoRepository.searchPedidosActivos();
            return pedidos;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
    public Pedido cambiarEstadoPedido(Long idPedido, EstadoPedido nuevoEstado) throws Exception{
        try{
            Pedido pedido=pedidoRepository.getReferenceById(idPedido);
            pedido.setEstado(nuevoEstado);
            return pedidoRepository.save(pedido);
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }
}
