import "./ItemCountContainer.css";
function Count({ addOne, subOne, count, onAdd }) {
  return (
    <>
      <div className="Count">
        <button onClick={addOne}>+</button>
        <h4>{count}</h4>
        <button onClick={subOne}>-</button>
        <button onClick={() => onAdd(count)} variant="outlined">
          agregar al carrito
        </button>
      </div>
    </>
  );
}

export default Count;
