package com.Backend.services;

import com.Backend.entities.ArticuloInsumo;
import com.Backend.entities.Cliente;
import com.Backend.repositories.ArticuloInsumoRepository;
import com.Backend.repositories.BaseRepository;
import com.Backend.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticuloInsumoServiceImpl extends BaseServiceImpl<ArticuloInsumo, Long> implements ArticuloInsumoService{

    @Autowired
    private ArticuloInsumoRepository articuloInsumoRepository;


    public ArticuloInsumoServiceImpl(BaseRepository<ArticuloInsumo, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    public List<ArticuloInsumo> search(String string) throws Exception {
        return null;
    }

    @Override
    public Page<ArticuloInsumo> search(String string, Pageable pageable) throws Exception {
        return null;
    }
}