import React,{Component} from 'react';
import BoxInfo from './BoxInfo';
import Presentacion from './Presentacion';
import Estadisticas from './Estadisticas';
import Explicacion from './Explicacion';
import Herramientas from './Herramientas';
import './Front.css'

class Front extends Component {



    render() {
        return (
        <React.Fragment>
        <div className="row fondo justify-content-center align-items-center altura-cont">
            <div className="text-center white col-lg-5">
                <h5 className="mb-lg-5"> 
                    <img src="/img/holograma.png" width="60" height="60" className="mr-lg-3 d-inline-block align-center" alt=""/>
                    FrontEnd 
                </h5>
                <h1 className="tamaño-titulo">
                    Expertos en tecnologia digital y servicios
                </h1>
                <button type="button" className="mt-lg-5 btn btn-outline-light">Conocenos y cuentanos sobre ti &rarr;</button>
            </div>
        </div>            
        <BoxInfo/>
        <Presentacion/>
        <Estadisticas/>
        <Explicacion/>
        <Herramientas/>
        </React.Fragment>
        );
    }
}
export default Front;