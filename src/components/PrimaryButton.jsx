import React from 'react'

const PrimaryButton = ({type, title, className, ...rest}) => {
    return (
        <div class="col-4">
            <button type={type} class={className} {...rest}>{title}</button>
        </div>
    )
}

export default PrimaryButton