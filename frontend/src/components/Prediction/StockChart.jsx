import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import 'tailwindcss/tailwind.css';

// Registering required components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler, Title, Tooltip, Legend);

const StockChart = () => {
    const [selectedCompany, setSelectedCompany] = useState('AAPL');
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const companies = ['AAPL', 'BLK', 'GOOG', 'MSFT', 'UBER'];

    // Function to fetch stock data from API
    const fetchStockData = async (company) => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${company}&apikey=Z48OBKIS7KP3GNHE`);
            const data = response.data["Time Series (Daily)"];
            
            if (!data) {
                setError('No data available.');
                setLoading(false);
                return;
            }
            
            // Extract dates and closing prices
            const labels = Object.keys(data).slice(0, 30); // Getting the last 30 days
            const values = labels.map(label => data[label]["4. close"]);

            setChartData({
                labels: labels.reverse(),
                datasets: [
                    {
                        label: `${company} Closing Prices`,
                        data: values.reverse(),
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        fill: true,
                    },
                ],
            });
        } catch (error) {
            setError('Error fetching stock data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Effect to fetch data on company change
    useEffect(() => {
        fetchStockData(selectedCompany);
    }, [selectedCompany]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h2 className="text-xl font-bold mb-3 text-gray-800">Stock Price Viewer</h2>
            <div className="mb-4 flex flex-col items-center">
                <label htmlFor="company-select" className="text-sm font-medium text-gray-700 mb-2">Select a Company:</label>
                <select 
                    id="company-select" 
                    className="p-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    onChange={(e) => setSelectedCompany(e.target.value)} 
                    value={selectedCompany}
                >
                    {companies.map(company => (
                        <option key={company} value={company}>{company}</option>
                    ))}
                </select>
            </div>
            {loading ? (
                <p className="text-sm text-gray-500">Loading...</p>
            ) : error ? (
                <p className="text-sm text-red-500">{error}</p>
            ) : (
                <div className="w-full md:w-3/4 lg:w-1/2 h-80">
                    <Line data={chartData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
                </div>
            )}
        </div>
    );
};

export default StockChart;