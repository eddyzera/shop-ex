import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

export default function SignUp() {
  return (
    <section className="min-w-96 rounded-md border p-6">
      <form action="" className="space-y-4">
        <div className="flex flex-col items-start space-y-1">
          <h2 className="text-xl text-foreground">Register</h2>
          <p className="text-sm text-foreground">Create your account now.</p>
        </div>
        <div className="space-y-1">
          <Input placeholder="John Doe" name="name" type="name" id="name" />
        </div>
        <div className="space-y-1">
          <Input
            placeholder="john_doe@example"
            name="email"
            type="email"
            id="email"
          />
        </div>
        <div className="space-y-1">
          <Input
            placeholder="Ex: password"
            name="password"
            type="password"
            id="password"
          />
        </div>
        <div className="space-y-1">
          <Input
            placeholder="Ex: password"
            name="confirm_password"
            type="confirm_password"
            id="confirm_password"
          />
        </div>
        <Separator />
        <Button type="submit" className="w-full">
          Create account
        </Button>
        <Button variant="link" className="w-full" size="sm" asChild>
          <Link href="/auth/sign-in">Already registered? Sign in</Link>
        </Button>
      </form>
    </section>
  )
}
