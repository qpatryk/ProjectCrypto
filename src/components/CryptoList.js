
import React, { useState } from "react";
import CryptoCard from "./CryptoCard";

const CryptoList = ({ data }) => {
    const [sortBy, setSortBy] = useState("price");

    const handleSort = (newSortBy) => {
        // Sortuj dane
        const sortedData = data.sort((a, b) => {
            if (sortBy === "price") {
                return a.price - b.price;
            } else if (sortBy === "change") {
                return a.change - b.change;
            } else if (sortBy === "name") {
                return a.name.localeCompare(b.name);
            }
            return 0;
        });

        setSortBy(newSortBy);
    };

    return (
        <div className="CryptoList">
            <SortBar onSort={handleSort} />
            {data.map((crypto) => (
                <CryptoCard key={crypto.id} crypto={crypto} />
            ))}
        </div>
    );
};

export default CryptoList;