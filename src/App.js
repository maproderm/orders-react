//Agregar Link al lado de Route
import { Routes, Route} from "react-router-dom";

import { Home } from "./components/Home";
import { Order } from "./components/orders/Order";

function App() {
  return (
    <div className="bg-slate-200">

      

      <div className="max-w-12xl mx-auto- min-h-screen">
        <br/>
        
        {/* <nav className="text-center">
          <ul className="flex">
            <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
              <Link to="/">Inicio</Link>
            </li>
            <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
              <Link to="/orders">Otro Botón</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/orders" element={<Order/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
