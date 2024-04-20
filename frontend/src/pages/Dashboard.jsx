import React, { useState } from 'react';

function FinancialMetricsCalculator() {
    // Setting up state for each input
    const [grossIncome, setGrossIncome] = useState('');
    const [currentAssets, setCurrentAssets] = useState('');
    const [longTermAssets, setLongTermAssets] = useState('');
    const [currentLiabilities, setCurrentLiabilities] = useState('');
    const [longTermLiabilities, setLongTermLiabilities] = useState('');
    const [savings, setSavings] = useState('');
    const [monthlyExpenses, setMonthlyExpenses] = useState('');
    const [results, setResults] = useState(null); // Initialize results as null

    // Handler to calculate financial metrics
    const calculateFinancialMetrics = () => {
        const totalAssets = parseFloat(currentAssets) + parseFloat(longTermAssets);
        const totalLiabilities = parseFloat(currentLiabilities) + parseFloat(longTermLiabilities);

        const netWorth = totalAssets - totalLiabilities;
        const savingsRatio = (parseFloat(savings) / parseFloat(grossIncome)) * 100;
        const liquidityRatio = parseFloat(currentAssets) / parseFloat(monthlyExpenses);
        const debtToAssetRatio = totalLiabilities / totalAssets;
        const solvencyRatio = netWorth / totalAssets;

        // Updating state with results
        setResults({
            netWorth,
            savingsRatio: savingsRatio.toFixed(2),
            liquidityRatio: liquidityRatio.toFixed(2),
            debtToAssetRatio: debtToAssetRatio.toFixed(2),
            solvencyRatio: solvencyRatio.toFixed(2)
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-xl shadow-2xl">
                <h2 className="text-center text-xl font-bold">Financial Metrics Calculator</h2>
                <input
                    className="w-full p-2 border rounded"
                    type="number"
                    value={grossIncome}
                    onChange={(e) => setGrossIncome(e.target.value)}
                    placeholder="Gross Income (Monthly)"
                />
                <input
                    className="w-full p-2 border rounded"
                    type="number"
                    value={currentAssets}
                    onChange={(e) => setCurrentAssets(e.target.value)}
                    placeholder="Current Assets"
                />
                <input
                    className="w-full p-2 border rounded"
                    type="number"
                    value={longTermAssets}
                    onChange={(e) => setLongTermAssets(e.target.value)}
                    placeholder="Long Term Assets"
                />
                <input
                    className="w-full p-2 border rounded"
                    type="number"
                    value={currentLiabilities}
                    onChange={(e) => setCurrentLiabilities(e.target.value)}
                    placeholder="Current Liabilities"
                />
                <input
                    className="w-full p-2 border rounded"
                    type="number"
                    value={longTermLiabilities}
                    onChange={(e) => setLongTermLiabilities(e.target.value)}
                    placeholder="Long Term Liabilities"
                />
                <input
                    className="w-full p-2 border rounded"
                    type="number"
                    value={savings}
                    onChange={(e) => setSavings(e.target.value)}
                    placeholder="Savings"
                />
                <input
                    className="w-full p-2 border rounded"
                    type="number"
                    value={monthlyExpenses}
                    onChange={(e) => setMonthlyExpenses(e.target.value)}
                    placeholder="Monthly Expenses"
                />
                <div className="flex justify-center mt-4">
                    <button
                        className="text-white bg-gradient-to-r from-green-600 to-lime-800 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={calculateFinancialMetrics}
                    >
                        Calculate Metrics
                    </button>
                </div>
                {results && (  // Render this section only if results are available
                    <div className="text-center">
                        <h3 className="font-semibold">Results:</h3>
                        <p>Net Worth: ${results.netWorth}</p>
                        <p>Savings Ratio: {results.savingsRatio}%</p>
                        <p>Liquidity Ratio: {results.liquidityRatio}</p>
                        <p>Debt to Asset Ratio: {results.debtToAssetRatio}</p>
                        <p>Solvency Ratio: {results.solvencyRatio}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FinancialMetricsCalculator;
