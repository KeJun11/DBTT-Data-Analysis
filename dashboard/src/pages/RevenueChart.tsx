import React, { useState, ChangeEvent } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    barThickness?: number;
    maxBarThickness?: number;
  }[];
}

type TimeFrame = 'monthly' | 'annually';

const RevenueChart: React.FC = () => {
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('monthly');

  // Sample data showing seasonal trends and yearly decline
  const sampleData: Record<TimeFrame, ChartData> = {
    monthly: {
      labels: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ],
      datasets: [
        {
          label: 'Monthly Revenue',
          // Higher values in February (Valentine's), November (Black Friday), December (Christmas)
          data: [42000, 58000, 45000, 40000, 38000, 36000, 35000, 39000, 43000, 49000, 65000, 72000],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          barThickness: 30,
          maxBarThickness: 50,
        },
      ],
    },
    annually: {
      labels: ['2019', '2020', '2021', '2022', '2023'],
      datasets: [
        {
          label: 'Annual Revenue',
          // Showing downward trend year over year
          data: [780000, 720000, 690000, 650000, 620000],
          backgroundColor: 'rgba(153, 102, 255, 0.6)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1,
          barThickness: 60,
          maxBarThickness: 100,
        },
      ],
    },
  };

  // Handler to change the time frame
  const handleTimeFrameChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTimeFrame(e.target.value as TimeFrame);
  };

  const chartData = sampleData[timeFrame];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          boxWidth: 15,
          padding: 10,
        },
      },
      title: {
        display: true,
        text: `Revenue by ${timeFrame === 'monthly' ? 'Month' : 'Year'}`,
        padding: {
          top: 5,
          bottom: 15,
        },
        font: {
          size: 16,
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'GBP',
                minimumFractionDigits: 0,
              }).format(context.parsed.y);
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return '£' + value.toLocaleString();
          }
        },
        grid: {
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div className="p-4">
      
      {/* Time frame selector */}
      <div className="mb-6 flex items-center justify-end">
        <label htmlFor="timeFrame" className="mr-2 font-medium text-sm">
          View Revenue By:
        </label>
        <select
          id="timeFrame"
          value={timeFrame}
          onChange={handleTimeFrameChange}
          className="border rounded p-1 text-sm bg-white dark:bg-gray-800"
        >
          <option value="monthly">Monthly</option>
          <option value="annually">Yearly</option>
        </select>
      </div>

      {/* Chart */}
      <div style={{ height: '400px', width: '100%' }}>
        <Bar data={chartData} options={options} />
      </div>
      
      {/* Insights */}
      <div className="mt-4 text-sm text-muted-foreground">
        {timeFrame === 'monthly' ? (
          <p>Holiday seasons show significant revenue spikes, with November and December performing best.</p>
        ) : (
          <p>Annual revenue shows a downward trend since 2019, highlighting the need for new growth strategies.</p>
        )}
      </div>
    </div>
  );
};

export default RevenueChart;
