import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        // Wysyłanie danych logowania do serwera
        axios
            .post("/api/login", { username, password })
            .then((response) => {
                // Obsługa udanego logowania
                if (response.status === 200) {
                    // Przekierowanie do strony głównej lub wyświetlenie komunikatu o sukcesie
                    alert("Zalogowano pomyślnie!");
                } else {
                    // Wyświetlenie komunikatu o błędzie
                    alert("Błąd logowania: " + response.data.message);
                }
            })
            .catch((error) => {
                // Obsługa błędów logowania
                console.error(error);
                alert("Wystąpił błąd podczas logowania. Spróbuj ponownie później.");
            });
    };

    return (
        <div className="LoginForm">
            <h2>Logowanie</h2>
            <form onSubmit={handleSubmit}>
                <label for="username">Nazwa użytkownika:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label for="password">Hasło:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Zaloguj się</button>
            </form>
        </div>
    );
}

export default LoginForm;
