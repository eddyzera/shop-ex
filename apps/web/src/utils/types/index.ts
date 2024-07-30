import { z } from 'zod'

import { formSignInSchema, formSignUpSchema } from '../schemas'

export type FormSignInSchemaType = z.infer<typeof formSignInSchema>

export type FormSignUpSchemaType = z.infer<typeof formSignUpSchema>
