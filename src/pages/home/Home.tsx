import React, { useEffect, useState } from 'react'
import './Home.css'
import ArticuloHome from './homeComponents/ArticuloHome'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import EastIcon from '@mui/icons-material/East'
import ChecklistIcon from '@mui/icons-material/Checklist'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import MopedIcon from '@mui/icons-material/Moped'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import { Producto } from '../../types/producto'
import { ProductoService } from '../../services/productoService'
// import { Scrollbars } from 'react-custom-scrollbars'

export const Home = () => {
   const [promo, setPromo] = React.useState(true)
   const [tickPromo, setTickPromo] = useState('✓')
   const [products, setProducts] = useState<Producto[]>([])
   const [bebidas, setbebidas] = React.useState(true)
   const [tickBebidas, setTickBebidas] = useState('✓')

   function handleclickPromo() {
      setPromo(!promo)
      if (promo === true) {
         setTickPromo('')
      } else if (promo === false) {
         setTickPromo('✓')
      }
   }
   useEffect(() => {
      getProducts()
   }, [])

   const getProducts = async () => {
      const response = await ProductoService.getProducts()
      setProducts(response)
   }
   function handleclickBebidas() {
      setbebidas(!bebidas)
      if (bebidas === true) {
         setTickBebidas('')
      } else if (bebidas === false) {
         setTickBebidas('✓')
      }
   }
   return (
      <div className="container">
         <div className="welcomeView">
            <h1 className="title">El buen sabor</h1>
            <div className="lema">
               <p className="lemaTexto">
                  {' '}
                  Sabor auténtico, <br />
                  pasión en cada plato.
               </p>
            </div>
            <div className="simbolosHome">
               <div className="shopCart">
                  <div className="icon">
                     {' '}
                     <ShoppingCartIcon className="symbol" />
                  </div>
                  <p className="icontext">Hacer pedido</p>
               </div>
               <div className="arrow">
                  <EastIcon className="symbol" />
               </div>
               <div className="toDo">
                  <div className="icon">
                     <ChecklistIcon className="symbol" />
                  </div>
                  <pre className="icontext">
                     {' '}
                     Ingresar <br />
                     la dirección
                  </pre>
               </div>
               <div className="arrow">
                  <EastIcon className="symbol" />
               </div>
               <div className="money">
                  <div className="icon">
                     <AttachMoneyIcon className="symbol" />
                  </div>
                  <pre className="icontext"> Pagar </pre>
               </div>
               <div className="arrow">
                  <EastIcon className="symbol" />
               </div>
               <div className="motorcycle">
                  <div className="icon">
                     <MopedIcon className="symbol" />
                  </div>
                  <pre className="icontext">
                     Pedido <br />
                     en viaje
                  </pre>
               </div>
               <div className="arrow">
                  <EastIcon className="symbol" />
               </div>
               <div className="restaurant">
                  <div className="icon">
                     <RestaurantIcon className="symbol" />
                  </div>
                  <pre className="icontext"> Disfrute</pre>
               </div>
            </div>
            {/* LINEA DIVISORA */}
            <hr
               style={{
                  background: '#e63946',
                  color: '#e63946',
                  borderColor: '#e63946',
                  height: '3px',
                  width: '100%',
               }}
            />
            <div className="filtros">
               Promociones:{' '}
               <button onClick={handleclickPromo} className="buttonFilter">
                  {tickPromo}
               </button>
               Bebidas:{' '}
               <button onClick={handleclickBebidas} className="buttonFilter">
                  {tickBebidas}
               </button>
            </div>
            <div className="productos">
               {promo === true && (
                  <>
                     <h2 className="promoTexto">Promociones</h2>

                     <div className="promociones">
                        {products.map(product => (
                           <ArticuloHome key={product.id} producto={product} />
                        ))}

                        {/* <div>
                           <ArticuloHome
                              image="https://recetasdeusa.com/wp-content/uploads/2022/05/Hamburguesa-americana-1-scaled.jpg"
                              nombre="hamburguesa"
                              precio={2500}
                              descripcion="Hamburguesa god cocinada con pancetita y queso tremendo siuuuuuuuuu"
                           />
                        </div>
                        <div>
                           <ArticuloHome
                              image="https://recetasdeusa.com/wp-content/uploads/2022/05/Hamburguesa-americana-1-scaled.jpg"
                              nombre="hamburguesa"
                              precio={2500}
                              descripcion="Hamburguesa god cocinada con pancetita y queso tremendo siuuuuuuuuu"
                           />
                        </div>
                        <div>
                           <ArticuloHome
                              image="https://recetasdeusa.com/wp-content/uploads/2022/05/Hamburguesa-americana-1-scaled.jpg"
                              nombre="hamburguesa"
                              precio={2500}
                              descripcion="Hamburguesa god cocinada con pancetita y queso tremendo siuuuuuuuuu"
                           />
                        </div>
                        <div>
                           <ArticuloHome
                              image="https://recetasdeusa.com/wp-content/uploads/2022/05/Hamburguesa-americana-1-scaled.jpg"
                              nombre="hamburguesa"
                              precio={2500}
                              descripcion="Hamburguesa god cocinada con pancetita y queso tremendo siuuuuuuuuu"
                           />
                        </div>
                        <div>
                           <ArticuloHome
                              image="https://recetasdeusa.com/wp-content/uploads/2022/05/Hamburguesa-americana-1-scaled.jpg"
                              nombre="hamburguesa"
                              precio={2500}
                              descripcion="Hamburguesa god cocinada con pancetita y queso tremendo siuuuuuuuuu"
                           />
                        </div>
                        <div>
                           <ArticuloHome
                              image="https://recetasdeusa.com/wp-content/uploads/2022/05/Hamburguesa-americana-1-scaled.jpg"
                              nombre="hamburguesa"
                              precio={2500}
                              descripcion="Hamburguesa god cocinada con pancetita y queso tremendo siuuuuuuuuu"
                           />
                        </div>
                        <div>
                           <ArticuloHome
                              image="https://recetasdeusa.com/wp-content/uploads/2022/05/Hamburguesa-americana-1-scaled.jpg"
                              nombre="hamburguesa"
                              precio={2500}
                              descripcion="Hamburguesa god cocinada con pancetita y queso tremendo siuuuuuuuuu"
                           />
                        </div>
                        <div>
                           <ArticuloHome
                              image="https://recetasdeusa.com/wp-content/uploads/2022/05/Hamburguesa-americana-1-scaled.jpg"
                              nombre="hamburguesa"
                              precio={2500}
                              descripcion="Hamburguesa god cocinada con pancetita y queso tremendo siuuuuuuuuu"
                           />
                        </div>
                        <div>
                           <ArticuloHome
                                    image="https://recetasdeusa.com/wp-content/uploads/2022/05/Hamburguesa-americana-1-scaled.jpg"
                        nombre="hamburguesa"
                              precio={2500}
                              descripcion="Hamburguesa god cocinada con pancetita y queso tremendo siuuuuuuuuu"
                           /> 
                         </div> */}
                     </div>
                  </>
               )}
               {/*------------------------------------------------- BEBIDAS -------------------------------------------------------*/}
               {/* {bebidas === true && (
                  <>
                     <h2 className="promoTexto">Bebidas</h2>
                     <div className="promociones">
                        <div>
                           <ArticuloHome
                              image="https://deukoizarra.com/wp-content/uploads/2023/04/CocaCola-vidirio-350ml.jpg"
                              nombre="Coca Cola 350cc"
                              precio={450}
                              descripcion="coca coca vidrio fresca"
                           />
                        </div>
                        <div>
                           <ArticuloHome
                              image="https://deukoizarra.com/wp-content/uploads/2023/04/CocaCola-vidirio-350ml.jpg"
                              nombre="Coca Cola 350cc"
                              precio={450}
                              descripcion="coca coca vidrio fresca"
                           />
                        </div>
                        <div>
                           <ArticuloHome
                              image="https://deukoizarra.com/wp-content/uploads/2023/04/CocaCola-vidirio-350ml.jpg"
                              nombre="Coca Cola 350cc"
                              precio={450}
                              descripcion="coca coca vidrio fresca"
                           />
                        </div>
                        <div>
                           <ArticuloHome
                              image="https://deukoizarra.com/wp-content/uploads/2023/04/CocaCola-vidirio-350ml.jpg"
                              nombre="Coca Cola 350cc"
                              precio={450}
                              descripcion="coca coca vidrio fresca"
                           />
                        </div>
                        <div>
                           <ArticuloHome
                              image="https://deukoizarra.com/wp-content/uploads/2023/04/CocaCola-vidirio-350ml.jpg"
                              nombre="Coca Cola 350cc"
                              precio={450}
                              descripcion="coca coca vidrio fresca"
                           />
                        </div>
                        <div>
                           <ArticuloHome
                              image="https://deukoizarra.com/wp-content/uploads/2023/04/CocaCola-vidirio-350ml.jpg"
                              nombre="Coca Cola 350cc"
                              precio={450}
                              descripcion="coca coca vidrio fresca"
                           />
                        </div>
                        <div>
                           <ArticuloHome
                              image="https://deukoizarra.com/wp-content/uploads/2023/04/CocaCola-vidirio-350ml.jpg"
                              nombre="Coca Cola 350cc"
                              precio={450}
                              descripcion="coca coca vidrio fresca"
                           />
                        </div>
                        <div>
                           <ArticuloHome
                              image="https://deukoizarra.com/wp-content/uploads/2023/04/CocaCola-vidirio-350ml.jpg"
                              nombre="Coca Cola 350cc"
                              precio={450}
                              descripcion="coca coca vidrio fresca"
                           />
                        </div>
                        <div>
                           <ArticuloHome
                              image="https://deukoizarra.com/wp-content/uploads/2023/04/CocaCola-vidirio-350ml.jpg"
                              nombre="Coca Cola 350cc"
                              precio={450}
                              descripcion="coca coca vidrio fresca"
                           />
                        </div>
                     </div>
                  </>
               )} */}
            </div>
         </div>
      </div>
   )
}
