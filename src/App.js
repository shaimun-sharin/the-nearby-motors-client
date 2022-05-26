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
import Dashboard from "./Pages/Dashboard/Dashboard";
import Form from "./Pages/Home/Form";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddReview from "./Pages/Dashboard/AddReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import AllUsers from "./Pages/Dashboard/AllUsers";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddProduct from "./Pages/Dashboard/AddProduct";

import ManageProducts from "./Pages/Dashboard/ManageProducts";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import NotFound from "./Pages/NotFound/Notfound";
import Payment from "./Pages/Dashboard/Payment";

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

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <AllUsers></AllUsers>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProducts"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageOrders"
            element={
              <RequireAdmin>
                <ManageOrders></ManageOrders>
              </RequireAdmin>
            }
          ></Route>
        </Route>

        <Route path="signup" element={<SignUp></SignUp>}></Route>
        <Route path="form" element={<Form></Form>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
