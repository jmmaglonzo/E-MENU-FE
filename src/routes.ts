/**
 * An array of routes that are accessible to the public
 * These routes does not require authentication
 *@type {string[]}
 */
export const publicRoutes = [
  "/",
  "/order-history",
  "/order_waiting",
  "/order_waiting/order_summary",
  "/redeem",
  "/faq",
  "/checkout",
];

export const cartItemRoutes = [
  "/order_waiting",
  "/order_waiting/order_summary",
  "/checkout",
];

export const kitchenRoute = [
  "/kitchen",
  "/kitchen/order",
  "/kitchen/assistance",
  "/kitchen/products",
  "/kitchen/analytics",
];

export const redeemRewards = ["/redeem/rewards"];
export const redeem = ["/redeem"];

/**
 * An array of protected routes
 * These routes will redirect users to '/'
 * @type {string[]}
 */
export const authRoutes = ["/login"];

/**
 * Prefix for api route
 * Routes that starts with this prefix are used for API
 * @type {string}
 */
export const apiAuthPrefix = "/api";

/**
 * Default redirect path after logging in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/kitchen";
export const DEFAULT_CUSTOMER_REDIRECT = "/";
export const DEFAULT_LOYALTY_REDIRECT = "/redeem";
export const DEFAULT_LOYALTY_REWARD_REDIRECT = "/redeem/rewards";
