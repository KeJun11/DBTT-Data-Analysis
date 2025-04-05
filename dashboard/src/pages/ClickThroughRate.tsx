import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ClickThroughRateChartProps {
  height?: number;
  showTitle?: boolean;
}

const ClickThroughRateChart: React.FC<ClickThroughRateChartProps> = ({
  height,
  showTitle = true,
}) => {
  const data = {
    labels: [
      "EGF Capsules",
      "Vitamin C Serum",
      "Hyaluronic Acid",
      "RGF Serum",
      "Non-Surgical Face Lift",
      "Jowl Lift",
      "Eye Revive",
      "Orbital Microdermabrasion",
    ],
    datasets: [
      {
        label: "Click Through Rate (%)",
        data: [2.5, 3.0, 2.0, 2.8, 1.5, 1.8, 2.2, 2.0],
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
        barThickness: 20,
        maxBarThickness: 30,
      },
    ],
  };

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
        position: "top" as const,
        display: showTitle,
        labels: {
          boxWidth: 15,
          padding: 10,
        },
      },
      title: {
        display: showTitle,
        text: "Click Through Rate per Product (%)",
        padding: {
          top: 5,
          bottom: 5,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 9,
          },
          maxRotation: 90,
          minRotation: 60,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div style={{ height: height || "100%", width: "100%" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ClickThroughRateChart;
