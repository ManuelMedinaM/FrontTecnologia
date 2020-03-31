import React from 'react';

const Explicacion = () => {
    return (
        <div className="row fondo-explicacion justify-content-center py-lg-4">
            <div className="col-lg-12 text-center">
                <h4>Explicacion de metodologia</h4>
            </div>
            <div className="mt-lg-3 align-self-center col-lg-5 text-justify">
                <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición </p>
                <p>
                Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el.
                </p>
                
                <button type="button" className="btn btn-light">Sigue para leer mas</button>
            </div>
            <div className="col-lg-5 text-center align-self-center">
                <img src="/img/explicacion.jpg" width="600" alt="imagen explicativa"/>
            </div>
        </div>
    );
};

export default Explicacion;