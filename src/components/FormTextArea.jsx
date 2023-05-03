import React from 'react'

const FormTextArea = React.forwardRef(({ label, placeholder, inputClass, row, cols, value, ...rest }, ref) => {
    return (
        <div {...rest}>
            <label>{label}</label>
            <textarea ref={ref} placeholder={placeholder} className={inputClass} row={row} cols={cols} value={value}></textarea>
        </div>
    )
})

export default FormTextArea