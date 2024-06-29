import Link from "next/link";
import React from "react";

const FooterText = () => {
  return (
    <div>
      <div className="flex items-center justify-center leading-3">
        <span className="text-base text-gray-800">
          I hereby give Chef Morgan Restaurant the permission to share my
          customer data with the Restaurant, and is applicable, their respective
          affiliates and subsidaries, for service improvement and/or other
          related marketing purposes. I can find detailed information about the
          customer data sharing
          <Link className="font-bold text-primary" href="#">
            {" "}
            here.
          </Link>
        </span>
      </div>

      <div className="mt-4 flex">
        <span className="text-center text-base text-gray-800">
          By completing this order, I agree to all
          <Link href="#" className="font-bold text-primary">
            {" "}
            terms and conditions
          </Link>
        </span>
      </div>
    </div>
  );
};

export default FooterText;
