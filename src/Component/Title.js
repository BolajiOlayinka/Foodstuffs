import React from 'react'

export default function Title({name,title}) {
    return (
        <div className="row">
        <div className="col-10 mx-auto my-auto my-2 text-center text-title">
            <h1 className="text-capitalize font-weight-bold mt-5 pt-5">{name}<strong className="textGreen">{title}</strong></h1>
            <div className="text-center mt-0">
                <img src="img/line.png" alt="line"/>
            </div>
        </div>
            
        </div>
    )
}
