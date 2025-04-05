import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, CreditCard } from "lucide-react";
import PurchaseCount from "@/assets/purchase_count.png";
import RevenueGenerated from "@/assets/revenue_generated.png";
import PurchaseAndRevenue from "@/assets/purchase_count_and_revenue.png";
import RevenueChart from "@/pages/RevenueChart";

export default function TransactionHistory() {
  return (
    <div>
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
              alt="Age Distribution Chart"
              className="w-full h-auto rounded-md justify-center"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Product Revenue Growth
            </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <img
              src={RevenueGenerated}
              alt="Age Distribution Chart"
              className="w-full h-auto rounded-md justify-center"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Dual Axis Chart
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <img
              src={PurchaseAndRevenue}
              alt="Age Distribution Chart"
              className="w-full h-auto rounded-md justify-center"
            />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-1 mt-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Revenue Growth
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <RevenueChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
