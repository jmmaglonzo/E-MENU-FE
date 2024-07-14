import { pointHistory } from "@/utils/history";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import PointsHistoryCard from "./PointsHistoryCard";

const PointsHistory = () => {
  return (
    <Drawer>
      <DrawerTrigger className="whitespace-nowrap rounded-sm bg-primary px-4 py-1 text-sm font-medium text-white">
        View History
      </DrawerTrigger>
      <DrawerContent className="mobile-container">
        <DrawerHeader>
          <DrawerTitle className="text-center text-2xl font-bold">
            Point History
          </DrawerTitle>
          <DrawerDescription className="text-center">
            View your point earning history
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex h-[400px] flex-col items-center gap-4 overflow-y-scroll no-scrollbar">
          {pointHistory.map((history) => (
            <PointsHistoryCard key={history.title} data={history} />
          ))}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default PointsHistory;
