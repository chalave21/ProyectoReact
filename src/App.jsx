import NavBar from "./components/layout/NavBarContainer/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import ItemCountContainer from "./components/common/ItemCountContainer/ItemCountContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Saludos desde ItemListContainer" />
      <ItemCountContainer />
    </>
  );
}

export default App;
