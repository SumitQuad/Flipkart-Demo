import React from "react";
import { Range } from "react-range";


const RangeSlider = ({
    minValue,
    maxValue,
    setMinValue,
    setMaxValue,
}) => {
    const handleMinValueChange = (event) => {
        setMinValue(event.target.value);
    };

    const handleMaxValueChange = (event) => {
        setMaxValue(event.target.value);
    };

    const handleChange = (values) => {
        const [min, max] = values;
        setMinValue(min.toString());
        setMaxValue(max.toString());
    };

    return (
        <div>
            <div className="range-clear" style={{ marginBottom: "20px" }}>
                {minValue !== 0 && maxValue !== 0 && (
                    <div className="button-container">
                        <button>
                            {minValue} - {maxValue}
                        </button>
                        <button className="close-button" onClick={() => {
                            setMinValue(0);
                            setMaxValue(30000);
                        }}>
                            X
                        </button>
                    </div>
                )}
            </div>

            <Range
                values={[parseInt(minValue), parseInt(maxValue)]}
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
                            marginTop: "10px",
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
            <div
                className="mt-4"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                }}
            >
                {minValue === "" ? (
                    <select
                        value={minValue}
                        onChange={handleMinValueChange}
                        style={{ width: "100px" }}
                    >
                        <option value="">&#10003; Min</option>
                        <option value="5000">5000</option>
                        <option value="10000">10000</option>
                        <option value="15000">15000</option>
                        <option value="20000">20000</option>
                        <option value="25000">25000</option>
                        <option value="30000">30000</option>
                    </select>
                ) : (
                    <select
                        value={minValue}
                        onChange={handleMinValueChange}
                        style={{ width: "100px" }}
                    >
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

                <select
                    value={maxValue}
                    onChange={handleMaxValueChange}
                    style={{ width: "100px" }}
                >
                    {maxValue === "" ? (
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
        </div>
    );
};

export default RangeSlider;
