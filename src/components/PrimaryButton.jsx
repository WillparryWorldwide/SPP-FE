import React from 'react'

const PrimaryButton = ({type, title, className, ...rest}) => {
    return (
        <div className="col-4">
            <button type={type} className={className} {...rest}>{title}</button>
        </div>
    )
}

export default PrimaryButton