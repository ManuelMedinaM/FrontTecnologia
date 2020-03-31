import React from 'react';

const Info = (props) => {
    return (
        <div  className="card fondo-box mr-lg-3 rounded">
            <div className="card-body text-center">
                <h4 className="card-title">
                <img src={props.imagen} width="60" height="60" className="mr-lg-3 d-inline-block align-center" alt=""/>
                {props.titulo}
                </h4>
                <p className="card-text">
                    {props.text}
                </p>
                <a href="#" className="btn btn-outline-light">More...</a>
            </div>
        </div>
    );
};

export default Info;