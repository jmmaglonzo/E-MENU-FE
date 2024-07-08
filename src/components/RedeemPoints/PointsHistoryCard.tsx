import { Card, CardContent } from "../ui/card";

interface PointsHistoryCardProps {
  data: {
    title: string;
    description: string;
    date: string;
  };
}

const PointsHistoryCard = ({ data }: PointsHistoryCardProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-start justify-center p-4">
        <div className="flex w-full items-center justify-between gap-12">
          <div>
            <p className="">{data.title}</p>
            <p className="text-sm text-muted-foreground">{data.description}</p>
          </div>
          <p className="text-sm text-muted-foreground">{data.date}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PointsHistoryCard;
