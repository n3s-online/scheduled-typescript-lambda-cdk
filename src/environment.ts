import * as z from "zod";

export const environmentSchema = z.object({
  // add environment variables here
});

export type EnvironmentVariables = z.infer<typeof environmentSchema>;
