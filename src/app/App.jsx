import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.scss";
import Map from "../containers/Map/map";
import Weather from "../containers/Weather/weather";
import Footer from "../containers/Footer/footer";
import Login from "../containers/Login/login";

function App() {
  const [location, setLocation] = useState("Bangalore"); // default location
  const routeLocation = useLocation();

  return (
    <>
      <div className="app">
        {routeLocation.pathname === "/Login" && <Login />}
        <Weather setLocation={setLocation} />
        <Map location={location} />
        <Footer />
      </div>
    </>
  );
}

export default App;
