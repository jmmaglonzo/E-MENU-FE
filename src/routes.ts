/**
 * An array of routes that are accessible to the public
 * These routes does not require authentication
 *@type {string[]}
 */
export const publicRoutes = ["/"];

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
