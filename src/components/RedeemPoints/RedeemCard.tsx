import { StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

interface RedeemCardProps {
  data: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
}

const RedeemCard = ({ data }: RedeemCardProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center p-6">
        {data.icon}
        <p className="text-lg font-medium">{data.title}</p>
        <p className="text-sm text-muted-foreground">{data.description}</p>
      </CardContent>
      <CardFooter>
        <Button size="sm" className="w-full">
          Redeem
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RedeemCard;
