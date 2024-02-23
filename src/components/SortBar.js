

import React, { useState } from "react";

const SortBar = ({ onSort }) => {
    const [sortBy, setSortBy] = useState("price");

    const handleSortChange = (e) => {
        const newSortBy = e.target.value;
        setSortBy(newSortBy);
        if (typeof onSort === "function") {
            // Wywołaj funkcję sortuj
            onSort(newSortBy);
        }
    };

    return (
        <div className="SortBar" >
            Sortuj według:
            <select value={sortBy} onChange={handleSortChange} >
                <option value="price" > Ceny </option>
                < option value="change" > Zmiany </option>
                < option value="name" > Nazwy </option>
            </select>
        </div>
    );
};
