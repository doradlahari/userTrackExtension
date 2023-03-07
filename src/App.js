import React from "react";
import LoginPage from "./pages/login/login";
// import TrackTime from "./pages/track/track";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUpPage from "./pages/signup/signUpPage";
import HomePage from "./pages/homePage/homePage";
function App() {
  return (
    <div>
      {/* <TrackTime /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/homepage" element={<HomePage />} />
        </Routes>
      </BrowserRouter> */}
      <HomePage />
    </div>
  );
}

export default App;
