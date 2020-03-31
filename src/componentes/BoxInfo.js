import React from 'react';
import Info from './Info';

const BoxInfo = () => {
    return (
        <div className="row pb-lg-4 fondo justify-content-center">
            <div className="col-lg-10 text-center">
                <h4 className="white">Servicios</h4>
                <p className="white">es simplemente el texto de relleno de las imprentas y archivos</p>
                <div className="card-group">
                    <Info
                        imagen="/img/notas.png"
                        titulo="Mision"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu consectetur libero. In quis blandit purus. Suspendisse potenti. Suspendisse fermentum ultricies massa, interdum semper risus posuere ut. Integer libero massa, fermentum a magna at, pellentesque tincidunt risus. Duis vel posuere diam."
                    />
                    <Info
                        imagen="/img/binocular.png"
                        titulo="Vision"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu consectetur libero. In quis blandit purus. Suspendisse potenti. Suspendisse fermentum ultricies massa, interdum semper risus posuere ut. Integer libero massa, fermentum a magna at, pellentesque tincidunt risus. Duis vel posuere diam. "
                    />
                    <Info
                        imagen="/img/objetivo.png"
                        titulo="Objetivos"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu consectetur libero. In quis blandit purus. Suspendisse potenti. Suspendisse fermentum ultricies massa, interdum semper risus posuere ut. Integer libero massa, fermentum a magna at, pellentesque tincidunt risus. Duis vel posuere diam."
                    />
                </div>
            </div>
            
        </div>
    );
};

export default BoxInfo;