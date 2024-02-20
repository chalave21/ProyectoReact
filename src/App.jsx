import NavBar from "./components/layout/NavBarContainer/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Saludos desde ItemListContainer" />
    </>
  );
}

export default App;
