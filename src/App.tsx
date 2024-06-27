import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./COMPONENTS/LOGIN/Login";
import ADD from "./COMPONENTS/ADD/add";
<<<<<<< HEAD
=======
import Create from "./COMPONENTS/create/create";
import Cart from "./COMPONENTS/Cart/Cart";

>>>>>>> 88631b4 (second commit)

function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/home" element={<ADD />}></Route>
<<<<<<< HEAD
=======
        <Route path="/create" element={<Create />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        
>>>>>>> 88631b4 (second commit)
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;