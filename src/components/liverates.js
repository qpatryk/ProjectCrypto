import React, { useState, useEffect } from "react";

const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

function LiveRates() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(API_URL);
            const jsonData = await response.json();
            setData(jsonData);
        };

        fetchData();
    }, []);

    return (
        <div className="LiveRates">
            <h2>Kursy kryptowalut na żywo</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Symbol</th>
                        <th>Cena (USD)</th>
                        <th>Zmiana (24h)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((coin) => (
                        <tr key={coin.id}>
                            <td>{coin.name}</td>
                            <td>{coin.symbol}</td>
                            <td>${coin.current_price}</td>
                            <td>{coin.price_change_percentage_24h}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LiveRates;
