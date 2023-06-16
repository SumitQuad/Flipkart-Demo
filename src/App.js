import React, { useEffect, useState, useRef } from "react";
import './App.css';
import imageone from "./images/washingmachine1.webp";
import imagetwo from "./images/washingmachine2.webp";
import imagethree from "./images/washingmachine3.webp";
import imagefour from "./images/washingmachine4.webp";
import imagefive from "./images/washingmachine5.webp";
import imagesix from "./images/washingmachine6.webp";
import fassured from "./images/fassured.png";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Range } from "react-range";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



function App() {

  const washingmachine = [
    {
      id: 1,
      name: "Whirlpool 7 kg Magic Clean 5 Star Fully Automatic Top Load Washing Machine Grey  (MAGIC CLEAN 7.0 GENX GREY 5YMW)",
      price: 14990,
      brand: "Whirlpool",
      originalprice: 16990,
      rating: "5.0",
      speed: "740 rpm Max Speed",
      warranty: "2 Years Comprehensive Warranty on Product and 5 Years on Prime Mover and Moto",
      delivery: "Free Delivery By Today",
      images: imageone,
      imagestwo: fassured,
      Familysize: "Large Families",
      item: "new",
      reviews: "5458 rating and 261 reviews"
    },
    {
      id: 2,
      name: "Samsung 7 kg Magic Clean 5 Star Fully Automatic Top Load Washing Machine Grey  (MAGIC CLEAN 7.0 GENX GREY 5YMW)",
      price: 15990,
      brand: "Samsung",
      originalprice: 16990,
      rating: "4.3",
      speed: "740 rpm Max Speed",
      warranty: "2 Years Comprehensive Warranty on Product and 5 Years on Prime Mover and Moto",
      delivery: "Free Delivery By Today",
      images: imagetwo,
      item: "new",
      Familysize: "Family of 4",
      imagestwo: fassured,
      reviews: "5458 rating and 261 reviews"
    },
    {
      id: 3,
      name: "LG 7 kg Magic Clean 5 Star Fully Automatic Top Load Washing Machine Grey  (MAGIC CLEAN 7.0 GENX GREY 5YMW)",
      price: 12290,
      brand: "LG",
      Familysize: "Family of 3",
      originalprice: 14990,
      rating: "4.4",
      speed: "740 rpm Max Speed",
      warranty: "2 Years Comprehensive Warranty on Product and 5 Years on Prime Mover and Moto",
      delivery: "Free Delivery By Today",
      images: imagethree,
      item: "new",
      imagestwo: fassured,
      reviews: "5458 rating and 261 reviews"
    },
    {
      id: 4,
      name: "IFB 7 kg Magic Clean 5 Star Fully Automatic Top Load Washing Machine Grey  (MAGIC CLEAN 7.0 GENX GREY 5YMW)",
      price: 14990,
      brand: "IFB",
      Familysize: "Single Couple",
      rating: "4.5",
      item: "new",
      speed: "740 rpm Max Speed",
      warranty: "2 Years Comprehensive Warranty on Product and 5 Years on Prime Mover and Moto",
      delivery: "Free Delivery By Today",
      images: imagefour,
      imagestwo: fassured,
      reviews: "5458 rating and 261 reviews"
    },
    {
      id: 5,
      name: "Panasonic 7 kg Magic Clean 5 Star Fully Automatic Top Load Washing Machine Grey  (MAGIC CLEAN 7.0 GENX GREY 5YMW)",
      price: 6790,
      brand: "Panasonic",
      rating: "4.6",
      Familysize: "Large Families",
      speed: "740 rpm Max Speed",
      warranty: "2 Years Comprehensive Warranty on Product and 5 Years on Prime Mover and Moto",
      delivery: "Free Delivery By Today",
      images: imagefive,
      imagestwo: fassured,
      reviews: "5458 rating and 261 reviews"
    },
    {
      id: 6,
      name: "Whirlpool 7 kg Magic Clean 5 Star Fully Automatic Top Load Washing Machine Grey  (MAGIC CLEAN 7.0 GENX GREY 5YMW)",
      price: 16990,
      brand: "Whirlpool",
      rating: "3.2",
      Familysize: "Large Families",
      speed: "740 rpm Max Speed",
      warranty: "2 Years Comprehensive Warranty on Product and 5 Years on Prime Mover and Moto",
      delivery: "Free Delivery By Today",
      images: imagesix,
      imagestwo: fassured,
      reviews: "5458 rating and 261 reviews"
    },
    {
      id: 7,
      name: "Whirlpool 7 kg Magic Clean 5 Star Fully Automatic Top Load Washing Machine Grey  (MAGIC CLEAN 7.0 GENX GREY 5YMW)",
      price: 16990,
      brand: "Whirlpool",
      rating: "3.2",
      speed: "740 rpm Max Speed",
      Familysize: "Large Families",
      warranty: "2 Years Comprehensive Warranty on Product and 5 Years on Prime Mover and Moto",
      delivery: "Free Delivery By Today",
      images: imagesix,
      imagestwo: fassured,
      reviews: "5458 rating and 261 reviews"
    },
    {
      id: 8,
      name: "Lg 7 kg Magic Clean 5 Star Fully Automatic Top Load Washing Machine Grey  (MAGIC CLEAN 7.0 GENX GREY 5YMW)",
      price: 16990,
      brand: "LG",
      rating: "2.1",
      Familysize: "Large Families",
      speed: "740 rpm Max Speed",
      warranty: "2 Years Comprehensive Warranty on Product and 5 Years on Prime Mover and Moto",
      delivery: "Free Delivery By Today",
      images: imagesix,
      imagestwo: fassured,
      reviews: "5458 rating and 261 reviews"
    },
    {
      id: 9,
      name: "IFB 7 kg Magic Clean 5 Star Fully Automatic Top Load Washing Machine Grey  (MAGIC CLEAN 7.0 GENX GREY 5YMW)",
      price: 16990,
      brand: "IFB",
      rating: "1.2",
      Familysize: "Large Families",
      speed: "740 rpm Max Speed",
      warranty: "2 Years Comprehensive Warranty on Product and 5 Years on Prime Mover and Moto",
      delivery: "Free Delivery By Today",
      images: imagesix,
      imagestwo: fassured,
      reviews: "5458 rating and 261 reviews"
    },
    {
      id: 10,
      name: "IFB 7 kg Magic Clean 5 Star Fully Automatic Top Load Washing Machine Grey  (MAGIC CLEAN 7.0 GENX GREY 5YMW)",
      price: 26990,
      brand: "IFB",
      rating: "1.2",
      Familysize: "Large Families",
      speed: "740 rpm Max Speed",
      warranty: "2 Years Comprehensive Warranty on Product and 5 Years on Prime Mover and Moto",
      delivery: "Free Delivery By Today",
      images: imagesix,
      imagestwo: fassured,
      reviews: "5458 rating and 261 reviews"
    },
    {
      id: 11,
      name: "IFB 7 kg Magic Clean 5 Star Fully Automatic Top Load Washing Machine Grey  (MAGIC CLEAN 7.0 GENX GREY 5YMW)",
      price: 20000,
      brand: "IFB",
      rating: "1.2",
      Familysize: "Large Families",
      speed: "740 rpm Max Speed",
      warranty: "2 Years Comprehensive Warranty on Product and 5 Years on Prime Mover and Moto",
      delivery: "Free Delivery By Today",
      images: imagesix,
      imagestwo: fassured,
      reviews: "5458 rating and 261 reviews"
    },
    {
      id: 13,
      name: "IFB 7 kg Magic Clean 5 Star Fully Automatic Top Load Washing Machine Grey  (MAGIC CLEAN 7.0 GENX GREY 5YMW)",
      price: 30000,
      brand: "IFB",
      rating: "1.2",
      Familysize: "Large Families",
      speed: "740 rpm Max Speed",
      warranty: "2 Years Comprehensive Warranty on Product and 5 Years on Prime Mover and Moto",
      delivery: "Free Delivery By Today",
      images: imagesix,
      imagestwo: fassured,
      reviews: "5458 rating and 261 reviews"
    },
  ]

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(30000);
  const [filteredWashingMachines, setFilteredWashingMachines] = useState(washingmachine);
  const [sortedWashingMachines, setSortedWashingMachines] = useState([]);
  const [filterpopularity, setFilterPopularity] = useState([]);

  const [activeSort, setActiveSort] = useState("popularity");
  const [value, setValue] = React.useState([0, 30000]);
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
    let updatedList = washingmachine;

    if (showDiscounted) {
      updatedList = updatedList.filter(
        (wash) => wash.originalprice > wash.price
      );
    } else {
      if (minValue && maxValue) {
        updatedList = washingmachine.filter(
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


  const sortonpopularity = () => {
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
                <Range
                  values={[minValue, maxValue]}
                  step={5000}
                  min={0}
                  max={30000}
                  onChange={handleChange}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "6px",
                        background: "#0000FF",
                        marginTop: "10px"
                      }}
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "16px",
                        width: "16px",
                        borderRadius: "50%",
                        background: "green",
                      }}
                    />
                  )}
                />
                <div className="mt-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  {minValue === '' ? (
                    <select value={minValue} onChange={handleMinValueChange} style={{ width: '100px' }}>
                      <option value="">&#10003; Min</option>
                      <option value="5000">5000</option>
                      <option value="10000">10000</option>
                      <option value="15000">15000</option>
                      <option value="20000">20000</option>
                      <option value="25000">25000</option>
                      <option value="30000">30000</option>
                    </select>
                  ) : (
                    <select value={minValue} onChange={handleMinValueChange} style={{ width: '100px' }}>
                      <option value="0">Min</option>
                      <option value="5000">5000</option>
                      <option value="10000">10000</option>
                      <option value="15000">15000</option>
                      <option value="20000">20000</option>
                      <option value="25000">25000</option>
                      <option value="30000">30000</option>
                    </select>
                  )}

                  <p>To</p>

                  <select value={maxValue} onChange={handleMaxValueChange} style={{ width: '100px' }}>
                    {maxValue === '' ? (
                      <option value="">&#10003; MaxValue</option>
                    ) : (
                      <option value="30000">{maxValue ? "MaxValue" : ""}</option>
                    )}
                    <option value="5000">5000</option>
                    <option value="10000">10000</option>
                    <option value="15000">15000</option>
                    <option value="20000">20000</option>
                    <option value="25000">25000</option>
                    <option value="30000">30000</option>
                  </select>
                </div>

                {/* <p className="range-text">Min: {minValue} - Max: {maxValue}</p> */}
              </div>

              <div className="grab-cursor" style={{ marginTop: "20px" }}>
                <h6>Ideal For Family Size</h6>
                <label>
                  <input
                    type="checkbox"
                    className="grab-cursor"
                    style={{ marginRight: "10px" }}
                    checked={selectedFamilySizes.includes("Large Families")}
                    onChange={() => handleFamilySizeFilterChange("Large Families")}
                  />
                  Large Families
                </label>
                <br />

                <label>
                  <input
                    type="checkbox"
                    className="grab-cursor"
                    style={{ marginRight: "10px" }}
                    checked={selectedFamilySizes.includes("Family of 4")}
                    onChange={() => handleFamilySizeFilterChange("Family of 4")}
                  />
                  Family of 4
                </label>
                <br />

                <label>
                  <input
                    type="checkbox"
                    className="grab-cursor"
                    style={{ marginRight: "10px" }}
                    checked={selectedFamilySizes.includes("Family of 3")}
                    onChange={() => handleFamilySizeFilterChange("Family of 3")}
                  />
                  Family of 3
                </label>
                <br />

                <label>
                  <input
                    type="checkbox"
                    className="grab-cursor"
                    style={{ marginRight: "10px" }}
                    checked={selectedFamilySizes.includes("Single Couple")}
                    onChange={() => handleFamilySizeFilterChange("Single Couple")}
                  />
                  Single Couple
                </label>
                <br />
              </div>


              <div style={{ marginTop: "40px" }}>
                <h6>Brand</h6>
                <label>
                  <input
                    type="checkbox"
                    className="grab-cursor"
                    style={{ marginRight: "10px" }}
                    onChange={() => handleBrandFilterChange("Samsung")}
                  />
                  SAMSUNG
                </label>
                <br />

                <label>
                  <input
                    type="checkbox"
                    className="grab-cursor"
                    style={{ marginRight: "10px" }}
                    onChange={() => handleBrandFilterChange("LG")}
                  />
                  LG
                </label>
                <br />

                <label>
                  <input
                    type="checkbox"
                    className="grab-cursor"
                    style={{ marginRight: "10px" }}
                    onChange={() => handleBrandFilterChange("Whirlpool")}
                  />
                  Whirlpool
                </label>
                <br />

                <label>
                  <input
                    type="checkbox"
                    className="grab-cursor"
                    style={{ marginRight: "10px" }}
                    onChange={() => handleBrandFilterChange("IFB")}
                  />
                  IFB
                </label>
                <br />

                <label>
                  <input
                    type="checkbox"
                    className="grab-cursor"
                    style={{ marginRight: "10px" }}
                    onChange={() => handleBrandFilterChange("Panasonic")}
                  />
                  PANASONIC
                </label>
                <br />
              </div>

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
                </label> <br />
                <label>
                  <input
                    type="checkbox"
                    className="grab-cursor"
                    style={{ marginRight: "10px" }}
                    checked={selectedRatings.includes("4")}
                    onChange={() => handleRatingFilterChange("4")}
                  />
                  4 & above
                </label> <br />

                <label>
                  <input
                    type="checkbox"
                    className="grab-cursor"
                    style={{ marginRight: "10px" }}
                    checked={selectedRatings.includes("3")}
                    onChange={() => handleRatingFilterChange("3")}
                  />
                  3 & above
                </label> <br />

                <label>
                  <input
                    type="checkbox"
                    className="grab-cursor"
                    style={{ marginRight: "10px" }}
                    checked={selectedRatings.includes("2")}
                    onChange={() => handleRatingFilterChange("2")}
                  />
                  2 & above
                </label> <br />

                <label>
                  <input
                    type="checkbox"
                    className="grab-cursor"
                    style={{ marginRight: "10px" }}
                    checked={selectedRatings.includes("1")}
                    onChange={() => handleRatingFilterChange("1")}
                  />
                  1 & above
                </label> <br />
              </div>


            </Card>
          </Col>
          <Col lg={9}>
            <Card className="p-2">
              <h3 className="card-heading">Washing Machines <span>(Showing 1 – 24 products of 894 products)</span></h3>
              <div className="sort-container">
                <p>Sort By</p>
                <p className={activeSort === "popularity" ? "active-paragraph grab-cursor" : "grab-cursor"} onClick={sortonpopularity}>
                  Popularity
                </p>
                <p className="grab-cursor">Relevance</p>
                <p className={activeSort === "lowToHigh" ? "active-paragraph grab-cursor" : "grab-cursor"} onClick={sortLowToHigh}>
                  Price Low To High
                </p>
                <p className={activeSort === "highToLow" ? "active-paragraph grab-cursor" : "grab-cursor"} onClick={sortHighToLow}>
                  Price High To Low
                </p>
                <p className="grab-cursor">Newest First</p>
                <p className={activeSort === "discount" ? "active-paragraph grab-cursor" : "grab-cursor"} onClick={sortDiscounted}>
                  Discount
                </p>


              </div>
              {sortedWashingMachines.map((wash) => {
                const discountPercentage = calculateDiscountPercentage(
                  wash.price,
                  wash.originalprice
                );
                return (
                  <div key={wash.id}>
                    <Container>
                      <Row>
                        <Col lg={3} className="image-container">
                          <img src={wash.images} alt="washingmachine" />
                        </Col>
                        <Col lg={4}>
                          <h5>{wash.name}</h5>
                          <div className="button-paragraph-container">
                            <button>{wash.rating}</button>
                            <p>{wash.reviews}</p>
                          </div>
                          <ul className="mt-3">
                            <li>{wash.speed}</li>
                            <li>{wash.warranty}</li>
                            <li>{wash.delivery}</li>
                            <li>{wash.Familysize}</li>
                          </ul>
                        </Col>
                        <Col lg={2}>
                          <h4>{wash.price}</h4>
                          <div className="price-container">
                            <p><del>{wash.originalprice}</del></p>
                            {discountPercentage && (
                              <p className="discount-percentage">{discountPercentage}% off</p>
                            )}

                          </div>
                          <p style={{ fontSize: "12px" }}>Free Delivery By Today</p>
                          <p style={{ fontSize: "12px", lineHeight: "5px", color: "green" }}>Saver Deal</p>
                          <p style={{ fontSize: "12px", fontWeight: "bold" }}>Upto 2200% Exchange</p>
                        </Col>
                        <Col lg={3}>
                          <img src={wash.imagestwo} alt="fassured" />
                        </Col>
                      </Row>
                      <hr />
                    </Container>
                  </div>
                );
              })}
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default App;