import React from "react";
import LoginPage from "./pages/login/login";
// import TrackTime from "./pages/track/track";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUpPage from "./pages/signup/signUpPage";
function App() {
  return (
    <div>
      {/* <TrackTime /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
