import { FaCoins } from "react-icons/fa6";
const TipCard = () => {
  return (
    <div className="space-y-2">
      <span className="flex items-center gap-2 font-semibold">
        <FaCoins className="text-primary" />
        Tip your server
      </span>
      <p className="text-center text-base text-gray-500">
        100% of the tips go to your server, we don’t deduct anything from it.
      </p>
    </div>
  );
};

export default TipCard;
