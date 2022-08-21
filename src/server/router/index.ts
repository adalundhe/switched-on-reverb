// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { listingsRouter } from './listings'

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('listings.', listingsRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
