import React from 'react'

const FormInput = React.forwardRef(({ label, placeholder, required, type, action, icon, readonly, iconSize, ...rest }, ref) => {
    return (
        <div {...rest}>
            <label htmlFor="">{label}</label>
            <input
                type={type}
                class="form-control"
                ref={ref}
                placeholder={placeholder}
                onKeyUp={action}
                readOnly={readonly}
            />
        </div>
    )
})

export default FormInput