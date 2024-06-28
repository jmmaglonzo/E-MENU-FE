const ErrorPage = () => {
  return (
    <div className="container mt-36 flex min-h-dvh flex-col items-center bg-background px-4 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        We apologize! Our chef seems to have spilled the secret sauce.
      </h1>
      <p className="mt-4 text-xl text-muted-foreground">
        Hmm, this page isn&apos;t on today&apos;s specials. Did someone order a
        side of 404?
      </p>
    </div>
  );
};

export default ErrorPage;
