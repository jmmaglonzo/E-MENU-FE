import { PizzaIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import eMenuLogo from "/public/emenu-logo-white.png";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container w-full bg-primary p-4">
        <div className="relative mx-auto h-[50px] w-[128px]">
          <Image
            src={eMenuLogo}
            fill
            alt="E-menu Logo"
            className="object-contain"
          />
        </div>
      </header>

      <main className="container relative flex flex-grow flex-col items-center justify-center px-4">
        <div className="absolute top-4 rounded-full bg-primary p-4 md:top-8">
          <PizzaIcon className="h-24 w-24 text-primary-foreground" />
        </div>
        <div className="mt-32 flex flex-col items-center justify-center space-y-2 md:mt-24">
          <h1 className="text-3xl font-bold">Oops! Page not found</h1>
          <p className="w-[80%] text-center text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved
          </p>
        </div>
        <Link
          href="/"
          className="mt-8 rounded-sm bg-primary px-8 py-2.5 font-semibold text-white"
        >
          Go to Home
        </Link>
      </main>
    </div>
  );
};

export default Page;
