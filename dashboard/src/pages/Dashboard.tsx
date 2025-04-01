import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, ChevronDown, LineChart, PieChart } from "lucide-react";

// Import images from assets
import pieChartImage from "@/assets/pie_chart.png";
import heatMapImage from "@/assets/heatmap.png";
import StackedChartImage from "@/assets/stacked_chart.png";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Overview Header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Dashboard Overview
        </h2>
        <p className="text-muted-foreground">
          Key metrics and summaries from all departments.
        </p>
      </div>

      {/* Featured Cards - Most important metrics from each section */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Customer Demographics
            </CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <img
              src={pieChartImage}
              alt="Age Distribution Chart"
              className="w-full h-auto rounded-md"
            />
            <div className="mt-2 text-xs text-muted-foreground">
              Most online customers fall in the 18-22 age range
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Monthly Revenue
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="aspect-[4/3] rounded-md bg-muted flex items-center justify-center">
              <BarChart3 className="h-16 w-16 text-muted-foreground/60" />
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              Revenue increased by 12% compared to last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              App Engagement
            </CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="aspect-[4/3] rounded-md bg-muted flex items-center justify-center">
              <LineChart className="h-16 w-16 text-muted-foreground/60" />
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              Daily active users up by 8% this week
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Secondary Content - Geographic visualization */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Geographic Distribution
            </CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <img
              src={heatMapImage}
              alt="Geographic Distribution"
              className="w-full h-auto rounded-md"
            />
          </CardContent>
        </Card>

        <Card className="md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Primary Skin Concerns
            </CardTitle>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <img
              src={StackedChartImage}
              alt="Skin Concerns by Age Group"
              className="w-full h-auto rounded-md"
            />
          </CardContent>
        </Card>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,543</div>
            <p className="text-xs text-muted-foreground">
              +14% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Order</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">£43.65</div>
            <p className="text-xs text-muted-foreground">
              +2.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Conversion Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.24%</div>
            <p className="text-xs text-muted-foreground">
              +0.8% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18.3 min</div>
            <p className="text-xs text-muted-foreground">Average time on app</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
