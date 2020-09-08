import React, { Component } from "react";
import Image from "./Image";
import welcome from "../assets/image/welcome.png";
import "../assets/css/main.css";
import Paginacion from "./Paginación";

class Resultado extends Component {
  mostrarImagenes = () => {
    const imagenes = this.props.imagenes;
    if (imagenes.length === 0)
      return (
        <div className="container text-center">
          <img src={welcome} className="welcome" />
        </div>
      );
    console.log(imagenes);
    return (
      <React.Fragment>
        <div className="col-12 p-5 row">
          {imagenes.map((imagen) => (
            <Image key={imagen.id} imagen={imagen} />
          ))}
        </div>
        <Paginacion
          paginaAnterior={this.props.paginaAnterior}
          paginaSiguiente={this.props.paginaSiguiente}
        />
      </React.Fragment>
    );
  };
  render() {
    return <React.Fragment>{this.mostrarImagenes()} </React.Fragment>;
  }
}

export default Resultado;
