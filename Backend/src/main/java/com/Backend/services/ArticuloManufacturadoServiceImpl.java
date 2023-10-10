package com.Backend.services;

import com.Backend.entities.ArticuloManufacturado;
import com.Backend.repositories.ArticuloInsumoRepository;
import com.Backend.repositories.BaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticuloManufacturadoServiceImpl extends BaseServiceImpl<ArticuloManufacturado, Long> implements ArticuloManufacturadoService {

    @Autowired
    private ArticuloInsumoRepository articuloInsumoRepository;
    public ArticuloManufacturadoServiceImpl(BaseRepository<ArticuloManufacturado, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    public List<ArticuloManufacturado> search(String string) throws Exception {
        return null;
    }

    @Override
    public Page<ArticuloManufacturado> search(String string, Pageable pageable) throws Exception {
        return null;
    }
}
