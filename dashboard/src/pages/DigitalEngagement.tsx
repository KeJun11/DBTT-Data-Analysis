import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Smartphone } from "lucide-react";
import DigitalEngagementChart from "./PageViewsChart";
import SessionDurationChart from "./SessionDurationChart";
import ClickThroughRateChart from "./ClickThroughRate";
import SentimentAnalysisChart from "./SentimentAnalysisChart";

export default function DigitalEngagement() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Page Views</CardTitle>
          <Smartphone className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <DigitalEngagementChart height={350} />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Session duration
          </CardTitle>
          <LineChart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <SessionDurationChart height={350} />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Click through rate
          </CardTitle>
          <LineChart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <ClickThroughRateChart height={350} />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Sentiment Analysis
          </CardTitle>
          <LineChart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <SentimentAnalysisChart />
        </CardContent>
      </Card>
    </div>
  );
}
