import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const ShippingForm = () => {
    const [address, setAddress] = useState('');
    const [shippingMethod, setShippingMethod] = useState('');
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        // Aquí puedes manejar el envío de la información
        console.log('Dirección:', address);
        console.log('Método de envío:', shippingMethod);
    };

    return (
        <div className="container mt-5">
            <h2>Información de Envío</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Dirección</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="shippingMethod" className="form-label">Método de Envío</label>
                    <select
                        className="form-select"
                        id="shippingMethod"
                        value={shippingMethod}
                        onChange={(e) => setShippingMethod(e.target.value)}
                        required
                    >
                        <option value="">Seleccione un método</option>
                        <option value="standard">Envío Estándar</option>
                        <option value="express">Envío Exprés</option>
                        <option value="pickup">Recogida en Tienda</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" disabled={sent}>
                    {sent ? "Enviado" : "Enviar"}
                </button>
                {sent && (
                    <div className="alert alert-success mt-3" role="alert">
                        ¡Información de envío enviada!
                    </div>
                )}
            </form>
        </div>
    );
};

export default ShippingForm;