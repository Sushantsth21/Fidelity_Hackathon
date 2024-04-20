import React, { useState } from 'react';
import ToolTip from '../components/ToolTip';

function FinancialMetricsCalculator() {
    const [grossIncome, setGrossIncome] = useState('');
    const [currentAssets, setCurrentAssets] = useState('');
    const [longTermAssets, setLongTermAssets] = useState('');
    const [currentLiabilities, setCurrentLiabilities] = useState('');
    const [longTermLiabilities, setLongTermLiabilities] = useState('');
    const [savings, setSavings] = useState('');
    const [monthlyExpenses, setMonthlyExpenses] = useState('');
    const [initialInvestment, setInitialInvestment] = useState('');
    const [monthlyDeposit, setMonthlyDeposit] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [years, setYears] = useState('');
    const [futureValue, setFutureValue] = useState('');
    const [needs, setNeeds] = useState('');
    const [wants, setWants] = useState('');
    const [savingsBudget, setSavingsBudget] = useState('');

    const calculateFinancialMetrics = () => {
        const totalAssets = parseFloat(currentAssets) + parseFloat(longTermAssets);
        const totalLiabilities = parseFloat(currentLiabilities) + parseFloat(longTermLiabilities);
        const netWorth = totalAssets - totalLiabilities;
        const savingsRatio = parseFloat(savings) / parseFloat(grossIncome) * 100;
        const liquidityRatio = parseFloat(currentAssets) / parseFloat(monthlyExpenses);
        const debtToAssetRatio = totalLiabilities / totalAssets;
        const solvencyRatio = netWorth / totalAssets;

        setResults({
            netWorth: netWorth.toFixed(2),
            savingsRatio: savingsRatio.toFixed(2),
            liquidityRatio: liquidityRatio.toFixed(2),
            debtToAssetRatio: debtToAssetRatio.toFixed(2),
            solvencyRatio: solvencyRatio.toFixed(2)
        });
    };

    const calculateCompoundInterest = () => {
        const monthlyRate = parseFloat(interestRate) / 100 / 12;
        const totalPeriods = parseInt(years) * 12;
        let futureValue = parseFloat(initialInvestment);

        for (let i = 0; i < totalPeriods; i++) {
            futureValue = (futureValue + parseFloat(monthlyDeposit)) * (1 + monthlyRate);
        }

        setFutureValue(futureValue.toFixed(2));
    };

    const calculateBudget = () => {
        const needsAmount = parseFloat(grossIncome) * 0.50;
        const wantsAmount = parseFloat(grossIncome) * 0.30;
        const savingsAmount = parseFloat(grossIncome) * 0.20;
        setNeeds(needsAmount.toFixed(2));
        setWants(wantsAmount.toFixed(2));
        setSavingsBudget(savingsAmount.toFixed(2));
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-2xl p-8 space-y-4 bg-white rounded-xl shadow-2xl flex justify-between">
                <div className="w-full max-w-md">
                    <h2 className="text-center text-xl font-bold">Financial Metrics Calculator</h2>
                    <input className="w-full p-2 border rounded" type="number" value={grossIncome} onChange={e => setGrossIncome(e.target.value)} placeholder="Gross Income (Monthly)" />
                    <input className="w-full p-2 border rounded" type="number" value={currentAssets} onChange={e => setCurrentAssets(e.target.value)} placeholder="Current Assets" />
                    <input className="w-full p-2 border rounded" type="number" value={longTermAssets} onChange={e => setLongTermAssets(e.target.value)} placeholder="Long Term Assets" />
                    <input className="w-full p-2 border rounded" type="number" value={currentLiabilities} onChange={e => setCurrentLiabilities(e.target.value)} placeholder="Current Liabilities" />
                    <input className="w-full p-2 border rounded" type="number" value={longTermLiabilities} onChange={e => setLongTermLiabilities(e.target.value)} placeholder="Long Term Liabilities" />
                    <input className="w-full p-2 border rounded" type="number" value={savings} onChange={e => setSavings(e.target.value)} placeholder="Savings" />
                    <input className="w-full p-2 border rounded" type="number" value={monthlyExpenses} onChange={e => setMonthlyExpenses(e.target.value)} placeholder="Monthly Expenses" />
                    <div className="flex justify-center mt-4">
                        <button
                            className="text-white bg-gradient-to-r from-green-600 to-lime-800 hover:bg-gradient-to-l hover:from-green-950 hover:to-blue-600 focus:ring-4 focus:outline-none dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            onClick={calculateFinancialMetrics}
                        >
                            Calculate Metrics
                        </button>
                    </div>
                </div>
                <div className="w-full max-w-md">
                    <h2 className="text-center text-xl font-bold">Compound Interest Calculator</h2>
                    <input className="w-full p-2 border rounded" type="number" value={initialInvestment} onChange={e => setInitialInvestment(e.target.value)} placeholder="Initial Investment" />
                    <input className="w-full p-2 border rounded" type="number" value={monthlyDeposit} onChange={e => setMonthlyDeposit(e.target.value)} placeholder="Monthly Deposit" />
                    <input className="w-full p-2 border rounded" type="number" value={interestRate} onChange={e => setInterestRate(e.target.value)} placeholder="Annual Interest Rate (%)" />
                    <input className="w-full p-2 border rounded" type="number" value={years} onChange={e => setYears(e.target.value)} placeholder="Years" />
                    <div className="flex justify-center mt-4">
                        <button
                            className="text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:bg-gradient-to-l hover:from-blue-950 hover:to-purple-600 focus:ring-4 focus:outline-none dark:focus:ring-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            onClick={calculateCompoundInterest}
                        >
                            Calculate Future Value
                        </button>
                    </div>
                    {futureValue && (
                        <div className="text-center mt-4">
                            <h3 className="font-semibold">Future Value:</h3>
                            <p>${futureValue}</p>
                        </div>
                    )}
                </div>
                <div className="w-full max-w-md">
                    <h2 className="text-center text-xl font-bold">50-30-20 Budget Maker</h2>
                    <div className="text-center mt-4">
                        <button
                            className="text-white bg-gradient-to-r from-teal-500 to-teal-800 hover:bg-gradient-to-l hover:from-teal-800 hover:to-teal-500 focus:ring-4 focus:outline-none dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            onClick={calculateBudget}
                        >
                            Calculate Budget
                        </button>
                    </div>
                    <div className="text-center mt-4">
                        <p>Needs (50%): ${needs}</p>
                        <p>Wants (30%): ${wants}</p>
                        <p>Savings (20%): ${savingsBudget}</p>
                    </div>
                </div>
                {/* Add a budget tracker section */}
                <div className="w-full max-w-md">
                    <h2 className="text-center text-xl font-bold">Budget Tracker</h2>
                    {/* Inputs to enter actual spending for needs, wants, and savings */}
                    <input className="w-full p-2 border rounded" type="number" value={needs} onChange={e => setNeeds(e.target.value)} placeholder="Actual Needs Spending" />
                    <input className="w-full p-2 border rounded" type="number" value={wants} onChange={e => setWants(e.target.value)} placeholder="Actual Wants Spending" />
                    <input className="w-full p-2 border rounded" type="number" value={savings} onChange={e => setSavings(e.target.value)} placeholder="Actual Savings" />
                </div>
            </div>
        </div>
               
        

    )}
export default FinancialMetricsCalculator;
