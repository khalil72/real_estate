import { z } from 'zod';
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters').max(50, 'Password must not exceed 50 characters'),
});

export type LoginFormData = z.infer<typeof loginSchema>;