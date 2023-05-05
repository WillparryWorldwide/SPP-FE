import React from 'react'

const FormTextArea = React.forwardRef(({ label, placeholder, id, inputClass, onChange, row, cols, value, ...rest }, ref) => {
    return (
        <div {...rest} id={id}>
            <label>{label}</label>
            <textarea ref={ref} onChange={onChange} placeholder={placeholder} className={inputClass} row={row} cols={cols} value={value}></textarea>
        </div>
    )
})

export default FormTextArea