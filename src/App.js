import React, { useEffect, useState } from "react";
import './App.css';
import CustomerRatingFilter from "./Components/Filters/CustomerRating/customerrating";
import WashingMachineList from "./Components/WashingCardDetails/washingcarddetails";
import RangeSlider from './Components/Filters/RangeSlider/RangeSlider';
import SortBySection from "./Components/Sorting/SortBySection/SortBySection";
import data from "./Data/data.json";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(30000);
  const [filteredWashingMachines, setFilteredWashingMachines] = useState(data);
  const [sortedWashingMachines, setSortedWashingMachines] = useState([]);
  const [filterpopularity, setFilterPopularity] = useState([]);
  const [activeSort, setActiveSort] = useState("popularity");
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [showDiscounted, setShowDiscounted] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedFamilySizes, setSelectedFamilySizes] = useState([]);

  const handleRatingFilterChange = (rating) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter((r) => r !== rating));
    } else {
      setSelectedRatings([...selectedRatings, rating]);
    }
  };

  const handleBrandFilterChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    }
    else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleFamilySizeFilterChange = (familySize) => {
    if (selectedFamilySizes.includes(familySize)) {
      setSelectedFamilySizes(selectedFamilySizes.filter((size) => size !== familySize));
    } else {
      setSelectedFamilySizes([...selectedFamilySizes, familySize]);
    }
  };

  const handleMinValueChange = (event) => {
    setMinValue(event.target.value);
  };

  const handleMaxValueChange = (event) => {
    setMaxValue(event.target.value);
  };

  const calculateDiscountPercentage = (actualPrice, originalPrice) => {
    if (originalPrice) {
      const discount = originalPrice - actualPrice;
      const discountPercentage = (discount / originalPrice) * 100;
      return Math.round(discountPercentage);
    }
    return null;
  };

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

      if (selectedBrands.length > 0) {
        updatedList = updatedList.filter((data) =>
          selectedBrands.includes(data.brand)
        );
      }

      if (selectedRatings.length > 0) {
        const selectedRatingValue = Math.min(...selectedRatings.map((rating) => parseInt(rating)));

        updatedList = updatedList.filter((data) =>
          parseInt(data.rating.charAt(0)) >= selectedRatingValue
        );
      }

      if (selectedFamilySizes.length > 0) {
        updatedList = updatedList.filter((data) =>
          selectedFamilySizes.includes(data.Familysize)
        );
      }
    }

    setFilteredWashingMachines(updatedList);
    setSortedWashingMachines(updatedList);
    setFilterPopularity(updatedList);
  };

  const sortLowToHigh = () => {
    const sortedList = [...filteredWashingMachines].sort((a, b) => a.price - b.price);
    setSortedWashingMachines(sortedList);
    setActiveSort("lowToHigh");
  };

  const sortHighToLow = () => {
    const sortedList = [...filteredWashingMachines].sort((a, b) => b.price - a.price);
    setSortedWashingMachines(sortedList);
    setActiveSort("highToLow");
  };

  const handleSortOnPopularity = () => {
    const sortedList = [...filteredWashingMachines].sort((a, b) => {
      const ratingA = parseFloat(a.rating);
      const ratingB = parseFloat(b.rating);
      return ratingB - ratingA;
    });
    setSortedWashingMachines(sortedList);
    setActiveSort("popularity");
  };

  const sortDiscounted = () => {
    const sortedList = [...filteredWashingMachines].sort((a, b) => {
      const discountPercentageA = calculateDiscountPercentage(a.price, a.originalprice);
      const discountPercentageB = calculateDiscountPercentage(b.price, b.originalprice);
      return discountPercentageB - discountPercentageA;
    });
    setSortedWashingMachines(sortedList);
    setActiveSort("discount");
  };

  const handleChange = (values) => {
    setMinValue(values[0].toString());
    setMaxValue(values[1].toString());
  };

  useEffect(() => {
    applyFilter();
  }, [minValue, maxValue, selectedRatings, selectedBrands, selectedFamilySizes]);

  return (
    <div className="App">
      <Container fluid className="mt-2">
        <Row>
          <Col lg={3}>
            <Card className="card-input">
              <h3>Filters</h3>
              <hr />

              <h6>Price</h6>
              <div>
                <RangeSlider
                  minValue={minValue}
                  maxValue={maxValue}
                  handleMinValueChange={handleMinValueChange}
                  handleMaxValueChange={handleMaxValueChange}
                  handleChange={handleChange}
                />
              </div>
              <>
                <CustomerRatingFilter
                  selectedRatings={selectedRatings}
                  handleRatingFilterChange={handleRatingFilterChange}
                />
              </>
            </Card>
          </Col>
          <Col lg={9}>
            <Card className="p-2">
              <h3 className="card-heading">Washing Machines <span>(Showing 1 – 13 products of {data.length} products)</span></h3>
              <div className="sort-container">
                <SortBySection
                  activeSort={activeSort}
                  handleSortOnPopularity={handleSortOnPopularity}
                  sortLowToHigh={sortLowToHigh}
                  sortHighToLow={sortHighToLow}
                  sortDiscounted={sortDiscounted}
                />

              </div>

              <Container>
                <WashingMachineList washingMachines={sortedWashingMachines} />
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
