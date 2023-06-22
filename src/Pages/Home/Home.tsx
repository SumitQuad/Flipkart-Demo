import React, { useEffect, useState } from "react";
import "./Home.css";
import CustomerRatingFilter from "../../Components/Filters/CustomerRating/CustomerRating";
import WashingMachineList from "../../Components/WashingDetails/WashingDetails";
import RangeSlider from "../../Components/Filters/RangeSlider/RangeSlider";
import SortBySection from "../../Components/Sorting/SortSection/SortSection";
import ClearButton from "../../Components/Filters/ClearButton/ClearButton";
import data from "../../Data/data.json";
import { Card, Container, Row, Col } from "react-bootstrap";

interface WashingMachine {
    id: number;
    price: number;
    rating: string;
}

function Home() {
    // State variables
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(30000);
    const [filteredWashingMachines, setFilteredWashingMachines] = useState<WashingMachine[]>(data);
    const [selectedRatings, setSelectedRatings] = useState<string[]>([]);

    const applyFilter = () => {
        // Initialize the updated list with the original data
        let updatedList: WashingMachine[] = data;

        if (minValue && maxValue) {
            updatedList = data.filter(
                (item) => item.price >= minValue && item.price <= maxValue
            );
        }

        if (selectedRatings.length > 0) {
            const selectedRatingValue = Math.min(
                ...selectedRatings.map((rating) => parseInt(rating))
            );

            updatedList = updatedList.filter(
                (item) => parseInt(item.rating.charAt(0)) >= selectedRatingValue
            );
        }

        setFilteredWashingMachines(updatedList);
    };


    // Apply filter when inputs change
    useEffect(() => {
        applyFilter();
    }, [minValue, maxValue, selectedRatings]);

    return (
        <div className="App">
            <Container fluid className="mt-2">
                <Row>
                    {/* Filter section */}
                    <Col lg={3} className="sticky-column">
                        <Card className="card-input">
                            <h3>Filters</h3>
                            <hr />

                            <h6>Price</h6>
                            <div>
                                {/* Range slider component */}
                                <RangeSlider
                                    minValue={minValue}
                                    maxValue={maxValue}
                                    setMinValue={setMinValue}
                                    setMaxValue={setMaxValue}
                                />
                            </div>

                            {/* Customer rating filter component */}
                            <CustomerRatingFilter
                                selectedRatings={selectedRatings}
                                setSelectedRatings={setSelectedRatings}
                            />

                            {/* Clear Filters button */}
                            <ClearButton
                                setMinValue={setMinValue}
                                setMaxValue={setMaxValue}
                                setSelectedRatings={setSelectedRatings}
                            />
                        </Card>
                    </Col>

                    {/* Washing machine list */}
                    <Col lg={9}>
                        <Card className="p-2">
                            <h3 className="card-heading">
                                Washing Machines (Showing 1 – {filteredWashingMachines.length} products of {filteredWashingMachines.length} products)
                            </h3>
                            <div className="sort-container">
                                {/* Sort by section */}
                                <SortBySection
                                    filteredWashingMachines={filteredWashingMachines}
                                    setFilteredWashingMachines={setFilteredWashingMachines}
                                />
                            </div>

                            <Container>
                                {/* Washing machine list component */}
                                <WashingMachineList washingMachines={filteredWashingMachines} />
                            </Container>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
