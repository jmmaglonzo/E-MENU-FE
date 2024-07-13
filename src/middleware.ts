import {
  DEFAULT_CUSTOMER_REDIRECT,
  DEFAULT_LOGIN_REDIRECT,
  DEFAULT_LOYALTY_REDIRECT,
  DEFAULT_LOYALTY_REWARD_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  cartItemRoutes,
  loyaltyRewardRoutes,
  publicRoutes,
} from "@/routes";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const nextUrl = req.nextUrl;
  const isLoggedIn = !!req.cookies.get("_user_session");
  const isTableSession = !!req.cookies.get("_table_session");
  const cartItems = req.cookies.get("_cart_items")?.value!!;
  const isLoyaltyRewardSession = !!req.cookies.get("_loyalty_session");

  //set variables for routes
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isLoyaltyReward = loyaltyRewardRoutes.includes(nextUrl.pathname);

  const isCartItemRoute = cartItemRoutes.includes(
    nextUrl.pathname.split("/")[0] + nextUrl.pathname,
  );

  // check for ApiAuthRoute
  if (isApiAuthRoute) {
    return;
  }

  //check if route is public
  if (isPublicRoute) {
    //check if _table_session cookie exists
    if (!isTableSession) {
      return;
    }
  }

  //check if cartItem cookie === 0
  if (Number(cartItems) < 1 && isCartItemRoute) {
    return NextResponse.redirect(new URL(DEFAULT_CUSTOMER_REDIRECT, nextUrl));
  }

  //check if url === baseUrl/reward
  if (isLoyaltyReward) {
    //check if no _loyalty_session cookie
    if (!isLoyaltyRewardSession) {
      return NextResponse.redirect(new URL(DEFAULT_LOYALTY_REDIRECT, nextUrl));
    }
  }

  //check if _loyalty_session exists
  if (isLoyaltyRewardSession) {
    //check if url === baseURL/reward
    if (isLoyaltyReward) {
      return NextResponse.redirect(
        new URL(DEFAULT_LOYALTY_REWARD_REDIRECT, nextUrl),
      );
    }
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
