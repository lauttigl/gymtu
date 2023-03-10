import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { NavBar } from "./Components/NavBar/NavBar";
import { About } from "./Components/Pages/About/About";
import { Home } from "./Components/Pages/Home/Home";
import ItemDetail from "./Components/Pages/Item/ItemDetail";
import { Catalog } from "./Components/Pages/Products/Catalog";




function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/nosotros' element={<About/>}/>
    <Route path='/products' element={<Catalog/>}/>
    <Route path='/products/:id' element={<ItemDetail/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
