"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnalyticsCardType } from "@/types/analyticsCard";
import CountUp from "react-countup";
interface AnalyticsProps {
  data: AnalyticsCardType;
}

const currDate = new Date();
const formattedDate = currDate.toDateString();

const AnalyticsCard = ({
  data: { title, value, date, currency },
}: AnalyticsProps) => {
  return (
    <Card className="flex w-full flex-col shadow-md">
      <CardHeader className="p-4">
        <CardTitle className="whitespace-nowrap text-base font-medium">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-2">
        <span className="font-bold lg:text-4xl">{currency}</span>
        <CountUp
          start={0}
          end={Number(value)}
          duration={5}
          className="font-bold lg:text-4xl"
        />
      </CardContent>
      <CardFooter>
        <p className="whitespace-normal text-sm md:text-base">
          {title === "Total Sales" ? date : formattedDate}
        </p>
      </CardFooter>
    </Card>
  );
};

export default AnalyticsCard;
