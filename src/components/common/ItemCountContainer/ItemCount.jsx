import "./ItemCountContainer.css";
import Tooltip from "@mui/material/Tooltip";
function Count({ addOne, subOne, count, onAdd, stock }) {
  return (
    <>
      <div className="Count">
        {count === stock ? (
          <Tooltip title="No hay mas stock" placement="top-start" arrow={true}>
            <button onClick={addOne}>+</button>
          </Tooltip>
        ) : (
          <button onClick={addOne}>+</button>
        )}
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
