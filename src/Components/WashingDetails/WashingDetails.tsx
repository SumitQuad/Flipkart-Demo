import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./WashingDetails.css";

interface WashingMachine {
    id: number;
    name: string;
    price: number;
    originalprice: number;
    images: string;
    imagestwo: string;
    rating: string;
    reviews: number;
    speed: string;
    warranty: string;
    delivery: string;
    Familysize: string;
}

const WashingDetails = ({ washingMachines }: any) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage: number = 2;

    const calculateDiscountPercentage = (price: number, originalPrice: number): number => {
        // Calculate the discount percentage
        const discount: number = originalPrice - price;
        const discountPercentage: number = (discount / originalPrice) * 100;
        return Math.round(discountPercentage);
    };

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem: number = currentPage * itemsPerPage;
    const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
    const currentItems: WashingMachine[] = washingMachines.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages: number = Math.ceil(washingMachines.length / itemsPerPage);
    const pageNumbers: number[] = Array.from({ length: totalPages }, (_, index) => index + 1);


    return (
        <div>
            {currentItems.length === 0 ? (
                <div style={{ textAlign: "center", fontSize: "40px" }}>No Products available</div>
            ) : (
                currentItems.map((wash) => {
                    const discountPercentage: number = calculateDiscountPercentage(
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
                                        <p style={{ fontSize: "12px", fontWeight: "bold" }}>
                                            Upto 2200 off on Exchange
                                        </p>
                                    </Col>
                                    <Col lg={3}>
                                        <img src={wash.imagestwo} alt="fassured" />
                                    </Col>
                                </Row>
                                <hr />
                            </Container>
                        </div>
                    );
                })
            )}

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

export default WashingDetails;
