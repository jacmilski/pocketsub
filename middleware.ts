import { authMiddleware } from "@clerk/nextjs";
 
const publicRoutes = ['/', '/blog']
export default authMiddleware({
    publicRoutes,
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};