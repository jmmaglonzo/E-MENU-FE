import AnalyticsCard from "@/components/Kitchen/AnalyticsPage/AnalyticsCard";
import DatePicker from "@/components/Kitchen/AnalyticsPage/DatePicker";
import KitchenBarchart from "@/components/Kitchen/AnalyticsPage/KitchenBarchart";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AnalyticsCardData } from "@/lib/analyticsData";

const Analytics = () => {
  return (
    <main className="flex h-dvh flex-col">
      <div className="flex flex-col items-center justify-between gap-2 md:mb-12 md:flex-row">
        <span className="text-3xl font-bold">Analytics</span>
        <DatePicker />
      </div>
      <ScrollArea className="size-full pb-28">
        <KitchenBarchart />
        <div className="mt-8 flex flex-col gap-4">
          <span className="text-3xl font-bold">Key Insights</span>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {AnalyticsCardData.map((data, index) => (
              <AnalyticsCard data={data} key={index} />
            ))}
          </div>
        </div>
      </ScrollArea>
    </main>
  );
};

export default Analytics;
