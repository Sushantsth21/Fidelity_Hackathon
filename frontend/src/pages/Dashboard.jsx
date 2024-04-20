import React, { useState } from 'react';

function FinancialMetricsCalculator() {
    const [grossIncome, setGrossIncome] = useState('');
    const [currentAssets, setCurrentAssets] = useState('');
    const [longTermAssets, setLongTermAssets] = useState('');
    const [currentLiabilities, setCurrentLiabilities] = useState('');
    const [longTermLiabilities, setLongTermLiabilities] = useState('');
    const [savings, setSavings] = useState('');
    const [monthlyExpenses, setMonthlyExpenses] = useState('');
    const [results, setResults] = useState(null);

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

    const chartData = results ? [{
        name: 'Your Financial Metrics',
        netWorth: parseFloat(results.netWorth),
        savingsRatio: parseFloat(results.savingsRatio),
        liquidityRatio: parseFloat(results.liquidityRatio),
        debtToAssetRatio: parseFloat(results.debtToAssetRatio),
        solvencyRatio: parseFloat(results.solvencyRatio)
    }] : [];
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-xl shadow-2xl">
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
                {results && (
                    <div className="text-center mt-4">
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
