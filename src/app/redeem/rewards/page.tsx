import PointsHistory from "@/components/RedeemPoints/PointsHistoryDrawer";
import RedeemDrawer from "@/components/RedeemPoints/RedeemDrawer";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { WalletIcon, ActivityIcon } from "lucide-react";
import Link from "next/link";
import { FaGift } from "react-icons/fa";
const Rewards = () => {
  return (
    <Card className="relative border-0 p-3">
      <CardHeader className="mb-4 flex items-center justify-center p-0">
        <div className="flex w-1/2 items-center justify-center gap-4 rounded-sm bg-primary py-4 text-3xl font-bold text-white">
          <span>5000</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-center text-lg text-muted-foreground">
          Manage your accumulated loyalty points and redeem them for exciting
          rewards.
        </p>

        <div className="flex flex-col items-center justify-between gap-6">
          <div className="flex items-center justify-between gap-6">
            <FaGift size={45} className="" />
            <div className="flex flex-col">
              <span className="whitespace-nowrap text-lg font-bold">
                Redeem Rewards
              </span>
              <p className="text-sm text-muted-foreground">
                Browse and redeem your points
              </p>
            </div>
            <RedeemDrawer />
          </div>
          <div className="flex items-center justify-between gap-6">
            <WalletIcon size={45} className="" />
            <div className="flex flex-col">
              <span className="text-lg font-bold">Points Balance</span>
              <p className="text-sm text-muted-foreground">
                View your point earning history
              </p>
            </div>
            <div className="flex flex-col gap-2 text-right">
              <span className="font-bold">5000</span>
              <p className="text-sm text-muted-foreground">
                Earned from purchases
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-6">
            <ActivityIcon size={45} className="" />
            <div className="flex flex-col">
              <span className="text-lg font-bold">Points History</span>
              <p className="text-sm text-muted-foreground">
                View your point earning history
              </p>
            </div>
            <PointsHistory />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <p className="mt-4 text-lg text-muted-foreground">
          Earn points by making purchases on our digital menu. Earn 1 point for
          every $1 spent, and get bonus points for purchasing specific items.
        </p>
      </CardFooter>
    </Card>
  );
};

export default Rewards;
