import React from 'react'

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm, errors }) => {
    return (
        <div>
            <h4 className='text-center'>Complete el siguiente formulario</h4>
            <form className="mt-2" onSubmit={handleSubmitForm}>
                <div className="mb-3">
                    <label htmlFor="fullname" className="form-label">Nombre completo *</label>
                    <input type="text" className="form-control" name="fullname" id="fullname"  value={dataForm.fullname} onChange={handleChangeInput} />
                    {errors.fullname && <p style={{ color: 'green' }}>{errors.fullname}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono *</label>
                    <input type="text" className="form-control" name="phone" id="phone"  value={dataForm.phone} onChange={handleChangeInput} />
                    {errors.phone && <p style={{ color: 'green' }}>{errors.phone}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Dirección de email *</label>
                    <input type="email" className="form-control" name="email" id="email"  value={dataForm.email} onChange={handleChangeInput} />
                    {errors.email && <p style={{ color: 'green' }}>{errors.email}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="repeatEmail" className="form-label">Repetir email *</label>
                    <input type="email" className="form-control" name="repeatEmail" id="repeatEmail"  value={dataForm.repeatEmail} onChange={handleChangeInput} />
                    {errors.repeatEmail && <p style={{ color: 'green' }}>{errors.repeatEmail}</p>}
                </div>
                <div className="mb-3">
                    <button type="submit" name="enviar" className="btn btn-success">Finalizar Comprar</button>
                </div>
            </form>
        </div>
    )
}

export default FormCheckout