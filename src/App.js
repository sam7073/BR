import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { Loader } from "./components/Loader";
import { Footer } from "./components/Footer";
import "./App.css";

import styled from "styled-components";
import AppRouter from "./routes/AppRouter";

import { authService } from "./fb";

const StyledBrowserRouter = styled(BrowserRouter)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 100%;
`;

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [email, setEmail] = useState("");
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setEmail(user.email);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  });
  return (
    <Wrapper>
      <StyledBrowserRouter basename="/BR/">
        {init ? (
          <AppRouter isLoggedIn={isLoggedIn} email={email} />
        ) : (
          <Loader loading />
        )}
      </StyledBrowserRouter>
      <Footer />
    </Wrapper>
  );
}

export default App;
