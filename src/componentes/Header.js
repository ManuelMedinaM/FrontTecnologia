import React,{Component} from 'react';

export default class Header extends Component {
   render() {
       let ScrollUp={
        transform: 'translateY(-41px)',
        transition:'all .3s ease',

       }
       let ScrollDown={
        transition:'all .3s ease',
        top:'0px'
       }
      let Accion = ()=>{
           if(!this.props.scrolled || this.props.detected ){
               return ScrollDown;
           }else{
            return ScrollUp;
           }
           return null;
       }
        return (
        <div  className="row">
            <div className="col-lg-12">
                <nav style={Accion()} className="pb-lg-0 navbar fixed-top navbar-expand-lg navbar-light bg-navegacion">
                    <a className="navbar-brand mr-lg-3" href="#">
                        <img src="/img/holograma.png" width="30" height="30" className="mr-lg-3 d-inline-block align-top" alt=""/>
                        FrontEnd
                    </a>
                    <div className="collapse navbar-collapse  justify-content-end">
                        <ul className="navbar-nav nav-tabs mr-lg-5 no-bordes">
                            <li className="nav-item mr-lg-3">
                                <a className="nav-link white active px-lg-5" href="#">Inicio</a>
                            </li>
                            <li className="nav-item mr-lg-3">
                                <a className="nav-link white px-lg-5" href="#">Productos</a>
                            </li>
                            <li className="nav-item mr-lg-3">
                                <a className="nav-link white px-lg-5" href="#">Preguntas frecuentes</a>
                            </li>
                            <li className="nav-item mr-lg-3">
                                <a className="nav-link white px-lg-5" href="#">conocenos</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        );
    }
}
