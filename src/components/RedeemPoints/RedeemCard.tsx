import { StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { RewardsType } from "@/types/loyalties";
import { useRedeemLoyaltyReward } from "@/services/queries";

interface RedeemCardProps {
  data: RewardsType;
}

const RedeemCard = ({ data }: RedeemCardProps) => {
  const { mutate: redeemReward } = useRedeemLoyaltyReward();
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center p-6">
        {data.image}
        <p className="text-lg font-medium">{data?.name}</p>
        <p className="text-sm text-muted-foreground">{data.description}</p>
      </CardContent>
      <CardFooter>
        <Button
          size="sm"
          className="w-full"
          onClick={() => redeemReward(data.rewardId)}
        >
          Redeem
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RedeemCard;
