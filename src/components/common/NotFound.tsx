import { HomeIcon } from "lucide-react";
import Link from "next/link";
const NotFound = () => {
  return (
    <div className="container flex min-h-dvh flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        Oops! Looks like something got a little saucy.
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        We apologize, but this page is not available. Perhaps it&apos;s still
        marinating in our digital kitchen?
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-2 font-medium text-white"
        >
          <HomeIcon className="mr-2 h-5 w-5" />
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
