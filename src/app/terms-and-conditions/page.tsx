import { termsAndConditions } from "@/utils/terms-and-condition";
import digibite from "/public/DigiBiteLogo.png";
import Image from "next/image";
import Link from "next/link";
const TermsAndCondition = () => {
  return (
    <section className="container my-4">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative h-[40px] w-[120px]">
          <Image
            src={digibite}
            alt="DigiBite"
            className="object-contain"
            fill
          />
        </div>
        <span className="font-bold">Terms and conditions</span>
        <p className="text-lg leading-5">
          Welcome to Chef Morgan Restaurant Digital Menu. By accessing or using
          our digital menu, you agree to comply with and be bound by the
          following terms and conditions. Please review them carefully before
          using our services.
        </p>
        <div className="custom-scrollbar flex h-[390px] flex-col gap-4 overflow-y-scroll px-2">
          {termsAndConditions.map((item) => (
            <div key={item.id}>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-base">{item.content}</p>
            </div>
          ))}
        </div>
        <Link
          href={"/checkout"}
          className="mt-auto inline-flex h-10 w-full items-center justify-center rounded-sm bg-primary font-bold text-white duration-300 active:scale-110"
        >
          Accept Terms
        </Link>
      </div>
    </section>
  );
};

export default TermsAndCondition;
