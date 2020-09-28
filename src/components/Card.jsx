import React from 'react';

const Card = (props) => {
    return (
        <div className="card border-0 text-center ">
            <img className="card-img-top" src={props.img} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text ">{props.description}</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    )
}

export default Card;