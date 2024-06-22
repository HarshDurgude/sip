// Import useState from React
"use client";


import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import Calculated from '@/components/ui/calculated';

export default function Home() {
  // Initialize state to hold the slider's value
  const [sliderValue1, setSliderValue1] = useState(1000);
  const [sliderValue2, setSliderValue2] = useState(10);
  const [sliderValue3, setSliderValue3] = useState(1);
  const [showChart, setShowChart] = useState(false);
  let change = 0;
  let x;

  const handleCalculate = () => {
    setShowChart(true);
  };
  function calculateSIPValue(monthlyInvestment, annualInterestRate, years) {
    // Convert annual interest rate to monthly interest rate
    const monthlyInterestRate = (annualInterestRate / 100) / 12;

    // Calculate the total number of months for the investment period
    const totalMonths = years * 12;

    // Initialize the future value variable
    let futureValue = 0;

    // Loop through each month to calculate the future value
    for (let i = 1; i <= totalMonths; i++) {
      // Add the monthly investment to the future value
      futureValue += monthlyInvestment;


      // Apply the monthly interest rate to the future value
      futureValue += futureValue * monthlyInterestRate;
    }

    // Return the final future value after all contributions and interest have been accounted for
    return futureValue;
  }

  return (
    <>

      <main className="flex  flex-col items-center justify-between pt-6">

        <span>Investing amount</span>

        <div className="flex flex-col items-center justify-between mt-2">
          <Slider
            defaultValue={[1]}
            value={[(sliderValue1 % 500 === 0) ? sliderValue1 / 500 : parseInt(sliderValue1 / 500)]}
            max={200}
            step={1}
            onValueChange={(value) => {
              setSliderValue1(value[0] * 500);
            }
            }
          />
          {/* Display the current slider value */}
          <input type="text" onChange={(e) => {
            setSliderValue1(e.target.value);
          }} value={sliderValue1} className='border border-black rounded-md m-2 text-center w-32 select-all' onFocus={(e) => e.target.select()} />
        </div>

        <span>rs. with</span>

        <div className="flex flex-col items-center justify-between mt-2">
          {/* Pass onChange prop to Slider */}
          <Slider
            defaultValue={[10]}
            value={[sliderValue2]}
            max={100}
            step={1}
            onValueChange={(value) => setSliderValue2(value)} // Use onValueChange instead of onChange
          />
          {/* Display the current slider value */}
          <input type="text" onChange={(e) => setSliderValue2(e.target.value)} value={sliderValue2} className='border border-black rounded-md m-2 text-center w-32 select-all' onFocus={(e) => e.target.select()} />
        </div>

        <span>% interest for</span>

        <div className="flex flex-col items-center justify-between mt-2">
          {/* Pass onChange prop to Slider */}
          <Slider
            defaultValue={[1]}
            max={100}
            value={[sliderValue3]}
            step={1}
            onValueChange={(value) => setSliderValue3(value)}// Use onValueChange instead of onChange
          />
          {/* Display the current slider value */}
          <input type="text" onChange={(e) => setSliderValue3(e.target.value)} value={sliderValue3} className='border border-black rounded-md m-2 text-center w-32 select-all' onFocus={(e) => e.target.select()} />
        </div>
        <span>years</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 my-2 rounded" onClick={handleCalculate}>
          Calculate
        </button>
      </main>

      {showChart && <Calculated investedAmount={sliderValue1 * sliderValue3 * 12} totalAmount={calculateSIPValue(parseInt(sliderValue1), parseInt(sliderValue2), parseInt(sliderValue3))}
      />}

    </>
  );
}
