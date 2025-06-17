import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PaymentMethods = () => {
    return (
        <div className="container mt-4">
            <h2>Métodos de Pago</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="paymentMethod">Selecciona un método de pago:</label>
                    <select className="form-control" id="paymentMethod" required>
                        <option value="">Seleccione...</option>
                        <option value="creditCard">Tarjeta de Crédito</option>
                        <option value="paypal">PayPal</option>
                        <option value="bankTransfer">Transferencia Bancaria</option>
                    </select>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="cardNumber">Número de Tarjeta:</label>
                    <input type="text" className="form-control" id="cardNumber" placeholder="Ingrese el número de tarjeta" required />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="expiryDate">Fecha de Expiración:</label>
                    <input type="month" className="form-control" id="expiryDate" required />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="cvv">CVV:</label>
                    <input type="text" className="form-control" id="cvv" placeholder="Ingrese el CVV" required />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Confirmar Pago</button>
            </form>
        </div>
    );
};

export default PaymentMethods;