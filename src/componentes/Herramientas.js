import React from 'react';

const Herramientas = () => {
    return (
        <div className="row fondo-herramientas py-lg-4 justify-content-center">
            <div className="col-lg-4 align-self-center">
                <p className="h5 text-center">  
                    <img src="/img/herramienta.png" width="100" height="100" className="mr-lg-3 d-inline-block align-center" alt=""/>
                    <strong>Expertos en:</strong>
                </p>
            </div>

            <div className="col-lg-6">
                <div className="row row-cols-2">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"><img src="/img/html-5.png" width="30" height="30" className="mr-lg-3 d-inline-block align-center" alt=""/>
                                <strong>HTML</strong></h5>
                                <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu viverra magna. Nam porttitor dolor ut eleifend accumsan. Mauris sit. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"><img src="/img/css.png" width="30" height="30" className="mr-lg-3 d-inline-block align-center" alt=""/>
                                <strong>CSS</strong></h5>
                                <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu viverra magna. Nam porttitor dolor ut eleifend accumsan. Mauris sit. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"><img src="/img/react.png" width="30" height="30" className="mr-lg-3 d-inline-block align-center" alt=""/>
                                <strong>React</strong></h5>
                                <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu viverra magna. Nam porttitor dolor ut eleifend accumsan. Mauris sit. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-lg-4">
                        <div className="row row-cols-1">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title"><img src="/img/javascript.png" width="30" height="30" className="mr-lg-3 d-inline-block align-center" alt=""/>
                                        <strong>JavasCript</strong></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12  mt-lg-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title"><img src="/img/nodejs.png" width="30" height="30" className="mr-lg-3 d-inline-block align-center" alt=""/>
                                        <strong>NodeJS</strong></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12  mt-lg-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title"><img src="/img/mysql.png" width="30" height="30" className="mr-lg-3 d-inline-block align-center" alt=""/>
                                        <strong>MySQL</strong></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Herramientas;