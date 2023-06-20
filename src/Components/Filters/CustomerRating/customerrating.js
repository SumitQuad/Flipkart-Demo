import React from "react";

const CustomerRatingFilter = ({ selectedRatings, setSelectedRatings }) => {
    if (!Array.isArray(selectedRatings)) {
        return null;
    }

    const handleRatingFilterChange = (rating) => {
        setSelectedRatings((prevRatings) =>
            prevRatings.includes(rating)
                ? prevRatings.filter((r) => r !== rating)
                : [...prevRatings, rating]
        );
    };

    return (
        <div style={{ marginTop: "40px" }}>
            <h6>Customer Rating</h6>
            <label>
                <input
                    type="checkbox"
                    className="grab-cursor"
                    style={{ marginRight: "10px" }}
                    checked={selectedRatings.includes("5")}
                    onChange={() => handleRatingFilterChange("5")}
                />
                5 & above
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    className="grab-cursor"
                    style={{ marginRight: "10px" }}
                    checked={selectedRatings.includes("4")}
                    onChange={() => handleRatingFilterChange("4")}
                />
                4 & above
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    className="grab-cursor"
                    style={{ marginRight: "10px" }}
                    checked={selectedRatings.includes("3")}
                    onChange={() => handleRatingFilterChange("3")}
                />
                3 & above
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    className="grab-cursor"
                    style={{ marginRight: "10px" }}
                    checked={selectedRatings.includes("2")}
                    onChange={() => handleRatingFilterChange("2")}
                />
                2 & above
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    className="grab-cursor"
                    style={{ marginRight: "10px" }}
                    checked={selectedRatings.includes("1")}
                    onChange={() => handleRatingFilterChange("1")}
                />
                1 & above
            </label>
            <br />
        </div>
    );
};

export default CustomerRatingFilter;
