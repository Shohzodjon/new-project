import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import MainComponent from "./components/main-component/MainComponet";
import SignUp from "./components/sign-up/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/maincomponent" element={<MainComponent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
