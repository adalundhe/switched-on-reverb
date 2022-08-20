import { createRouter } from "./context";
import { z } from "zod";
import axios from "axios";
import { env } from "../../env/server.mjs";

export const listingsRouter = createRouter()
  .query("all", {
    async resolve({ ctx }) {

      return await ctx.prisma.listing.findMany({
        orderBy: {
          createdAt: "desc"
        }
      });
    },
  })
  .query("/matching", {
    input: z
      .object({
        name: z.string(),
      })
      .nullish(),
    async resolve({ ctx, input }) {
      return await ctx.prisma.listing.findMany({
        where: {
          title: {
            startsWith: input?.name,
            endsWith: input?.name,
            in: input?.name
          }
        },
        orderBy: {
          createdAt: "desc"
        }
      });
    },
  });
