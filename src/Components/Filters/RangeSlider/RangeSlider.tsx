import React from "react";
import { Range } from "react-range";

interface RangeSliderProps {
  minValue: number;
  maxValue: number;
  setMinValue: React.Dispatch<React.SetStateAction<number>>;
  setMaxValue: React.Dispatch<React.SetStateAction<number>>;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
}) => {
  const handleMinValueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMinValue(parseInt(event.target.value));
  };

  const handleMaxValueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMaxValue(parseInt(event.target.value));
  };

  const handleChange = (values: number[]) => {
    const [min, max] = values;
    setMinValue(min);
    setMaxValue(max);
  };

  const minOptions = [
    { value: "5000", label: "5000" },
    { value: "10000", label: "10000" },
    { value: "15000", label: "15000" },
    { value: "20000", label: "20000" },
    { value: "25000", label: "25000" },
    { value: "30000", label: "30000" },
  ];

  const maxOptions = [
    { value: "30000", label: maxValue ? "MaxValue" : "" },
    { value: "5000", label: "5000" },
    { value: "10000", label: "10000" },
    { value: "15000", label: "15000" },
    { value: "20000", label: "20000" },
    { value: "25000", label: "25000" },
  ];

  return (
    <div>
      <div className="range-clear" style={{ marginBottom: "20px" }}>
        {minValue !== 0 && maxValue !== 0 && (
          <div className="button-container">
            <button>
              {minValue} - {maxValue}
            </button>
            <button
              className="close-button"
              onClick={() => {
                setMinValue(0);
                setMaxValue(30000);
              }}
            >
              X
            </button>
          </div>
        )}
      </div>

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
        {minValue === 0 ? (
          <select
            value={minValue}
            onChange={handleMinValueChange}
            style={{ width: "100px" }}
          >
            {minOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <select
            value={minValue}
            onChange={handleMinValueChange}
            style={{ width: "100px" }}
          >
            {minOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}

        <p>To</p>

        <select
          value={maxValue}
          onChange={handleMaxValueChange}
          style={{ width: "100px" }}
        >
          {maxOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RangeSlider;
