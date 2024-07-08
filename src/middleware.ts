import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const nextUrl = req.nextUrl;
  const isLoggedIn = !!req.cookies.get("_user_session");

  //set variables for routes
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // check for ApiAuthRoute
  if (isApiAuthRoute) {
    return;
  }

  //check AuthRoute
  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    response.headers.set(`x-middleware-cache`, `no-cache`);
    return response;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  response.headers.set(`x-middleware-cache`, `no-cache`);
  return response;
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
