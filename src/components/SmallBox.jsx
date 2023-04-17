import React from 'react'

const SmallBox = ({ bg, number, title }) => {
    return (
        <div className="col-lg-3 col-6">
            <div className={`small-box ${bg}`}>
                <div className="inner">
                    <h3>{number}</h3>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default SmallBox