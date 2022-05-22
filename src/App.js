import { Route, Routes } from "react-router-dom";
import "./App.css";
import Conatct from "./Pages/Home/Conatct";
import Home from "./Pages/Home/Home";
import Summary from "./Pages/Home/Summary";
import Login from "./Pages/Login/Login";
import Header from "./Pages/Shared/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="summary" element={<Summary></Summary>}></Route>
        <Route path="contact" element={<Conatct></Conatct>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
