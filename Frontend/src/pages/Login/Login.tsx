import React, { useState } from 'react';  // Importación de React y useState para gestionar el estado
import '../src/styles/Login.css';
import GoogleIcon from '@mui/icons-material/Google';
import imagen from './assets/img/loginimg.jpg'
import imagen1 from './assets/img/logo2.png'

export const Login = () => {

  const [showPassword, setShowPassword] = useState(false);  // Estado para controlar la visibilidad de la contraseña
  const [action,setAction]= useState ("Sign Up");
  return (
    <div className="container">  {/* Contenedor principal */}
      <header className="header">
        {/* Contenido del encabezado */}
      </header>
      <div className="center">
        <div className="loginImage"><img src={imagen} alt="Imagen inicio de sesion" /></div>
        <div className="logoimagen">
          <img src={imagen1} alt="Imagen logo" />  {/* Imagen de inicio de sesión */}
        </div>
        <div className="login">
          <form className='formSesion' action="">
            <h1 className="iniciarSesion">{action==='Sign Up'? 'Registrarse':'Iniciar sesión'} </h1> {/* Título de inicio de sesión */}

            {/* Campo de usuario */}
            <div className="input">
              <b className="usuario">Email</b>
              <input type="email" required autoFocus className="input" placeholder=' Usuario' pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$"/>
            </div>

            <div className='input'>
             <b className="password"> Contraseña </b>
              <input type={showPassword ? "text" : "password"}required className="input password"placeholder=' Contraseña'/>
              <span className='toggle-password' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <i className="fa fa-eye" aria-hidden="true"></i> :<i className="fa fa-eye-slash" aria-hidden="true"></i> } 
              </span>
              <p>{action==='Sign Up'? 'Ingresá una contraseña de 8 dígitos. Debe tener al menos una mayúscula.':''}</p>
            </div>
            {/* Campo de contraseña */}
            <div className="inputconf" style={{ display: action==='Sign Up' ? 'flex' : 'none' }}>
             <b className="password">Confirmar Contraseña </b>
              <input type={showPassword ? "text" : "password"}required 
                className="input password"
                placeholder=' Confirmar Contraseña'
              />
              <span className='toggle-password' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <i className="fa fa-eye" aria-hidden="true"></i> :<i className="fa fa-eye-slash" aria-hidden="true"></i> } 
                
              </span>
              <p>Te enviaremos un mail con la verificación. Recordá revisar la carpeta de spam. </p>
            </div>
            <div className='recordar' style={{ display: action==='Sign Up' ? 'none' : 'block' }}>Recordarme
            <input type="checkbox"/></div>

            <div className="olvContradiv">
              <a href="#" className="olvContra">Olvidé mi contraseña</a>  {/* Enlace para olvidar la contraseña */}
            </div>

            <div className="btn-field">
              <button type="button">Acceder</button>  {/* Botón para acceder */}
            </div>

            <div className="iniciarGoogle">
              <p className='googleTexto'>{action==='Sign Up' ? 'Registrarse con Google' :'Iniciar sesion con Google'}</p>  {/* Texto de inicio de sesión con Google */}
              <button className='botonGoogle'><GoogleIcon /></button>  {/* Botón para iniciar sesión con Google */}
            </div>

            <div>
              <p className='iniciarGoogle'>
               {action === 'Sign Up' ? '¿Ya tienes una cuenta? ' : '¿Todavía no eres parte de la comunidad? '}
                <a href="#" onClick={() => setAction(action === 'Sign Up' ? 'Login' : 'Sign Up')}>
                {action === 'Sign Up' ? ' Iniciar sesión' : 'Regístrate'}
                 </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <footer className="footer">
        {/* Contenido del pie de página */}
      </footer>
    </div>
  );
};