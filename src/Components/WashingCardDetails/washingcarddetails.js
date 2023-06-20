import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./washingcarddetails.css";

const WashingMachineList = ({ washingMachines }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;

    const calculateDiscountPercentage = (price, originalPrice) => {
        // Calculate the discount percentage
        const discount = originalPrice - price;
        const discountPercentage = (discount / originalPrice) * 100;
        return Math.round(discountPercentage);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = washingMachines.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(washingMachines.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div>
            {currentItems.map((wash) => {
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
                                        <p>
                                            <del>{wash.originalprice}</del>
                                        </p>
                                        {discountPercentage && (
                                            <p className="discount-percentage">{discountPercentage}% off</p>
                                        )}
                                    </div>
                                    <p style={{ fontSize: "12px" }}>Free Delivery By Today</p>
                                    <p style={{ fontSize: "12px", lineHeight: "5px", color: "green" }}>
                                        Saver Deal
                                    </p>
                                    <p style={{ fontSize: "12px", fontWeight: "bold" }}>Upto 2200 off on Exchange</p>
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

            <div className="pagination">
                {pageNumbers.map((pageNumber) => (
                    <span
                        key={pageNumber}
                        className={pageNumber === currentPage ? "active" : ""}
                        onClick={() => handlePageChange(pageNumber)}
                    >
                        {pageNumber}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default WashingMachineList;
