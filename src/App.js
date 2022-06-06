import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./components/Products/Product/Product";

function App() {
  return (
    <div className="App">
      {
        // Code here
        <>
          <Navbar />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="products/*" element={<Products />}>
              <Route path=":id" element={<Product />} />
            </Route>
          </Routes>
        </>
      }
    </div>
  );
}

export default App;
