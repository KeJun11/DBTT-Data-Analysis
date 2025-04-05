import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3,
  ChevronDown,
  LineChart,
  PieChart,
  Smartphone,
  CreditCard,
  Users,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Import images from assets
import pieChartImage from "@/assets/pie_chart.png";
import heatMapImage from "@/assets/heatmap.png";
import StackedChartImage from "@/assets/stacked_chart.png";
import PurchaseCount from "@/assets/purchase_count.png";
import RevenueGenerated from "@/assets/revenue_generated.png";

// Import chart components
import PageViewsChart from "./PageViewsChart";
import SessionDurationChart from "./SessionDurationChart";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Overview Header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Dashboard Overview
        </h2>
        <p className="text-muted-foreground">
          Key metrics and insights from all departments.
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
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
            <CreditCard className="h-4 w-4 text-muted-foreground" />
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
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
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
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18.3 min</div>
            <p className="text-xs text-muted-foreground">Average time on app</p>
          </CardContent>
        </Card>
      </div>

      {/* Customer Segment Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Customer Segments</h3>
          <Button variant="outline" size="sm" asChild>
            <Link to="/customer-segment">
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Age Distribution
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
              <div className="mt-2 text-xs text-muted-foreground">
                Highest customer concentration in urban areas
              </div>
            </CardContent>
          </Card>

          <Card>
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
              <div className="mt-2 text-xs text-muted-foreground">
                Acne concerns highest among 18-24 age group
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Transaction History Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Transaction Analytics</h3>
          <Button variant="outline" size="sm" asChild>
            <Link to="/transaction-history">
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Product Purchase Count
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <img
                src={PurchaseCount}
                alt="Product Purchase Count"
                className="w-full h-auto rounded-md"
              />
              <div className="mt-2 text-xs text-muted-foreground">
                Cleanser remains the most purchased product
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Revenue Growth
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <img
                src={RevenueGenerated}
                alt="Revenue Generated"
                className="w-full h-auto rounded-md"
              />
              <div className="mt-2 text-xs text-muted-foreground">
                12% revenue increase month-over-month
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Digital Engagement Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Digital Engagement</h3>
          <Button variant="outline" size="sm" asChild>
            <Link to="/digital-engagement">
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Page Views</CardTitle>
              <Smartphone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="h-[250px] w-full overflow-hidden">
                <PageViewsChart height={250} showTitle={false} />
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                Daily page views up by 8% this week
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Session Duration
              </CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="h-[250px] w-full overflow-hidden">
                <SessionDurationChart height={250} showTitle={false} />
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                Session duration increased to 18.3 min average
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
