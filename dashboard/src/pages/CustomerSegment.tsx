import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart } from "lucide-react";
import pieChartImage from "@/assets/pie_chart.png";
import heatMapImage from "@/assets/heatmap.png";
import StackedChartImage from "@/assets/stacked_chart.png";

export default function CustomerSegment() {
  return (
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
            alt="Age Distribution Chart"
            className="w-full h-auto rounded-md mx-auto"
          />
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
            alt="Age Distribution Chart"
            className="w-full h-auto rounded-md mx-auto"
          />
        </CardContent>
      </Card>
    </div>
  );
}
