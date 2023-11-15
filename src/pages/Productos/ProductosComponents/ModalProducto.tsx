import { Button, Form, Modal } from "react-bootstrap";
import { ModalType } from "../../../types/modalTypes";
import { Producto } from "../../../types/producto";

//Dependencias para la validacion de datos de formularios
import * as Yup from "yup";
import { useFormik } from "formik";
import { ProductoService } from "../../../services/productoService";

//Notificaciones al usuario
import { toast } from "react-toastify";

type ProductModalProps = {
  show: boolean;
  onHide: () => void;
  title: string;
  modalType: ModalType;
  prod: Producto;
  refreshData: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProductModal = ({show,onHide,title,modalType,prod, refreshData}: ProductModalProps) => {
  //CREATE - ACTUALIZAR
  const handleSaveUpdate = async (pro: Producto) => {
    try {
      const isNew = prod.id === 0;
      if (isNew) {
        await ProductoService.createProduct(pro);
      } else {
        await ProductoService.updateProduct(pro.id, pro);
      }
      toast.success(isNew ? "Producto Creado" : "Producto Actualizado", {
        position: "top-center",
      });

      onHide();
      refreshData(prevState => !prevState);
    } catch (error) {
      console.error(error);
      toast.error("Ha ocurrido un error inesperado D:");
    }
  };

  //DELETE
  const handleDelete = async () => {
    try {
      await ProductoService.deleteProduct(prod.id);

      toast.success("Producto eliminado con éxito", {
        position: "top-center",
      });
      onHide();
      refreshData(prevState => !prevState);
    } catch (error) {
      console.error(error);
      toast.error("Ha ocurrido un error inesperado D:");
    }
  };
  //Yup, esquema de validacion.
  const validationSchema = () => {
    return Yup.object().shape({
      id: Yup.number().integer().min(0),
      title: Yup.string().required("El titulo es requerido"),
      price: Yup.number().min(0).required("El precio es requerido"),
      description: Yup.string().required("La descripcion es requerida"),
      category: Yup.string().required("La categoria es requerida"),
      image: Yup.string().required("La URL de la imagen es requerida"),
    });
  };

  //Formik usa el esquema de validacion de arriba
  const formik = useFormik({
    initialValues: prod,
    validationSchema: validationSchema(),
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (obj: Producto) => handleSaveUpdate(obj),
  });

  

  return (
    <>
      {modalType === ModalType.DELETE ? (
        <>
          <Modal show={show} onHide={onHide} centered backdrop="static">
            <Modal.Header closeButton>
              <Modal.Title> {title} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                ¿Está seguro que desea eliminar el producto <br />
                <strong> {prod.name} </strong>?
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onHide}>
                Cancelar
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Eliminar
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <>
          <Modal show={show} onHide={onHide} centered backdrop="static" className="modal-xl">
            <Modal.Header closeButton>
              <Modal.Title> {title} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={formik.handleSubmit}>
                {/*ESTE GROUP ES PARA EL CAMPO Imagen*/}
                <Form.Group controlId="formImage">
                  <Form.Label>Imagen</Form.Label>
                  <Form.Control
                    name="image"
                    type="text"
                    value={formik.values.image || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.image && formik.touched.image
                    )}
                    placeholder="URL Imagen"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.image}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO Nombre*/}
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="name"
                    type="text"
                    value={formik.values.name || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.name && formik.touched.name
                    )}
                    placeholder="Name"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                {/* <td>{product.name}</td>
                <td>{product.type}</td>
                <td>{product.category}</td>
                <td>{product.stock}</td>
                <td>{product.price}</td> */}

                {/*ESTE GROUP ES PARA EL CAMPO TIPO*/}
                <Form.Group controlId="formTipo">
                  <Form.Label>Tipo</Form.Label>
                  <Form.Control
                    name="tipo"
                    type="text"
                    value={formik.values.type || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.type && formik.touched.type
                    )}
                    placeholder="Tipo"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.type}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO CATEGORIA*/}
                <Form.Group controlId="formCategoria">
                  <Form.Label>Categoria</Form.Label>
                  <Form.Control
                    name="categoria"
                    type="text"
                    value={formik.values.category || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.category && formik.touched.category
                    )}
                    placeholder="Categoria"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.category}
                  </Form.Control.Feedback>
                </Form.Group>


                  {/*ESTE GROUP ES PARA EL CAMPO STOCK*/}
                <Form.Group controlId="formStock">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    name="stock"
                    type="number"
                    value={formik.values.stock || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.stock && formik.touched.stock
                    )}
                    placeholder="Stock"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.category}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO PRECIO*/}
                <Form.Group controlId="formPrice">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control
                    name="price"
                    type="number"
                    value={formik.values.price || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.price && formik.touched.price
                    )}
                    placeholder="Precio"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.price}
                  </Form.Control.Feedback>
                </Form.Group>

                <Modal.Footer className="mt-4">
                  <Button variant="secondary" onClick={onHide}>
                    Cancelar
                  </Button>
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={!formik.isValid}
                  >
                    Guardar
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
};

export default ProductModal;