import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart } from "lucide-react";
import pieChartImage from "@/assets/pie_chart.png";
import heatMapImage from "@/assets/heatmap.png";
import StackedChartImage from "@/assets/stacked_chart.png";
import CustomerSpendingTable from "./CustomerSpendingTable";

export default function CustomerSegment() {
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Age Distribution
            </CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {/* Use the imported image variable directly */}
            <img
              src={pieChartImage}
              alt="Age Distribution Chart"
              className="w-3/4 h-auto rounded-md mx-auto"
            />
            <div className="mt-3 text-sm text-muted-foreground">
              Higher customer percentages observed in the 18-22 age group,
              suggesting targeted marketing opportunities.
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Geographic Analysis
            </CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <img
              src={heatMapImage}
              alt="Geographic Distribution"
              className="w-full h-auto rounded-md mx-auto"
            />
            <div className="mt-3 text-sm text-muted-foreground">
              Highest customer concentration in Central Singapore, with East
              Singapore showing the second highest density.
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Primary Skin Concerns across Age Groups
            </CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <img
              src={StackedChartImage}
              alt="Skin Concerns by Age Group"
              className="w-full h-auto rounded-md mx-auto"
            />
            <div className="mt-3 text-sm text-muted-foreground">
              Acne and eye bags are the predominant concerns among younger age
              groups, particularly in the 18-24 range.
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-1 mt-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Customer Spending Patterns
            </CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <CustomerSpendingTable />
            <div className="mt-3 text-sm text-muted-foreground">
              Emily Davis's spending is steadily decreasing. Consider reaching
              out with personalized discounts and promotions to re-engage.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
