// Education_details.js
import React, { useState } from 'react';
import Education_input from './Education_input';

function Education_details() {
  const [educationDetails, setEducationDetails] = useState([]);

  const handleSave = (data) => {
    setEducationDetails([...educationDetails, data]);
  };

  const [inputCount, setInputCount] = useState(1);

  const addEducationInput = () => {
    setInputCount(inputCount + 1);
  };

  const handleSaveAndNext = () => {
    // Handle saving data and navigating to the next step
    console.log("Saved data:", educationDetails);
  };

  const handleBack = () => {
    // Handle going back to the previous step
    console.log("Going back");
  };

  return (
    <div>
      {[...Array(inputCount)].map((_, index) => (
        <Education_input key={index} onSave={handleSave} />
      ))}
      <button onClick={addEducationInput}>+</button>
      <button onClick={handleSaveAndNext}>Save & Next</button>
      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default Education_details;
