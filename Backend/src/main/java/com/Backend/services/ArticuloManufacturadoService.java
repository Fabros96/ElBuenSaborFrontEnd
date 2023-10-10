package com.Backend.services;

import com.Backend.entities.ArticuloManufacturado;
import com.Backend.entities.Cliente;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ArticuloManufacturadoService extends BaseService<ArticuloManufacturado, Long> {
    List<ArticuloManufacturado> search(String string) throws Exception;

    Page<ArticuloManufacturado> search(String string, Pageable pageable) throws Exception;
}
