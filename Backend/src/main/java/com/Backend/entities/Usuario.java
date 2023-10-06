package com.Backend.entities;

import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "usuario")
public class Usuario extends Base {

//    NO IMPLEMENTAR, uso id de Base
//    @NotNull
//    @Column(name = "auth0_id", nullable = false, unique = true)
//    private String auth0Id;

    @NotNull
    @Column(name = "username", nullable = false)
    private String username;

}