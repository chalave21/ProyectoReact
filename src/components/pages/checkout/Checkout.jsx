function Checkout({ envioDeFormulario, capturaNombre }) {
  return (
    <>
      <form onSubmit={envioDeFormulario}>
        <input onChange={capturaNombre} type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Checkout;
