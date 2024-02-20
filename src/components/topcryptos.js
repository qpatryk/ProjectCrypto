import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const API_URL = "wss://api.coingecko.com/v3/websocket";

function TopCryptos() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const socket = io(API_URL, { transports: ["websocket"] });

        socket.on("connect", () => {
            console.log("Połączono z WebSocketem CoinGecko");

            // Subskrybuj strumień danych dla wybranych kryptowalut
            const symbols = ['BTC', 'ETH']; // Dostosuj symbole do swoich potrzeb
            socket.emit("subscribe", symbols.map((symbol) => `ticker:${symbol}-USD`));
        });

        socket.on("ticker", (data) => {
            const tickerData = data.data;
            const livePrices = tickerData.map((ticker) => {
                return {
                    symbol: ticker.id,
                    live_price: ticker.last,
                };
            });

            // Uaktualnij stan komponentu z nowymi cenami live
            setData((prevState) => {
                const updatedData = prevState.map((coin) => {
                    const livePrice = livePrices.find((price) => price.symbol === coin.symbol);
                    if (livePrice) {
                        return {
                            ...coin,
                            live_price: livePrice.live_price,
                        };
                    }
                    return coin;
                });
                return updatedData;
            });
        });

        return () => {
            socket.close();
        };
    }, []);

    // ...

    return (
        <div>
            {data.map((coin) => (
                <p key={coin.symbol}>{coin.symbol}: {coin.live_price}</p>
            ))}
        </div>
    );
}

export default TopCryptos;
