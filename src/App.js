import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UpdateCase from "./Pages/UpdateCase";
import RegisterCase from "./Pages/RegisterCase";
import ViewCases from "./Pages/ViewCases";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import AboutUs from "./Pages/AboutUs";
import UserInfo from "./Pages/UserInfo";
import Private from "./Routes/Private";
import Public from "./Routes/Public";

function App() {
  return (
    <div className="App font-ubantu select-none">
      <Header />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route
          path={`/login`}
          element={
            <Public>
              <Login />
            </Public>
          }
        />
        <Route
          path={`/register`}
          element={
            <Public>
              <Register />
            </Public>
          }
        />
        <Route
          path={`/updateCase/:id`}
          element={
            <Private>
              <UpdateCase />
            </Private>
          }
        />
        <Route
          path={`/registerCase`}
          element={
            <Private>
              <RegisterCase />
            </Private>
          }
        />
        <Route
          path={`/viewCases/:page`}
          element={
            <Private>
              <ViewCases />
            </Private>
          }
        />
        <Route path={`/aboutUs`} element={<AboutUs />} />
        <Route
          path={`/user`}
          element={
            <Private>
              <UserInfo />
            </Private>
          }
        />
        <Route path={`/404`} element={<Error />} />
        <Route path={`*`} element={<Navigate to="/404" />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
