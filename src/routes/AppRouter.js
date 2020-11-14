import React from "react";
import { Route, Redirect } from "react-router-dom";

import { Login } from "../routes/Login";
import { Signup } from "../routes/Signup";
import { FindPwd } from "../routes/FindPwd";
import { Choose } from "../routes/Choose";

function AppRouter({ isLoggedIn }) {
  return isLoggedIn ? (
    <>
      <Choose />
    </>
  ) : (
    <>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/findpwd">
        <FindPwd />
      </Route>
      <Redirect path="*" to="/" />
    </>
  );
}

export default AppRouter;
