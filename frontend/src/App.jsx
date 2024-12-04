import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";  
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";

const App=() => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout/>} >
            <Route index element={<Home/>} />
            <Route path={"home"} element={<Home/>} />
            <Route path={"registration"} element={<Registration/>} />            
          </Route>
          <Route path="/dashboard" element={<Dashboard/>}>
          <Route index element={<Dashboard/>} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App