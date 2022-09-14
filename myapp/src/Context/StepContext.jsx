import React from 'react';
import { useState } from 'react';
import Form from '../Page/Form';

export const multiStepContext = React.createContext();

const StepContext = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState([]);

  return (
    <div>
      <multiStepContext.Provider
        value={{
          currentStep,
          setCurrentStep,
          userData,
          setUserData,
        }}
      >
        <Form />
      </multiStepContext.Provider>
    </div>
  );
};

export default StepContext;
