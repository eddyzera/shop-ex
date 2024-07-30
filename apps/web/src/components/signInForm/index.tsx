'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

import { TextField } from '@/components/form/textField'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'
import { formSignInSchema } from '@/utils/schemas'
import { FormSignInSchemaType } from '@/utils/types'

export const SignInForm: React.FunctionComponent = () => {
  const form = useForm<FormSignInSchemaType>({
    resolver: zodResolver(formSignInSchema),
  })
  return (
    <section className="min-w-96 rounded-md border p-6">
      <Form {...form}>
        <form action="" className="space-y-5">
          <div className="flex flex-col items-start space-y-1">
            <h2 className="text-2xl text-foreground">Log in</h2>
            <p className="text-sm text-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="space-y-1">
            <TextField<FormSignInSchemaType>
              name="email"
              label="E-mail"
              placeholder="email@example.com"
              type="email"
            />
          </div>
          <div className="space-y-1">
            <TextField<FormSignInSchemaType>
              name="password"
              label="Password"
              placeholder="example123@"
              type="password"
            />
          </div>
          <Separator />
          <Button
            type="submit"
            className="w-full bg-lime-300 text-lime-800 hover:bg-lime-300/90"
          >
            Sign in with e-mail
          </Button>
          <Button variant="link" className="w-full" size="sm" asChild>
            <Link href="/auth/sign-up">Create new account</Link>
          </Button>
        </form>
      </Form>
    </section>
  )
}
