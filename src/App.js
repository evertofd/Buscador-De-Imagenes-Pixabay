import React, { Component } from "react";
import Buscador from "./component/Buscador";
import Resultado from "./component/Resultado";

class App extends Component {
  state = {
    termino: "",
    imagenes: [],
    pagina: "",
  };

  scroll = () => {
    const elemento = document.querySelector(".jumbotron");
    elemento.scrollIntoView("smooth", "start");
  };

  paginaAnterior = () => {
    let pagina = this.state.pagina;
    if (pagina === 1) return null;
    pagina--;

    this.setState(
      {
        pagina: pagina,
      },
      () => {
        this.consultarApi();
        this.scroll();
      }
    );
  };

  paginaSiguiente = () => {
    let pagina = this.state.pagina;
    pagina++;

    this.setState(
      {
        pagina: pagina,
      },
      () => {
        this.consultarApi();
        this.scroll();
      }
    );
  };
  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=18164288-b76f0040cf8d7db939e4030de&q=${termino}&per_page=30&page=${pagina}`;

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => this.setState({ imagenes: resultado.hits }));
  };
  datosBusqueda = (termino) => {
    this.setState(
      {
        termino: termino,
        pagina: 1,
      },
      () => {
        this.consultarApi();
      }
    );
  };

  render() {
    return (
      <div className="app container-fluid">
        <div className="jumbotron bg-warnig col-sm-12 r">
          <div>
            <div className="circle"></div>
            <h1>
              <span>Buscador</span>
              <br />
              <span>de</span>
              <br />
              <span>Imagenes</span>
            </h1>
          </div>

          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <div className="row justify-content-center">
          <Resultado
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
            imagenes={this.state.imagenes}
          />
        </div>
      </div>
    );
  }
}

export default App;
