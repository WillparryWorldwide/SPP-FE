import React from 'react'

const SmallBox = ({ bg, number, title }) => {
    return (
        <div class="col-lg-3 col-6">
            <div class={`small-box ${bg}`}>
                <div class="inner">
                    <h3>{number}</h3>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default SmallBox