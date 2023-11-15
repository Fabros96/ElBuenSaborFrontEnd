import { useEffect, useState } from "react";
import React from "react";
import { Producto } from "../../../types/producto";
import { ProductoService } from "../../../services/productoService";
import Loader from "../../../components/Loader/Loader";
import { ModalType } from "../../../types/modalTypes";
import ProductModal from "./ModalProducto";
//import DeleteButton from "../DeleteButton/DeleteButton";
//import EditButton from "../EditButton/EditButton";
import { Button, Table } from "react-bootstrap";

const TablaProducto = () => {
  console.log ("holasa");
  //Variable con los datos recibidos por la API
  const [products, setProducts] = useState<Producto[]>([]);

  //Variable que muestra el Loader hasta que cargue la info de la API
  const [isLoading, setIsLoading] = useState(true);

  //Variable que actualizará la tabla después de cada operación exitosa
  const [refreshData, setRefreshData] = useState(false);

  //Este hook se ejecuta cada vez que se renderiza el componente
  //O RefreshData cambie de estado
  useEffect(() => {
    //Llamamos a la funcion para obtener TODOS los productos del ProductService
    const fetchProducts = async () => {
      const products = await ProductoService.getProducts();
      setProducts(products);
      setIsLoading(false);
    };
    fetchProducts();
  }, [refreshData]);

  //Este const es para inicializar un producto por defecto y asi evitar valores 'undefined'

  const initializableNewProduct = (): Producto => {
    return {

      image:"",
      name: "",
      type:"",
      category:"",
      stock:0,
      status: "",
      price:0,
      id: 0, 
      
    };
  };

  const [product, setProduct] = useState<Producto>(initializableNewProduct);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
  const [title, setTitle] = useState("");

  //Logica del Modal
  const handleClick = (newTitle: string, prod: Producto, modal: ModalType) => {
    setTitle(newTitle);
    setModalType(modal);
    setProduct(prod);
    setShowModal(true);
  };

  return (
    <>
    <Button 
     onClick={() =>handleClick("Nuevo Producto",initializableNewProduct(),ModalType.CREATE)}>
      Nuevo Producto </Button>
      {isLoading ? <Loader /> : (
        <Table hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Categoria</th>
              <th>Stock</th>
              <th>Precio</th>
              <th>Estado</th>
              <th>Imagen</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.type}</td>
                <td>{product.category}</td>
                <td>{product.stock}</td>
                <td>{product.price}</td>
                <td><img src={product.image}alt={product.name} style={{ width: "50px" }}/></td>
                {/* <td><EditButton onClick={() => handleClick("Editar producto", product, ModalType.UPDATE)}/></td>
                <td><DeleteButton onClick={() => handleClick("Borrar producto", product, ModalType.DELETE)}/></td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {showModal && (
        <ProductModal
          show={showModal}
          onHide={() => setShowModal(false)}
          title={title}
          modalType={modalType}
          prod={product}
          refreshData={setRefreshData}
        />
      )}
    </>
  );
};

export default TablaProducto;