import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnalyticsCardType } from "@/types/analyticsCard";

interface AnalyticsProps {
  data: AnalyticsCardType;
}

const AnalyticsCard = ({ data: { title, value, date } }: AnalyticsProps) => {
  return (
    <Card className="flex w-full flex-col shadow-md">
      <CardHeader className="p-4">
        <CardTitle className="whitespace-nowrap text-base font-medium">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-bold lg:text-4xl"> {value}</p>
      </CardContent>
      <CardFooter>
        <p className="whitespace-normal text-sm md:text-base">{date}</p>
      </CardFooter>
    </Card>
  );
};

export default AnalyticsCard;
