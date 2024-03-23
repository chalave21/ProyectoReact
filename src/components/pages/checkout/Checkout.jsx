import { Link } from "react-router-dom";
import "./checkout.css";

export const Checkout = ({ envioDeFormulario, capturar, orderId }) => {
  return (
    <div className="checkout-container">
      {orderId ? (
        <div className="checkout-success">
          <h1>¡Gracias por tu compra!</h1>
          <p>Tu número de compra es: {orderId}</p>
          <Link to="/" className="continue-shopping-btn">
            Seguir comprando
          </Link>
        </div>
      ) : (
        <form onSubmit={envioDeFormulario} className="checkout-form">
          <h1>Checkout</h1>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={capturar}
            name="name"
            className="checkout-input"
          />

          <input
            type="text"
            placeholder="Ingresa tu teléfono"
            onChange={capturar}
            name="phone"
            className="checkout-input"
          />

          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            onChange={capturar}
            name="email"
            className="checkout-input"
          />

          <button type="submit" className="checkout-submit-btn">
            Comprar
          </button>
        </form>
      )}
    </div>
  );
};
