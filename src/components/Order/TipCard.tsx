import { FaCoins } from "react-icons/fa6";
const TipCard = () => {
  return (
    <div>
      <span className="flex items-center gap-2 text-base font-semibold">
        <FaCoins className="text-primary" />
        Tip your server
      </span>
      <p className="text-sm text-gray-500">
        100% of the tips go to your server, we don’t deduct anything from it.
      </p>
    </div>
  );
};

export default TipCard;
