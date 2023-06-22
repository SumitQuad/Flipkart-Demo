import React from "react";

interface Props {
    setMinValue: (value: number) => void;
    setMaxValue: (value: number) => void;
    setSelectedRatings: (ratings: string[]) => void;
}

const ClearButton: React.FC<Props> = ({
    setMinValue,
    setMaxValue,
    setSelectedRatings,
}) => {
    const handleClearFilters = () => {
        setMinValue(0);
        setMaxValue(30000);
        setSelectedRatings([]);
    };

    return (
        <button className="mt-4" onClick={handleClearFilters}>
            Clear Filters
        </button>
    );
};

export default ClearButton;


