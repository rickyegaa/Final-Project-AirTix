import React, { useState } from "react";
import { Col } from "react-bootstrap";

const YourComponent = () => {
  const options = [
    { id: 1, label: "Option 1", details: "Option 1 details" },
    { id: 2, label: "Option 2", details: "Option 2 details" },
    { id: 3, label: "Option 3", details: "Option 3 details" },
    // Add more options as needed
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId === selectedOption ? null : optionId);
  };

  return (
    <div>
      {options.map((option) => (
        <div key={option.id} className="d-flex">
          <Col>
            <button onClick={() => handleOptionClick(option.id)}>
              {option.label}
            </button>
          </Col>
          <Col>{selectedOption === option.id && <p>{option.details}</p>}</Col>
        </div>
      ))}
    </div>
  );
};

export default YourComponent;
