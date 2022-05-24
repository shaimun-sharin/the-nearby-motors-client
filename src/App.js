import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home/Home";
import Purchase from "./Pages/Home/Purchase";
import Summary from "./Pages/Home/Summary";
import Contact from "./Pages/Home/Conatct";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import Header from "./Pages/Shared/Header";
import Footer from "./Pages/Shared/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="summary" element={<Summary></Summary>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
        <Route
          path="/product/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
