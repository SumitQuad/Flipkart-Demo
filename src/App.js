import React, { useEffect, useState } from "react";
import "./App.css";
import CustomerRatingFilter from "./Components/Filters/CustomerRating/customerrating";
import WashingMachineList from "./Components/WashingCardDetails/washingcarddetails";
import RangeSlider from "./Components/Filters/RangeSlider/RangeSlider";
import SortBySection from "./Components/Sorting/SortBySection/SortBySection";
import data from "./Data/data.json";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  // State variables
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(30000);
  const [filteredWashingMachines, setFilteredWashingMachines] = useState(data);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [showDiscounted, setShowDiscounted] = useState(false);

  // Event handlers
  const handleRatingFilterChange = (rating) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter((r) => r !== rating));
    } else {
      setSelectedRatings([...selectedRatings, rating]);
    }
  };

  const handleMinValueChange = (event) => {
    setMinValue(event.target.value);
  };

  const handleMaxValueChange = (event) => {
    setMaxValue(event.target.value);
  };

  // Apply filter based on selected options
  const applyFilter = () => {
    let updatedList = data;

    if (showDiscounted) {
      updatedList = updatedList.filter(
        (wash) => wash.originalprice > wash.price
      );
    } else {
      if (minValue && maxValue) {
        updatedList = data.filter(
          (data) => data.price >= minValue && data.price <= maxValue
        );
      }

      if (selectedRatings.length > 0) {
        const selectedRatingValue = Math.min(
          ...selectedRatings.map((rating) => parseInt(rating))
        );

        updatedList = updatedList.filter(
          (data) => parseInt(data.rating.charAt(0)) >= selectedRatingValue
        );
      }
    }
    setFilteredWashingMachines(updatedList);
  };

  const totalProducts = filteredWashingMachines.length;

  const handleChange = (values) => {
    setMinValue(values[0].toString());
    setMaxValue(values[1].toString());
  };

  const handleClearFilters = () => {
    setMinValue(0);
    setMaxValue(30000);
    setSelectedRatings([]);
    setShowDiscounted(false);
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
                  handleMinValueChange={handleMinValueChange}
                  handleMaxValueChange={handleMaxValueChange}
                  handleChange={handleChange}
                />
              </div>
              <>
                {/* Customer rating filter component */}
                <CustomerRatingFilter
                  selectedRatings={selectedRatings}
                  handleRatingFilterChange={handleRatingFilterChange}
                />
              </>
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
                Washing Machines{" "}
                <span>
                  (Showing 1 – {filteredWashingMachines.length} products of{" "}
                  {totalProducts} products)
                </span>
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
                <WashingMachineList
                  washingMachines={filteredWashingMachines}
                />
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
