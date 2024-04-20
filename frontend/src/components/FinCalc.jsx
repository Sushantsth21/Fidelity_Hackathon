import React, { useState } from 'react';
import Tooltip from './ToolTip';  // Import the react-tooltip library
 
function FinancialMetricsCalculator() {
    // State setup for inputs and results
    const [grossIncome, setGrossIncome] = useState('');
    const [currentAssets, setCurrentAssets] = useState('');
    const [longTermAssets, setLongTermAssets] = useState('');
    const [currentLiabilities, setCurrentLiabilities] = useState('');
    const [longTermLiabilities, setLongTermLiabilities] = useState('');
    const [savings, setSavings] = useState('');
    const [monthlyExpenses, setMonthlyExpenses] = useState('');
    const [results, setResults] = useState(null);  // Initialize results as null
 
    // Function to calculate financial metrics and evaluate remarks
    const calculateFinancialMetrics = () => {
        const totalAssets = parseFloat(currentAssets) + parseFloat(longTermAssets);
        const totalLiabilities = parseFloat(currentLiabilities) + parseFloat(longTermLiabilities);
 
        const netWorth = totalAssets - totalLiabilities;
        const savingsRatio = parseFloat(savings) / parseFloat(grossIncome) * 100;
        const liquidityRatio = parseFloat(currentAssets) / parseFloat(monthlyExpenses);
        const debtToAssetRatio = totalLiabilities / totalAssets;
        const solvencyRatio = netWorth / totalAssets;
 
        // Update state with results and remarks
        setResults({
            netWorth,
            savingsRatio: savingsRatio.toFixed(2),
            liquidityRatio: liquidityRatio.toFixed(2),
            debtToAssetRatio: debtToAssetRatio.toFixed(2),
            solvencyRatio: solvencyRatio.toFixed(2),
            remarks: {
                netWorthRemark: netWorth >= 0 ? "Healthy" : "Needs Improvement",
                savingsRatioRemark: savingsRatio >= 20 ? "Excellent" : "Needs Improvement",
                liquidityRatioRemark: liquidityRatio >= 1 ? "Good Liquidity" : "Low Liquidity",
                debtToAssetRatioRemark: debtToAssetRatio < 0.5 ? "Healthy Debt Level" : "Consider Reducing Debt",
                solvencyRatioRemark: solvencyRatio > 0 ? "Solvent" : "Insolvent"
            }
        });
    };
 
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-xl shadow-2xl">
                <h2 className="text-center text-xl font-bold">Financial Metrics Calculator</h2>
                {/* Inputs for user data with tooltips */}
                <Tooltip content="The total amount of money you earn before any taxes or deductions are taken out." direction="right">
                    <label className="block">
                        <span>Gross Income (Monthly):</span>
                        <input className="w-full p-2 border rounded" type="number" value={grossIncome} onChange={(e) => setGrossIncome(e.target.value)} placeholder="Enter your gross monthly income" />
                    </label>
                </Tooltip>
                <Tooltip content="Things you own that can be turned into cash within a year, like money in your bank account or inventory if you have a business." direction="right">
                    <label className="block">
                        <span>Current Assets:</span>
                        <input className="w-full p-2 border rounded" type="number" value={currentAssets} onChange={(e) => setCurrentAssets(e.target.value)} placeholder="Enter your current assets value" />
                    </label>
                </Tooltip>
                <Tooltip content="Things you own that usually take more than a year to turn into cash, like real estate or equipment." direction="right">
                    <label className="block">
                        <span>Long Term Assets:</span>
                        <input className="w-full p-2 border rounded" type="number" value={longTermAssets} onChange={(e) => setLongTermAssets(e.target.value)} placeholder="Enter your long term assets value" />
                    </label>
                </Tooltip>
                <Tooltip content="Debts or obligations that you need to pay within a year, such as credit card bills or short-term loans." direction="right">
                    <label className="block">
                        <span>Current Liabilities:</span>
                        <input className="w-full p-2 border rounded" type="number" value={currentLiabilities} onChange={(e) => setCurrentLiabilities(e.target.value)} placeholder="Enter your current liabilities" />
                    </label>
                </Tooltip>
                <Tooltip content="Debts or obligations that you have more than a year to pay off, like a mortgage or a car loan." direction="right">
                    <label className="block">
                        <span>Long Term Liabilities:</span>
                        <input className="w-full p-2 border rounded" type="number" value={longTermLiabilities} onChange={(e) => setLongTermLiabilities(e.target.value)} placeholder="Enter your long term liabilities" />
                    </label>
                </Tooltip>
                <Tooltip content="Money you set aside and don’t spend, usually kept in a bank account or other safe place." direction="right">
                    <label className="block">
                        <span>Savings:</span>
                        <input className="w-full p-2 border rounded" type="number" value={savings} onChange={(e) => setSavings(e.target.value)} placeholder="Enter your savings" />
                    </label>
                </Tooltip>
                <Tooltip content="The amount of money you spend every month on things like rent, groceries, utilities, and other regular costs." direction="right">
                    <label className="block">
                        <span>Monthly Expenses:</span>
                        <input className="w-full p-2 border rounded" type="number" value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(e.target.value)} placeholder="Enter your monthly expenses" />
                    </label>
                </Tooltip>
 
                <div className="flex justify-center mt-4">
                    <button className="text-white bg-gradient-to-r from-green-600 to-lime-800 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={calculateFinancialMetrics}>
                        Calculate Metrics
                    </button>
                </div>
              
                {results && (
                    <div className="text-center">
                        <h3 className="font-semibold">Results:</h3>
                        <Tooltip content="The difference between what you own (assets) and what you owe (liabilities), showing how much you're worth financially." direction="right">
                            <p>Net Worth: ${results.netWorth} ({results.remarks.netWorthRemark})</p>
                        </Tooltip>
                        <Tooltip content="The percentage of your income that you save each month or year, showing how much of your money you're putting away instead of spending." direction="right">
                            <p>Savings Ratio: {results.savingsRatio}% ({results.remarks.savingsRatioRemark})</p>
                        </Tooltip>
                        <Tooltip content="A measure of how easily you can turn your assets into cash to meet short-term obligations, like bills or debts due soon." direction="right">
                            <p>Liquidity Ratio: {results.liquidityRatio} ({results.remarks.liquidityRatioRemark})</p>
                        </Tooltip>
                        <Tooltip content="The proportion of your debts compared to your total assets, indicating how much of your assets are financed by debt." direction="right">
                            <p>Debt to Asset Ratio: {results.debtToAssetRatio} ({results.remarks.debtToAssetRatioRemark})</p>
                        </Tooltip>
                        <Tooltip content="A measure of your ability to meet long-term financial obligations, showing if your assets are enough to cover your long-term debts." direction="right">
                            <p>Solvency Ratio: {results.solvencyRatio} ({results.remarks.solvencyRatioRemark})</p>
                        </Tooltip>
                    </div>
                )}
 
            </div>
        </div>
    );
}
 
export default FinancialMetricsCalculator;