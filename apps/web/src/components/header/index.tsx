'use client'
import { Bell } from 'lucide-react'
import React from 'react'

import { AccountMenu } from '../accountMenu'
import { Button } from '../ui/button'

export const Header: React.FunctionComponent = () => {
  return (
    <header className="w-full rounded-lg border bg-zinc-900 px-4 py-2">
      <div className="flex items-center justify-between">
        <h1 className="flex items-center justify-between gap-1 text-lg text-foreground">
          Shop
          <span className="mt-2 block h-2 w-2 rounded-full bg-lime-300"></span>
          ex
        </h1>
        <div className="flex items-center gap-4 border-l pl-4">
          <Button variant="ghost" className="rounded-full" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <AccountMenu />
        </div>
      </div>
    </header>
  )
}
