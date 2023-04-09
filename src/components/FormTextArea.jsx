import React from 'react'

const FormTextArea = React.forwardRef(({ label, placeholder, row, cols, ...rest }, ref) => {
    return (
        <div {...rest}>
            <label>{label}</label>
            <textarea ref={ref} placeholder={placeholder} className='form-control' row={row} cols={cols}></textarea>
        </div>
    )
})

export default FormTextArea