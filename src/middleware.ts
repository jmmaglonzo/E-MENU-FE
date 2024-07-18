import {
  DEFAULT_CUSTOMER_REDIRECT,
  DEFAULT_LOGIN_REDIRECT,
  DEFAULT_LOYALTY_REDIRECT,
  DEFAULT_LOYALTY_REWARD_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  cartItemRoutes,
  kitchenRoute,
  publicRoutes,
  redeem,
  redeemRewards,
} from "@/routes";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const nextUrl = req.nextUrl;
  const isLoggedIn = !!req.cookies.get("_user_session");
  const isTableSession = !!req.cookies.get("_table_session");
  const cartItems = req.cookies.get("_cart_items")?.value!!;
  const isLoyaltyRewardSession = !!req.cookies.get("_loyalty_session");
  const isOrderingPhase = !!req.cookies.get("_is_ordering");
  const userRole = req.cookies.get("_user_role")?.value;

  //set variables for routes
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isRedeemRoute = redeem.includes(nextUrl.pathname);
  const isRedeemRewardRoute = redeemRewards.includes(nextUrl.pathname);
  const isKitchenRoute = kitchenRoute.includes(nextUrl.pathname);

  const isStaffRoute = kitchenRoute
    .filter(
      (route) =>
        route !== "/kitchen/products" &&
        route !== "/kitchen/rewards" &&
        route !== "/kitchen/admin",
    )
    .includes(nextUrl.pathname);

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

  //check for userRole
  if (userRole !== undefined) {
    if (userRole !== "ADMIN" && !isStaffRoute) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
  }

  //check if cartItem cookie === 0
  if (Number(cartItems) < 1 && isCartItemRoute && !isOrderingPhase) {
    return NextResponse.redirect(new URL(DEFAULT_CUSTOMER_REDIRECT, nextUrl));
  }

  // //check if url === baseUrl/redeem
  // if (!isRedeemRoute) {
  //   // //check if no _loyalty_session cookie
  //   if (!isLoyaltyRewardSession) {
  //     return NextResponse.redirect(new URL(DEFAULT_LOYALTY_REDIRECT, nextUrl));
  //   }

  //   if (isLoyaltyRewardSession) {
  //     return NextResponse.redirect(
  //       new URL(DEFAULT_LOYALTY_REWARD_REDIRECT, nextUrl),
  //     );
  //   }
  // }

  //check if url === baseURl/redeem
  if (isRedeemRoute) {
    //check if _loyalty_session cookie exists
    if (isLoyaltyRewardSession) {
      return NextResponse.redirect(
        new URL(DEFAULT_LOYALTY_REWARD_REDIRECT, nextUrl),
      );
    }
  }

  //check if url === baseUrl/redeem/rewards
  if (isRedeemRewardRoute) {
    //check if _loyalty_session cookie does not exists
    if (!isLoyaltyRewardSession) {
      return NextResponse.redirect(new URL(DEFAULT_LOYALTY_REDIRECT, nextUrl));
    }
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

  if (!isLoggedIn && isKitchenRoute) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  response.headers.set(`x-middleware-cache`, `no-cache`);
  return response;
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
