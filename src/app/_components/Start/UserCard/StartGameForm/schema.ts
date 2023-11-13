import { ZodErrorMap, z } from 'zod';

const errorMap: ZodErrorMap = () => {
  return { message: "GitMon's name is required" };
};

export const schema = z.object({
  name: z.string({ errorMap }),
});

export type Schema = z.infer<typeof schema>;
