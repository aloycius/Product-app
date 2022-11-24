import Products from "./Components/Products";
import ProductDescription from "./Components/ProductDescription";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route index path="/" element={<Products />}></Route>
              <Route exact path="/ProductDescription" element={<ProductDescription />} ></Route>
            </Routes>
          </BrowserRouter>
      {/* <Products /> */}
    </div>
  );
}

export default App;
