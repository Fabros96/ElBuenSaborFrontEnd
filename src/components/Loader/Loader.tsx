import { Spinner } from "react-bootstrap";
import React from "react";

const Loader = () => {
  return (
    <div className= "loader" >
    <Spinner animation="border" variant="info" className="loader-spinner">
        </Spinner>    
    </div>
  )
}

export default Loader