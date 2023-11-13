import { ZodErrorMap, z } from 'zod';

const errorMap: ZodErrorMap = () => {
  return { message: "Enter your GitMon's name" };
};

export const schema = z.object({
  name: z.string({ errorMap }),
});

export type Schema = z.infer<typeof schema>;
