import React, { useState } from "react";

const SortSection = ({
    filteredWashingMachines,
    setFilteredWashingMachines,
}: any) => {
    const [activeSort, setActiveSort] = useState<string>("popularity");

    const options = [
        { label: "Popularity", value: "popularity" },
        { label: "Price Low To High", value: "lowToHigh" },
        { label: "Price High To Low", value: "highToLow" },
        { label: "Discount", value: "discount" }
    ];

    const sortWashingMachines = (sortType: string) => {
        let sortedList;

        if (sortType === "lowToHigh") {
            sortedList = [...filteredWashingMachines].sort(
                (a, b) => a.price - b.price
            );
        } else if (sortType === "highToLow") {
            sortedList = [...filteredWashingMachines].sort(
                (a, b) => b.price - a.price
            );
        } else if (sortType === "popularity") {
            sortedList = [...filteredWashingMachines].sort((a, b) => {
                const ratingA = parseFloat(a.rating);
                const ratingB = parseFloat(b.rating);
                return ratingB - ratingA;
            });
        } else if (sortType === "discount") {
            sortedList = [...filteredWashingMachines].sort((a, b) => {
                const discountPercentageA =
                    calculateDiscountPercentage(a.price, a.originalprice) || 0;
                const discountPercentageB =
                    calculateDiscountPercentage(b.price, b.originalprice) || 0;
                return discountPercentageB - discountPercentageA;
            });
        } else {
            return;
        }

        setFilteredWashingMachines(sortedList);
        setActiveSort(sortType);
    };

    const calculateDiscountPercentage = (
        actualPrice: number,
        originalPrice: number
    ): number | null => {
        if (originalPrice) {
            const discount = originalPrice - actualPrice;
            const discountPercentage = (discount / originalPrice) * 100;
            return Math.round(discountPercentage);
        }
        return null;
    };

    return (
        <div className="sort-container">
            <p>Sort By</p>
            <p>
                {options.map(option => (
                    <span
                        key={option.value}
                        className={activeSort === option.value ? "active-paragraph grab-cursor" : "grab-cursor"}
                        onClick={() => sortWashingMachines(option.value)}
                    >
                        {option.label}
                    </span>
                ))}
            </p>
        </div>
    );
};

export default SortSection;
