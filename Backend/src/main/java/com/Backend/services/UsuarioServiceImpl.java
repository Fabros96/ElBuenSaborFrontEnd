package com.Backend.services;

import com.Backend.entities.Usuario;
import com.Backend.repositories.BaseRepository;
import com.Backend.repositories.UsuarioRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioServiceImpl extends BaseServiceImpl<Usuario, Long> implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public UsuarioServiceImpl(BaseRepository<Usuario, Long> baseRepository) {
        super(baseRepository);
    }


    @Transactional
    @Override
    public List<Usuario> search(String string) throws Exception {
            try{
                return usuarioRepository.searchNativo(string);
            }
            catch (Exception e){
                throw new Exception(e.getMessage());
            }
        }

    @Override
    public Page<Usuario> search(String string, Pageable pageable) throws Exception {
        return null;
    }
}
