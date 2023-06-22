import React, { useState } from "react";

const SortSection = ({
    filteredWashingMachines,
    setFilteredWashingMachines,
}: any) => {
    const [activeSort, setActiveSort] = useState<string>("popularity");

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
            <p
                className={
                    activeSort === "popularity" ? "active-paragraph grab-cursor" : "grab-cursor"
                }
                onClick={() => sortWashingMachines("popularity")}
            >
                Popularity
            </p>
            <p
                className={
                    activeSort === "lowToHigh" ? "active-paragraph grab-cursor" : "grab-cursor"
                }
                onClick={() => sortWashingMachines("lowToHigh")}
            >
                Price Low To High
            </p>
            <p
                className={
                    activeSort === "highToLow" ? "active-paragraph grab-cursor" : "grab-cursor"
                }
                onClick={() => sortWashingMachines("highToLow")}
            >
                Price High To Low
            </p>
            <p
                className={
                    activeSort === "discount" ? "active-paragraph grab-cursor" : "grab-cursor"
                }
                onClick={() => sortWashingMachines("discount")}
            >
                Discount
            </p>
        </div>
    );
};

export default SortSection;
