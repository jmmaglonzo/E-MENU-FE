import PointsHistory from "@/components/RedeemPoints/PointsHistoryDrawer";
import RedeemDrawer from "@/components/RedeemPoints/RedeemDrawer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  GiftIcon,
  WalletIcon,
  ActivityIcon,
  MailIcon,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

const RedeemPoints = () => {
  return (
    <section className="container mt-4">
      <Card className="relative p-3">
        <Link href="/" className="absolute left-2 top-4">
          <ChevronLeft className="h-7 w-7 text-muted-foreground" />
        </Link>
        <CardHeader className="flex items-center justify-between p-0 py-2">
          <CardTitle>Redeem Points</CardTitle>
          <Badge variant="secondary">5000 Points</Badge>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-center text-base text-muted-foreground">
            Manage your accumulated loyalty points and redeem them for exciting
            rewards.
          </p>
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <GiftIcon className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-lg font-medium">Redeem Rewards</p>
                  <p className="text-sm text-muted-foreground">
                    Browse and redeem your points
                  </p>
                </div>
              </div>
              <RedeemDrawer />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <WalletIcon className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-lg font-medium">Points Balance</p>
                  <p className="text-sm text-muted-foreground">
                    View your current points
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium">5000 Points</p>
                <p className="whitespace-nowrap text-sm text-muted-foreground">
                  Earned from purchases
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <ActivityIcon className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium">Point History</p>
                  <p className="text-sm text-muted-foreground">
                    View your point earning history
                  </p>
                </div>
              </div>
              <PointsHistory />
            </div>
          </div>
          <p className="mt-4 text-base text-muted-foreground">
            Earn points by making purchases on our digital menu. Earn 1 point
            for every $1 spent, and get bonus points for purchasing specific
            items.
          </p>

          <div className="mt-4">
            <Label htmlFor="contact">Enter your email or number</Label>
            <Input id="contact" placeholder="Email or Number" type="text" />
            <Button className="mt-4 w-full bg-primary font-semibold text-white">
              Start Earning Rewards
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default RedeemPoints;
