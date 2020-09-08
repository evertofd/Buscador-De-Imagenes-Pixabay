import React, { Component } from "react";

class Buscador extends Component {
  buscadorRef = React.createRef();

  HandelSubmit = (e) => {
    e.preventDefault();

    //Tomamos el valor del Input y lo enviamos al componente principal
    this.props.datosBusqueda(this.buscadorRef.current.value);
  };
  render() {
    return (
      <form onSubmit={this.HandelSubmit}>
        <div className="row space">
          <div className="form-group col-md-4">
            <input
              ref={this.buscadorRef}
              type="text"
              className="form-control form-control-lg"
              placeholder=" Ejemplo: Carros"
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn-lg btn-block btn-warning"
              value="Buscar.."
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Buscador;
