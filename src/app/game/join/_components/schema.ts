import { ZodErrorMap, z } from 'zod';

const errorMap: ZodErrorMap = () => {
  return { message: 'Game room URL required' };
};

export const schema = z.object({
  name: z.string({ errorMap }).optional(),
});

export type Schema = z.infer<typeof schema>;
