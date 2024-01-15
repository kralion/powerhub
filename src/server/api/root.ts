import { createTRPCRouter } from "@/server/api/trpc";
import { carsRouter } from "@/server/api/routers/cars";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  cars: carsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
