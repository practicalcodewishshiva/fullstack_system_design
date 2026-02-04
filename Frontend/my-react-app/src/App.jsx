import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GetName from "./Myntra";
import MensWear from "./Components/MensWear/MensWear";
import FusionWear from "./Components/FusionWear/FusionWear";
import GetMovieList from "./Components/GetMovieList/GetMovieList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyntraDashboard from "./Components/MyntraDashboard/MyntraDashboard";
import Men from "./Components/Men/Men";
import Women from "./Components/Women/Women";
import TrainSearch from "./Components/TrainSearch/TrainSearch";
import TrainList from "./Components/TrainList/TrainList";
import UserSignUp from "./Components/UserSignUp/UserSignUp";
import Login from "./Components/Login/Login";
import BookingSummary from "./Components/BookingSummary/BookingSummary";
import NavBar from "./Components/NavBar/NavBar";
import TransportTabs from "./Components/TransportTabs/TransportTabs";

import DashBoard from "./Components/DashBoard/DashBoard";

const data = "sdfsjsdhf";
function App() {
  const [userName, updateUserName] = useState("Deekshith");
  const [password, updatePassword] = useState("275347625673452");
  function handleUserName(event) {
    updateUserName(event.target.value);
  }

  function handlePassword(event) {
    updatePassword(event.target.value);
    console.log("WPL");
    console.log("Smriti Mandhana");
  }

  function handleLogin() {
    console.log(userName, password, "Virat Kohli");
    console.log(userName, password, "RCB");
  }

  return (
    <>
      Hi this is Shiva iM. made some changes
      
      shalini chnaes also required main
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<TransportTabs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-signup" element={<UserSignUp />} />
          <Route path="/train-search" element={<TrainSearch />} />
          <Route path="/train-list" element={<TrainList />} />
          <Route path="/BookingSummary" element={<BookingSummary />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
