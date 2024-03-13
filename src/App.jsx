import NavBar from "./components/layout/NavBarContainer/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import ItemCountContainer from "./components/common/ItemCountContainer/ItemCountContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/pages/CartContainer/CartContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="Saludos desde ItemListContainer" />
            }
          />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/Count" element={<ItemCountContainer />} />
          <Route path="/Detail/:id" element={<ItemDetailContainer />} />
          <Route path="/Cart" element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
