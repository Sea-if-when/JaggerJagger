import React from 'react';
import { Counter } from './features/counter/Counter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { RegisterPage } from './features/auth/register';
import { LoginPage } from './features/auth/login';
import { ForgotPasswordPage } from './features/auth/forgot_password';
import { ResetPasswordPage } from './features/auth/reset_password';
import { WebsitePage } from './features/website/website';

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/reset">
          <ResetPasswordPage />
        </Route>
        <Route path="/forgot">
          <ForgotPasswordPage />
        </Route>
        <Route path="/">
          <WebsitePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
