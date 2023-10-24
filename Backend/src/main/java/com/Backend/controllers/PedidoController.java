package com.Backend.controllers;



import com.Backend.DTO.DTOArticuloCarrito;
import com.Backend.DTO.DTOCrearPedido;
import com.Backend.entities.DetallePedido;
import com.Backend.entities.Pedido;
import com.Backend.services.PedidoServiceImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/pedidos")
public class PedidoController extends BaseControllerImpl<Pedido, PedidoServiceImpl>{

    //Búsqueda: a través de un cuadro de búsqueda, se podrá buscar productos mediante su nombre o se podrá elegir una determinada categoría para ver todos los productos correspondientes a la misma
    @GetMapping("/search")
    public ResponseEntity<?> search(@RequestParam String filtro){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(service.search(filtro));
        } catch(Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("{\"error\": \"" + e.getMessage() + "\"}"));
        }
    }
    @GetMapping("/searchPaged")
    public ResponseEntity<?> search(@RequestParam String filtro, Pageable pageable){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(service.search(filtro, pageable));
        } catch(Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("{\"error\": \"" + e.getMessage() + "\"}"));
        }
    }




    @PostMapping("/createPedido")
    public ResponseEntity<?> createCarrito(@RequestBody DTOCrearPedido dtoPedido){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(service.save(dtoPedido));
        } catch(Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("{\"error\": \"" + e.getMessage() + "\"}"));
        }
    }

}

