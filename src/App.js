import React, { useEffect, useState } from "react";
import "./App.css";
import CustomerRatingFilter from "./Components/Filters/CustomerRating/customerrating";
import WashingMachineList from "./Components/WashingCardDetails/washingcarddetails";
import RangeSlider from "./Components/Filters/RangeSlider/RangeSlider";
import SortBySection from "./Components/Sorting/SortBySection/SortBySection";
import data from "./Data/data.json";
import { Card, Container, Row, Col } from "react-bootstrap";

function App() {

  // State variables
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(30000);
  const [filteredWashingMachines, setFilteredWashingMachines] = useState(data);
  const [selectedRatings, setSelectedRatings] = useState([]);


  const applyFilter = () => {
    // Initialize the updated list with the original data
    let updatedList = data;

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

  const totalProducts = filteredWashingMachines.length;

  // Clear all filters
  const handleClearFilters = () => {
    setMinValue(0);
    setMaxValue(30000);
    setSelectedRatings([]);
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
              <button className="mt-4" onClick={handleClearFilters}>
                Clear Filters
              </button>
            </Card>
          </Col>


          {/* Washing machine list */}
          <Col lg={9}>
            <Card className="p-2">
              <h3 className="card-heading">
                Washing Machines (Showing 1 – {filteredWashingMachines.length} products of {totalProducts} products)
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

export default App;
