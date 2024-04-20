import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
 
function RetirementSavingsCalculator() {
    const [initialInvestment, setInitialInvestment] = useState('');
    const [monthlyDeposit, setMonthlyDeposit] = useState('');
    const [annualInterestRate, setAnnualInterestRate] = useState('');
    const [years, setYears] = useState('');
    const [currentAge, setCurrentAge] = useState('');
    const [retirementGoal, setRetirementGoal] = useState('');
    const [futureValue, setFutureValue] = useState('');
    const [retirementRating, setRetirementRating] = useState('');
    const [savingsData, setSavingsData] = useState([]);
 
    const calculateRetirementSavings = () => {
        const monthlyRate = parseFloat(annualInterestRate) / 100 / 12;
        const totalMonths = parseInt(years) * 12;
        let accumulatedValue = parseFloat(initialInvestment);
        let values = [];
 
        for (let month = 1; month <= totalMonths; month++) {
            accumulatedValue += parseFloat(monthlyDeposit);
            accumulatedValue *= (1 + monthlyRate);
            if (month % 12 === 0) {
                values.push(accumulatedValue);
            }
        }
 
        setFutureValue(accumulatedValue.toFixed(2));
        setSavingsData(values);
        rateRetirementSavings(accumulatedValue);
    };
 
    const rateRetirementSavings = (accumulatedValue) => {
        const retirementAge = parseInt(currentAge) + parseInt(years);
        const percentageOfGoalReached = retirementGoal > 0 ? (accumulatedValue / parseFloat(retirementGoal)) * 100 : 0;
 
        let rating = '';
        if (percentageOfGoalReached >= 100) {
            rating = 'Excellent';
        } else if (percentageOfGoalReached >= 80) {
            rating = 'Very Good';
        } else if (percentageOfGoalReached >= 60) {
            rating = 'Good';
        } else if (percentageOfGoalReached >= 40) {
            rating = 'Fair';
        } else {
            rating = 'Poor';
        }
 
        setRetirementRating(`At age ${retirementAge}, your savings will be ${rating} (${percentageOfGoalReached.toFixed(2)}% of your retirement goal).`);
    };
 
    const data = {
        labels: Array.from({length: parseInt(years)}, (_, i) => i + 1),
        datasets: [
            {
                label: 'Retirement Savings Over Time',
                data: savingsData,
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };
 
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-center text-xl font-bold mb-4">Retirement Savings Calculator</h2>
            <div className="grid gap-2">
            <label htmlFor="currentAge">Current Age</label>
                <input
                    id="currentAge"
                    type="number"
                    placeholder="Current Age"
                    value={currentAge}
                    onChange={(e) => setCurrentAge(e.target.value)}
                    className="border p-2 rounded"
                />
                <label htmlFor="initialInvestment">Initial Investment ($)</label>
                <input
                    id="initialInvestment"
                    type="number"
                    placeholder="Initial Investment ($)"
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(e.target.value)}
                    className="border p-2 rounded"
                />
                <label htmlFor="monthlyDeposit">Monthly Deposit ($)</label>
                <input
                    id="monthlyDeposit"
                    type="number"
                    placeholder="Monthly Deposit ($)"
                    value={monthlyDeposit}
                    onChange={(e) => setMonthlyDeposit(e.target.value)}
                    className="border p-2 rounded"
                />
                <label htmlFor="annualInterestRate">Annual Interest Rate (%)</label>
                <input
                    id="annualInterestRate"
                    type="number"
                    placeholder="Annual Interest Rate (%)"
                    value={annualInterestRate}
                    onChange={(e) => setAnnualInterestRate(e.target.value)}
                    className="border p-2 rounded"
                />
                <label htmlFor="years">Years until Retirement</label>
                <input
                    id="years"
                    type="number"
                    placeholder="Years until Retirement"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    className="border p-2 rounded"
                />
                <label htmlFor="retirementGoal">Retirement Goal ($)</label>
                <input
                    id="retirementGoal"
                    type="number"
                    placeholder="Retirement Goal ($)"
                    value={retirementGoal}
                    onChange={(e) => setRetirementGoal(e.target.value)}
                    className="border p-2 rounded"
                />
                <button
                    onClick={calculateRetirementSavings}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Calculate Future Value
                </button>
                {futureValue && (
                    <div className="mt-4">
                        <p className="font-semibold">Future Value at Retirement: ${futureValue}</p>
                        <p className="font-semibold">{retirementRating}</p>
                        <Line data={data} />
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default RetirementSavingsCalculator;