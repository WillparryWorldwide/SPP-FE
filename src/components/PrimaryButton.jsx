import React from 'react'

const PrimaryButton = ({type, title, className, ...rest}) => {
    return (
        <button type={type} className={className} {...rest}>{title}</button>
    )
}

export default PrimaryButton