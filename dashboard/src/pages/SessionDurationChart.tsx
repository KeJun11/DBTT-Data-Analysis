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

interface SessionDurationChartProps {
  height?: number;
  showTitle?: boolean;
}

const SessionDurationChart: React.FC<SessionDurationChartProps> = ({
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
        label: "Session Duration (sec)",
        data: [180, 200, 150, 160, 120, 130, 140, 135],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
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
        text: "Session Duration per Product (in sec)",
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

export default SessionDurationChart;
