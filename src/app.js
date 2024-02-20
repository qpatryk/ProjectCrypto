import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import LoginForm from "../components/LoginForm";
import ResetPassword from "../components/ResetPassword";
//this one works better with switch
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Switch>
                <Route path="../login">
                    <LoginForm onLogin={() => setIsLoggedIn(true)} />
                </Route>
                <Route path="../reset-password">
                    <ResetPassword />
                </Route>
                <Route path="/">
                    {isLoggedIn ? <h1>Witaj!</h1> : <Redirect to="../login" />}
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
