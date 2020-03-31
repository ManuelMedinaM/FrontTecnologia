import React from 'react';

const Estadisticas = () => {
    return (
        <React.Fragment>
            <div className="row justify-content-center pt-lg-4">
                <div className="col-lg-4 text-center align-self-center">
                <p className="h3"> 
                    <img src="/img/pensando.png" width="90" height="90" className="mr-lg-3 d-inline-block align-center" alt=""/><strong>
                    Pasos
                    </strong>
                    
                </p>
                </div>
                <div className="col-lg-5 text-justify">
                    <p className="h5 "><img src="/img/editar.png" width="60" height="60" className="mr-lg-3 d-inline-block align-center" alt=""/><strong>Diseño</strong></p>
                    <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición </p>
                    
                    <p className="h5 "><img src="/img/computadora.png" width="60" height="60" className="mr-lg-3 d-inline-block align-center" alt=""/><strong>Programar</strong></p>
                    <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 text-center">
                    <img src="/img/estadistica.png" height="400" alt="estadisticas"/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Estadisticas;