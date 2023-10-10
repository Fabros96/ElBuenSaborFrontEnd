package com.Backend.services;

import com.Backend.entities.Factura;
import com.Backend.repositories.BaseRepository;
import com.Backend.repositories.FacturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacturaServiceImpl extends BaseServiceImpl<Factura, Long> implements FacturaService{

    @Autowired
    private FacturaRepository facturaRepository;

    public FacturaServiceImpl(BaseRepository<Factura, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    public List<Factura> search(String string) throws Exception {
        return null;
    }

    @Override
    public Page<Factura> search(String string, Pageable pageable) throws Exception {
        return null;
    }
}
