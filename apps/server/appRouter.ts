import { runGemma } from "./gemmaDriver.ts";
import { publicProcedure, router } from "./trpc.ts";
import { z } from "zod";

export const appRouter = router({
  greeting: publicProcedure
    .input(
      z
        .object({
          name: z.string().nullish(),
        })
        .nullish(),
    )
    .query(({ input }) => {
      return {
        text: `hello ${input?.name ?? "world"}`,
      };
    }),
  search: publicProcedure
    .input(
        z.object({
            message: z.string()
        }),
    )
    .query(({ input }) => runGemma(input.message))
});

export type AppRouter = typeof appRouter;
