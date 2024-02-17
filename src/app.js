import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import LiveRates from "./components/LiveRates.js";
import TopCryptos.js;
import LoginForm from "../loginform.js";

function App() {
    // ...

    return (
        <div className="App">
      // ...

            <LiveRates />
            <TopCryptos />
            <LoginForm />
        </div>
    );
}

export default App;
