import React, { useState } from 'react' // Importación de React y useState para gestionar el estado
import './Login.css'
import GoogleIcon from '@mui/icons-material/Google'
import imagen from '../../assets/img/loginimg.jpg'
import imagen1 from '../../assets/img/logo2.png'
import { AuthService } from '../../services/authService'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import { User } from '../../types/user'

export const Login = () => {
   const { setUser, setToken } = useAuth()

   const [showPassword, setShowPassword] = useState(false) // Estado para controlar la visibilidad de la contraseña
   const [action, setAction] = useState<'Sign Up' | 'Login'>('Sign Up')

   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')
   const [passwordHasErrors, setPasswordHasErrors] = useState(false)

   const navigate = useNavigate()

   const handleLogin = async () => {
      if (action === 'Login') {
         // Manejar el login

         try {
            const response = await AuthService.login(username, password)

            const user: User = {
               username: response.username,
            }

            setUser(user)
            setToken(response.token)

            navigate('/')
         } catch (error) {
            console.log('Error al login')
         }
      } else {
         // Manejar registrar

         if (password !== confirmPassword) {
            return setPasswordHasErrors(true)
         }

         try {
            const response = await AuthService.register(username, password)

            const user: User = {
               username: response.username,
            }

            setUser(user)
            setToken(response.token)

            navigate('/')
         } catch (error) {
            console.log('Error al registarr')
         }
      }
   }

   return (
      <div className="container">
         {' '}
         {/* Contenedor principal */}
         <div className="center">
            <div className="loginImage">
               <img src={imagen} alt="Imagen inicio de sesion" />
            </div>

            <div className="login">
               <form className="formSesion" action="">
                  <h1 className="iniciarSesion">
                     {action === 'Sign Up' ? 'Registrarse' : 'Iniciar sesión'}{' '}
                  </h1>{' '}
                  {/* Título de inicio de sesión */}
                  {/* Campo de usuario */}
                  <div className="input">
                     <b className="usuario">Usuario</b>
                     <input
                        type="email"
                        required
                        autoFocus
                        className="input"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                     />
                  </div>
                  <div className="input">
                     <b className="password"> Contraseña </b>
                     <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        className="input password"
                        placeholder=" Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? (
                           <i className="fa fa-eye" aria-hidden="true"></i>
                        ) : (
                           <i className="fa fa-eye-slash" aria-hidden="true"></i>
                        )}
                     </span>
                     <p>
                        {action === 'Sign Up'
                           ? 'Ingresá una contraseña de 8 dígitos. Debe tener al menos una mayúscula.'
                           : ''}
                     </p>
                  </div>
                  {/* Campo de contraseña */}
                  <div className="inputconf" style={{ display: action === 'Sign Up' ? 'flex' : 'none' }}>
                     <b className="password">Confirmar Contraseña </b>
                     <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        className="input password"
                        placeholder=" Confirmar Contraseña"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                     />
                     <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? (
                           <i className="fa fa-eye" aria-hidden="true"></i>
                        ) : (
                           <i className="fa fa-eye-slash" aria-hidden="true"></i>
                        )}
                     </span>
                     <p>Te enviaremos un mail con la verificación. Recordá revisar la carpeta de spam. </p>

                     {passwordHasErrors && <span> Las Contraseñas no coinciden</span>}
                  </div>
                  <div className="recordar" style={{ display: action === 'Sign Up' ? 'none' : 'block' }}>
                     Recordarme
                     <input type="checkbox" />
                  </div>
                  <div className="olvContradiv">
                     <a href="#" className="olvContra">
                        Olvidé mi contraseña
                     </a>{' '}
                     {/* Enlace para olvidar la contraseña */}
                  </div>
                  <div className="btn-field">
                     <button type="button" onClick={handleLogin}>
                        Acceder
                     </button>{' '}
                     {/* Botón para acceder */}
                  </div>
                  {/* <div className="iniciarGoogle">
                     <p className="googleTexto">
                        {action === 'Sign Up' ? 'Registrarse con Google' : 'Iniciar sesion con Google'}
                     </p>{' '}
                     Texto de inicio de sesión con Google
                     <button className="botonGoogle">
                        <GoogleIcon />
                     </button>{' '}
                     Botón para iniciar sesión con Google
                  </div> */}
                  <div className="iniciarGoogle">
                     {/* <p className="iniciarGoogle"> */}
                     {action === 'Sign Up'
                        ? '¿Ya tienes una cuenta? '
                        : '¿Todavía no eres parte de la comunidad? '}
                     <a href="#" onClick={() => setAction(action === 'Sign Up' ? 'Login' : 'Sign Up')}>
                        {action === 'Sign Up' ? ' Iniciar sesión' : 'Regístrate'}
                     </a>
                     {/* </p> */}
                  </div>
               </form>
            </div>
         </div>
         <footer className="footer">{/* Contenido del pie de página */}</footer>
      </div>
   )
}
