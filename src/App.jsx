import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import ItemCountContainer from "./components/common/ItemCountContainer/ItemCountContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/pages/CartContainer/CartContainer";
import { Layout } from "./components/layout/NavBarContainer/Layout";
import CheckoutContainer from "./components/pages/Checkout/CheckoutContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
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
            <Route path="/Checkout" element={<CheckoutContainer />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
