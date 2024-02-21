import "./ItemCountContainer.css";
function Count({ addOne, subOne, count }) {
  return (
    <>
      <div className="Count">
        <button onClick={addOne}>+</button>
        <h4>{count}</h4>
        <button onClick={subOne}>-</button>
      </div>
    </>
  );
}

export default Count;
