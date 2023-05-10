import React from 'react'

const FormInput = React.forwardRef(({ label, placeholder, required, type, name, onChange, action, icon, value, readonly, iconSize, inputClass, ...rest }, ref) => {
    return (
        <div {...rest}>
            <label htmlFor="">{label}</label>
            <input
                type={type}
                name={name}
                onChange={onChange}
                className={inputClass}
                ref={ref}
                placeholder={placeholder}
                onKeyUp={action}
                readOnly={readonly}
                value={value}
            />
        </div>
    )
})

export default FormInput

FormInput.defaultProps = {
    inputClass: "form-control"
}