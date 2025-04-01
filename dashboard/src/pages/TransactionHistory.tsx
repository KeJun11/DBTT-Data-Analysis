import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, CreditCard } from "lucide-react";

export default function TransactionHistory() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Monthly Transactions
          </CardTitle>
          <BarChart3 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="aspect-[4/3] rounded-md bg-muted flex items-center justify-center">
            <BarChart3 className="h-16 w-16 text-muted-foreground/60" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Payment Methods</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="aspect-[4/3] rounded-md bg-muted flex items-center justify-center">
            <CreditCard className="h-16 w-16 text-muted-foreground/60" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
