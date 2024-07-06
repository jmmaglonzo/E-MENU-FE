import { z } from "zod";

export const formSchema = z.object({
  privacyPolicy: z.boolean().refine((value) => value === true, {
    message: "You must acknowledge the privacy policy.",
  }),
});
