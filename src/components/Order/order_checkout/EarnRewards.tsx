import React from "react";
import Image from "next/image";
import Link from "next/link";
import giftBox from "/public/giftbox.png";
const EarnRewards = () => {
  return (
    <div className="my-8 flex flex-col items-center justify-center">
      <Image
        src={giftBox}
        alt="icon-menu"
        width={60}
        height={60}
        style={{ width: "auto", height: "auto" }}
        priority
      />
      <div className="flex w-[100%] justify-center rounded-sm bg-[#FFF3E6] p-3">
        <Link href="#" className="text-[0.7em] font-medium text-primary">
          Earn and Save Points
        </Link>
      </div>
    </div>
  );
};

export default EarnRewards;
