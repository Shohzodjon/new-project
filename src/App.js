import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import MainComponent from "./components/main-component/MainComponet";
import SignUp from "./components/sign-up/SignUp";
import StateManage from "./components/main-component/right-side/StateManage";
import { PacmanLoader } from "react-spinners";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <section className="App">
      {loading ? (
        <div className="loader--page">
          <PacmanLoader color={"#6CF5DA"} loading={loading} size={80} />
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/maincomponent" element={<MainComponent />}>
              <Route path="store" element={<StateManage />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </section>
  );
}

export default App;
