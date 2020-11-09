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
      {loading ? (
        <Loader loading={loading}></Loader>
      ) : (
        <BrowserRouter basename="/BR/">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/choose">choose page</Route>
          </Switch>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
