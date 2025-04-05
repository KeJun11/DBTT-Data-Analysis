import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const SentimentAnalysisChart: React.FC = () => {
  // Sample sentiment analysis data:
  // Positive: 120 reviews, Neutral: 80 reviews, Negative: 30 reviews.
  const data = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        label: "Sentiment Analysis",
        data: [120, 80, 30],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)", // Positive sentiment (greenish)
          "rgba(153, 102, 255, 0.6)", // Neutral sentiment (purple)
          "rgba(255, 99, 132, 0.6)", // Negative sentiment (red)
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Sentiment Analysis of Reviews",
      },
    },
  };

  return (
    <div className="p-4 w-3/4 mx-auto">
      <Pie data={data} options={options} />
    </div>
  );
};

export default SentimentAnalysisChart;
