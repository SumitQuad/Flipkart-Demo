import React, { useState } from "react";

const SortSection = ({
    filteredWashingMachines,
    setFilteredWashingMachines,
}: any) => {
    const [activeSort, setActiveSort] = useState<string>("popularity");

    const sortLowToHigh = () => {
        const sortedList = [...filteredWashingMachines].sort(
            (a, b) => a.price - b.price
        );
        setFilteredWashingMachines(sortedList);
        setActiveSort("lowToHigh");
    };

    const sortHighToLow = () => {
        const sortedList = [...filteredWashingMachines].sort(
            (a, b) => b.price - a.price
        );
        setFilteredWashingMachines(sortedList);
        setActiveSort("highToLow");
    };

    const handleSortOnPopularity = () => {
        const sortedList = [...filteredWashingMachines].sort((a, b) => {
            const ratingA = parseFloat(a.rating);
            const ratingB = parseFloat(b.rating);
            return ratingB - ratingA;
        });
        setFilteredWashingMachines(sortedList);
        setActiveSort("popularity");
    };

    const sortDiscounted = () => {
        const sortedList = [...filteredWashingMachines].sort((a, b) => {
            const discountPercentageA =
                calculateDiscountPercentage(a.price, a.originalprice) || 0;
            const discountPercentageB =
                calculateDiscountPercentage(b.price, b.originalprice) || 0;
            return discountPercentageB - discountPercentageA;
        });
        setFilteredWashingMachines(sortedList);
        setActiveSort("discount");
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
                onClick={handleSortOnPopularity}
            >
                Popularity
            </p>
            <p
                className={
                    activeSort === "lowToHigh" ? "active-paragraph grab-cursor" : "grab-cursor"
                }
                onClick={sortLowToHigh}
            >
                Price Low To High
            </p>
            <p
                className={
                    activeSort === "highToLow" ? "active-paragraph grab-cursor" : "grab-cursor"
                }
                onClick={sortHighToLow}
            >
                Price High To Low
            </p>
            <p
                className={
                    activeSort === "discount" ? "active-paragraph grab-cursor" : "grab-cursor"
                }
                onClick={sortDiscounted}
            >
                Discount
            </p>
        </div>
    );
};

export default SortSection;
