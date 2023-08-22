import About from "./Component/About";
import Categories from "./Component/Categories";
import Details from "./Component/Details";
import NavBar from "./Component/NavBar";
import ProductsList from "./Component/ProductsList";
import Slider from "./Component/Slider";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <br />
              <ProductsList />
            </>
          }
        />
        <Route path="About" element={<About />} />
        <Route path="Categories" element={<Categories />} />
        <Route path="product/:productId" element={<Details />}></Route>
        <Route
          path="Categories/product/:productId"
          element={<Details />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
