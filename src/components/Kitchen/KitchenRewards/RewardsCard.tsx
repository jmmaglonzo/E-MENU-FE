import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RewardEditModal from "./RewardEditModal";
import KitchenDeleteModal from "../KitchenModal/KitchenDeleteModal";
import RewardDeleteModal from "./RewarDeleteModal";
interface RewardCardProps {
  item: {
    name: string;
    description: string;
    points: number;
  };
}
const RewardsCard = ({
  item: { name, description, points },
}: RewardCardProps) => {
  return (
    <Card className="flex flex-col space-y-2 rounded-sm border p-4 shadow-sm">
      <CardHeader className="p-0">
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <CardDescription className="mb-2">{description}</CardDescription>

        <CardFooter className="flex items-center justify-between p-0">
          <span>{points} points</span>

          <div className="flex items-center gap-2">
            <RewardEditModal />
            <RewardDeleteModal />
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default RewardsCard;
