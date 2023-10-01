import React, { useState } from 'react'

function EmpData(){
    return(
        <form>

            <button>
                Volver
            </button>

            <label htmlFor='file'>Foto de perfil</label>
            <input type='file'/>

            <label htmlFor='nombre'>Nombre</label>
            <input type='text'/>

            <label htmlFor='apellido'>Apellido</label>
            <input type='text'/>

            <label htmlFor='email'>Email</label>
            <input type='email'/>

            <label htmlFor='password'>Password</label>
            <input type='password'/>

            <label htmlFor='confirmarpassword'>Confirmar Password</label>
            <input type='password'/>

            <label htmlFor='fechaNaci'>Fecha de nacimiento</label>
            <input type='date'/>

            <label htmlFor='departamento'>Seleccionar departamento</label>
            <select>
                <option value="ca">Capital </option>
                <option value="gu">Guaymallen</option>
                <option value="he">Las Heras</option>
                <option value="la">Lavalle</option>
                <option value="ju">Junín </option>
                <option value="pa">La Paz </option>
                <option value="ma">Maipú </option>
                <option value="ri">Rivadavia </option>
                <option value="sr">Santa Rosa</option>
                <option value="sm">San Martín</option>
                <option value="gc">Godoy Cruz</option>
                <option value="lc">Luján de Cuyo</option>
                <option value="sc">San Carlos</option>
                <option value="tu">Tunuyán </option>
                <option value="tp">Tupungato</option>
                <option value="ga">General Alvear</option>
                <option value="ml">Malargüe</option>
                <option value="ra">San Rafael</option>
            </select>

            {/* <label htmlFor='terminos'>Acepta los terminos y condiciones</label>
            <input type='checkbox'/> */}

            <button>
                Acceder
            </button>
        </form>

    )

}

export default EmpData