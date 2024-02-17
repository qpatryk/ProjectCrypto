import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopCryptos from "../components/TopCryptos";
import LoginForm from "../components/LoginForm";
import ResetPassword from "../components/ResetPassword";

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <Router>
            <div>
                <TopCryptos user={user} />
                <Route path="/login" exact>
                    <LoginForm setUser={setUser} />
                </Route>
                <Route path="/reset-password" exact>
                    <ResetPassword />
                </Route>
            </div>
        </Router>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
