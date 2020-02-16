import React from "react";

// Set up all routes in App
import { Route } from "react-router-dom";

// Using AppWrapper to set font and background for the app
import { AppWrapper } from "bushido-strap";

// Importing all routes
import PrivateRoute from "./components/PrivateRoute";
import Register from "./views/Auth/Register";
import Login from "./views/Auth/Login";
import Dashboard from "./views/Dashboard";

// Using Web Font Loader for google fonts
import WebFont from "webfontloader";

// setting our font variables
const h_font = "Comfortaa";
const r_font = "Montserrat";

// using WebFont to easily access Google fonts
WebFont.load({
  google: {
    families: [h_font, r_font]
  }
});

const App = () => {
  return (
    <AppWrapper head_font={h_font} font={r_font}>
      <PrivateRoute path="/" exact component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </AppWrapper>
  );
};

export default App;
