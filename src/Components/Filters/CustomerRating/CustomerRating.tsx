import React, { FC } from "react";

interface CustomerRatingFilterProps {
    selectedRatings: string[];
    setSelectedRatings: React.Dispatch<React.SetStateAction<string[]>>;
}

const CustomerRatingFilter: FC<CustomerRatingFilterProps> = ({
    selectedRatings,
    setSelectedRatings,
}) => {
    if (!Array.isArray(selectedRatings)) {
        return null;
    }

    const ratings = ["5", "4", "3", "2", "1"];

    const handleRatingFilterChange = (rating: string) => {
        setSelectedRatings((prevRatings: string[]) =>
            prevRatings.includes(rating)
                ? prevRatings.filter((r) => r !== rating)
                : [...prevRatings, rating]
        );
    };

    return (
        <div style={{ marginTop: "20px" }}>
            <h6>Customer Rating</h6>
            {ratings.map((rating) => (
                <div key={rating}>
                    <label>
                        <input
                            type="checkbox"
                            className="grab-cursor"
                            style={{ marginRight: "10px" }}
                            checked={selectedRatings.includes(rating)}
                            onChange={() => handleRatingFilterChange(rating)}
                        />
                        {`${rating} & above`}
                    </label>
                    <br />
                </div>
            ))}
        </div>
    );
};

export default CustomerRatingFilter;
