import React from 'react'

const FormInput = React.forwardRef(({ label, placeholder, required, type, icon, iconSize, ...rest }, ref) => {
    return (
        <div {...rest}>
            <label htmlFor="">{label}</label>
            <input
                type={type}
                class="form-control"
                ref={ref}
                placeholder={placeholder}
            />
        </div>
    )
})

export default FormInput