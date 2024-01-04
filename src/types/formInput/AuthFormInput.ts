import { z } from 'zod'

export const authFormSchema = z.object({
  name: z
    .string()
    .min(8, 'Please enter the name with at least 8 characters')
    .max(128, 'Please enter name in 128 characters or less'),
  email: z
    .string()
    .min(1, 'Email is required')
    .max(128, 'Please enter email in 128 characters or less')
    .email('Please enter in email address format'),
  password: z
    .string()
    .min(8, 'Please enter at least 8 characters')
    .max(128, 'Please enter name in 128 characters or less')
    .refine(
      (password: string) => /[A-Za-z]/.test(password) && /[0-9]/.test(password),
      'Password must contain both letters and numbers',
    ),
})

export type AuthFormInput = z.infer<typeof authFormSchema>
