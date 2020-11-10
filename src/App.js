import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Login } from "./routes/Login";
import { Signup } from "./routes/Signup";
import { FindPwd } from "./routes/FindPwd";
import { Choose } from "./routes/Choose";

import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";
import "./App.css";

import styled from "styled-components";

const StyledBrowserRouter = styled(BrowserRouter)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
        <StyledBrowserRouter basename="/BR/">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/findpwd">
              <FindPwd />
            </Route>
            <Route path="/choose">
              <Choose />
            </Route>
          </Switch>
          <Footer></Footer>
        </StyledBrowserRouter>
      )}
    </>
  );
}

export default App;
