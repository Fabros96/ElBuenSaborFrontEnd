package com.Backend.services;

import com.Backend.entities.Pedido;
import com.Backend.repositories.BaseRepository;
import com.Backend.repositories.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoServiceImpl extends BaseServiceImpl<Pedido, Long> implements PedidoService{

    @Autowired
    private PedidoRepository pedidoRepository;

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
}
