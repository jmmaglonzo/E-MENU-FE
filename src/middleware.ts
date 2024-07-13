import {
  DEFAULT_CUSTOMER_REDIRECT,
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  cartItemRoutes,
  publicRoutes,
} from "@/routes";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const nextUrl = req.nextUrl;
  const isLoggedIn = !!req.cookies.get("_user_session");
  const isTableSession = !!req.cookies.get("_table_session");
  const cartItems = req.cookies.get("_cart_items")?.value!!;

  //set variables for routes
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  // const isCartItemRoute = nextUrl.pathname.startsWith(
  //   "/order_waiting" || "/checkout",
  // );

  const isCartItemRoute = cartItemRoutes.includes(
    nextUrl.pathname.split("/")[0] + nextUrl.pathname,
  );

  // check for ApiAuthRoute
  if (isApiAuthRoute) {
    return;
  }

  if (isPublicRoute) {
    if (!isTableSession) {
      return;
    }
  }

  if (Number(cartItems) < 1 && isCartItemRoute) {
    return NextResponse.redirect(new URL(DEFAULT_CUSTOMER_REDIRECT, nextUrl));
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
