import React, { useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import { Login } from "./routes/Login";

import { Loader } from "./components/Loader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return (
    <>
      <Loader loading={loading}></Loader>
      <BrowserRouter basename="/BR/">
        <Link to="/">Login</Link>
        <Link to="/123">Login</Link>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
