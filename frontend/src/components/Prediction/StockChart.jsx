
// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import axios from 'axios';
// import {
//     Chart as ChartJS,
//     LineElement,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import 'tailwindcss/tailwind.css';

// // Registering required components
// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

// const StockChart = () => {
//     const [selectedCompany, setSelectedCompany] = useState('AAPL');
//     const [timeRange, setTimeRange] = useState('week');
//     const [chartData, setChartData] = useState({ labels: [], datasets: [] });
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const companies = ['AAPL', 'BLK', 'GOOG', 'MSFT', 'UBER'];

//     const fallbackData = 
//     {
//             "2024-10-23": { "4. close": "230.7600" },
//             "2024-10-22": { "4. close": "235.8600" },
//             "2024-10-21": { "4. close": "236.4800" },
//             "2024-10-18": { "4. close": "235.0000" },
//             "2024-10-17": { "4. close": "232.1500" },
//             "2024-10-16": { "4. close": "231.7800" },
//             "2024-10-15": { "4. close": "233.8500" },
//             "2024-10-14": { "4. close": "231.3000" },
//             "2024-10-11": { "4. close": "227.5500" },
//             "2024-10-10": { "4. close": "229.0400" },
//             "2024-10-09": { "4. close": "229.5400" },
//             "2024-10-08": { "4. close": "225.7700" },
//             "2024-10-07": { "4. close": "221.6900" },
//             "2024-10-04": { "4. close": "226.8000" },
//             "2024-10-03": { "4. close": "225.6700" },
//             "2024-10-02": { "4. close": "226.7800" },
//             "2024-10-01": { "4. close": "226.2100" },
//             "2024-09-30": { "4. close": "233.0000" },
//             "2024-09-27": { "4. close": "227.7900" },
//             "2024-09-26": { "4. close": "227.5200" },
//             "2024-09-25": { "4. close": "226.3700" },
//             "2024-09-24": { "4. close": "227.3700" },
//             "2024-09-23": { "4. close": "226.4700" },
//             "2024-09-20": { "4. close": "228.2000" },
//             "2024-09-19": { "4. close": "228.8700" },
//             "2024-09-18": { "4. close": "220.6900" },
//             "2024-09-17": { "4. close": "216.7900" },
//             "2024-09-16": { "4. close": "216.3200" },
//             "2024-09-13": { "4. close": "212.8600" },
//             "2024-09-12": { "4. close": "211.7600" },
//             "2024-09-11": { "4. close": "210.0600" },
//             "2024-09-10": { "4. close": "208.6000" },
//             "2024-09-09": { "4. close": "208.2100" },
//             "2024-09-06": { "4. close": "207.8700" },
//             "2024-09-05": { "4. close": "209.7000" },
//             "2024-09-04": { "4. close": "206.5200" },
//             "2024-09-03": { "4. close": "206.9000" },
//             "2024-09-02": { "4. close": "207.2100" },
//             "2024-09-01": { "4. close": "204.7600" }
//         }

//     const fetchStockData = async (company) => {
//         setLoading(true);
//         setError('');
//         const functionMap = {
//             week: 'TIME_SERIES_DAILY',
//             month: 'TIME_SERIES_DAILY',
//             '3months': 'TIME_SERIES_DAILY',
//             year: 'TIME_SERIES_MONTHLY',
//         };
//         const timeSeriesFunction = functionMap[timeRange];

//         try {
//             const response = await axios.get(`https://www.alphavantage.co/query?function=${timeSeriesFunction}&symbol=${company}&apikey=BBHCS0W4V8PRSSLS`);
//             const data = timeSeriesFunction === 'TIME_SERIES_MONTHLY' ? response.data["Monthly Time Series"] : response.data["Time Series (Daily)"];

//             if (!data) {
//                 throw new Error('No data available.');
//             }

//             let labels, values;
//             if (timeRange === 'week') {
//                 labels = Object.keys(data).slice(0, 7);
//             } else if (timeRange === 'month') {
//                 labels = Object.keys(data).slice(0, 30);
//             } else if (timeRange === '3months') {
//                 labels = Object.keys(data).slice(0, 90);
//             } else if (timeRange === 'year') {
//                 labels = Object.keys(data).slice(0, 12);
//             }

//             values = labels.map(label => parseFloat(data[label]["4. close"]));

//             // Send data to Railway API and get prediction
//             const prices = {
//                 previous_close: values[values.length - 1],
//                 // Add more previous closes as needed
//                 AAPL: selectedCompany === 'AAPL' ? 1 : 0,
//                 BLK: selectedCompany === 'BLK' ? 1 : 0,
//                 GOOG: selectedCompany === 'GOOG' ? 1 : 0,
//                 MSFT: selectedCompany === 'MSFT' ? 1 : 0,
//                 UBER: selectedCompany === 'UBER' ? 1 : 0,
//             };
//             const railwayResponse = await sendToRailwayAPI(prices);
//             const predictedPrices = railwayResponse.data.predictions || [];
            
//             // Log the predicted prices
//             console.log('Predicted Prices:', predictedPrices);

//             // Combine actual and predicted data
//             setChartData({
//                 labels: timeRange === 'week' || timeRange === 'month' ? labels.reverse() : labels,
//                 datasets: [
//                     {
//                         label: `${company} Closing Prices`,
//                         data: timeRange === 'week' || timeRange === 'month' ? values.reverse() : values,
//                         borderColor: 'rgba(75, 192, 192, 1)',
//                         backgroundColor: 'rgba(75, 192, 192, 0)',
//                         fill: false,
//                         pointRadius: 5,
//                         pointHoverRadius: 7,
//                     },
//                     {
//                         label: 'Predicted Prices',
//                         data: predictedPrices,
//                         borderColor: 'rgba(255, 99, 132, 1)',
//                         backgroundColor: 'rgba(255, 99, 132, 0)',
//                         fill: false,
//                         pointRadius: 5,
//                         pointHoverRadius: 7,
//                     },
//                 ],
//             });
//         } catch (error) {
//             console.error('Error fetching stock data:', error);
//             // Fallback to hardcoded data if the API fails
//             handleFallbackData();
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleFallbackData = () => {
//         const labels = Object.keys(fallbackData);
//         const values = labels.map(label => parseFloat(fallbackData[label]["4. close"]));

//         setChartData({
//             labels: labels.reverse(),
//             datasets: [
//                 {
//                     label: `${selectedCompany} Closing Prices (Fallback)`,
//                     data: values.reverse(),
//                     borderColor: 'rgba(75, 192, 192, 1)',
//                     backgroundColor: 'rgba(75, 192, 192, 0)',
//                     fill: false,
//                     pointRadius: 5,
//                     pointHoverRadius: 7,
//                 },
//             ],
//         });
//     };

//     const sendToRailwayAPI = async (prices) => {
//         try {
//             const response = await axios.post('https://flask-app-production-f2b3.up.railway.app/predict', { prices });
//             console.log('Prediction Response:', response.data); // Log the prediction response
//             return response; // Return the full response
//         } catch (error) {
//             console.error('Error sending data to Railway API:', error);
//         }
//     };

//     useEffect(() => {
//         fetchStockData(selectedCompany);
//     }, [selectedCompany, timeRange]);

//     return (
//         <div>
//             <h2 className="text-2xl mb-4">Stock Prices for {selectedCompany}</h2>
//             {loading && <p>Loading...</p>}
//             {error && <p>Error: {error}</p>}
//             <Line data={chartData} options={{ responsive: true }} />
//             <div className="flex mt-4">
//                 {companies.map(company => (
//                     <button
//                         key={company}
//                         onClick={() => setSelectedCompany(company)}
//                         className={`mx-2 px-4 py-2 rounded ${selectedCompany === company ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//                     >
//                         {company}
//                     </button>
//                 ))}
//             </div>
//             <div className="mt-4">
//                 <select
//                     value={timeRange}
//                     onChange={(e) => setTimeRange(e.target.value)}
//                     className="p-2 border rounded"
//                 >
//                     <option value="week">Last Week</option>
//                     <option value="month">Last Month</option>
//                     <option value="3months">Last 3 Months</option>
//                     <option value="year">Last Year</option>
//                 </select>
//             </div>
//         </div>
//     );
// };

// export default StockChart;

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import 'tailwindcss/tailwind.css';

// Registering required components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const StockChart = () => {
    const [selectedCompany, setSelectedCompany] = useState('AAPL');
    const [timeRange, setTimeRange] = useState('week');
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const companies = ['AAPL', 'BLK', 'GOOG', 'MSFT', 'UBER'];

    const fetchStockData = async (company) => {
        setLoading(true);
        setError('');
        const functionMap = {
            week: 'TIME_SERIES_DAILY',
            month: 'TIME_SERIES_DAILY',
            '3months': 'TIME_SERIES_DAILY',
            year: 'TIME_SERIES_MONTHLY',
        };
        const timeSeriesFunction = functionMap[timeRange];
        try {
            const response = await axios.get(`https://www.alphavantage.co/query?function=${timeSeriesFunction}&symbol=${company}&apikey=VUI4PDOGGCL8WD1K`);
            const data = timeSeriesFunction === 'TIME_SERIES_MONTHLY' ? response.data["Monthly Time Series"] : response.data["Time Series (Daily)"];
            if (!data) {
                setError('No data available.');
                setLoading(false);
                return;
            }

            let labels, values;
            if (timeRange === 'week') {
                labels = Object.keys(data).slice(0, 7);
                values = labels.map(label => parseFloat(data[label]["4. close"]));
            } else if (timeRange === 'month') {
                labels = Object.keys(data).slice(0, 30);
                values = labels.map(label => parseFloat(data[label]["4. close"]));
            } else if (timeRange === '3months') {
                labels = Object.keys(data).slice(0, 90); // Last 90 days
                values = labels.map(label => parseFloat(data[label]["4. close"]));
            } else if (timeRange === 'year') {
                labels = Object.keys(data).slice(0, 12); // Last 12 months
                values = labels.map(label => parseFloat(data[label]["4. close"]));
            }
            const prices = {
                previous_close: values[values.length - 1],
                close_1: values[values.length - 2] || 0,
                close_2: values[values.length - 3] || 0,
                close_3: values[values.length - 4] || 0,
                close_4: values[values.length - 5] || 0,
                close_5: values[values.length - 6] || 0,
                close_6: values[values.length - 7] || 0,
                close_7: values[values.length - 8] || 0,
                AAPL: selectedCompany === 'AAPL' ? 1 : 0,
                BLK: selectedCompany === 'BLK' ? 1 : 0,
                GOOG: selectedCompany === 'GOOG' ? 1 : 0,
                MSFT: selectedCompany === 'MSFT' ? 1 : 0,
                UBER: selectedCompany === 'UBER' ? 1 : 0,
            };
            // Send data to Railway API and get prediction
            const railwayResponse = await sendToRailwayAPI(prices);
            console.log('Railway API response:', railwayResponse.data); // Log the response from Railway API
            // Assume railwayResponse.data.predictions is an array of predicted prices
            const predictedPrices = railwayResponse.data.predictions || [];
            const predictionLabels = Array.from({ length: predictedPrices.length }, (_, i) => `Predicted Day ${i + 1}`);
            // Combine actual and predicted data
            setChartData({
                labels: timeRange === 'week' || timeRange === 'month' ? labels.reverse() : labels,
                datasets: [
                    {
                        label: `${company} Closing Prices`,
                        data: timeRange === 'week' || timeRange === 'month' ? values.reverse() : values,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0)',
                        fill: false,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                    },
                    {
                        label: 'Predicted Prices',
                        data: predictedPrices,
                        borderColor: 'rgba(255, 99, 132, 1)', // Different color for predicted prices
                        backgroundColor: 'rgba(255, 99, 132, 0)',
                        fill: false,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                    },
                ],
            });
        } catch (error) {
            setError('Error fetching stock data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const sendToRailwayAPI = async (prices) => {
        try {
            const response = await axios.post('https://flask-app-production-f2b3.up.railway.app/predict', { prices });
            return response; // Return the full response
        } catch (error) {
            console.error('Error sending data to Railway API:', error);
        }
    };
    useEffect(() => {
        fetchStockData(selectedCompany);
    }, [selectedCompany, timeRange]); // Trigger fetch on time range change as well

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
            <div className="mb-4 flex flex-col items-center">
                <label htmlFor="time-range" className="text-sm font-medium text-gray-700 mb-2">Select Time Range:</label>
                <select 
                    id="time-range" 
                    className="p-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    onChange={(e) => setTimeRange(e.target.value)} 
                    value={timeRange}
                >
                    <option value="week">Last Week</option>
                    <option value="month">Last Month</option>
                    <option value="3months">Last 3 Months</option>
                    <option value="year">Last Year</option>
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