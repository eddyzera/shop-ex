'use client'

import { Bolt, House, Package, ShoppingCart, Users2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { Separator } from '../ui/separator'

export const NavBar: React.FunctionComponent = () => {
  return (
    <aside className="fixed inset-y-0 bottom-4 left-4 top-4 z-10 hidden w-14 flex-col justify-between rounded-lg border bg-zinc-900 sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-zinc-800 text-lg font-semibold text-zinc-100 md:h-8 md:w-8 md:text-base"
        >
          <House className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Home</span>
        </Link>
        <Link
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-zinc-800 text-lg font-semibold text-zinc-100 md:h-8 md:w-8 md:text-base"
        >
          <Package className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Order</span>
        </Link>

        <Link
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-zinc-800 text-lg font-semibold text-zinc-100 md:h-8 md:w-8 md:text-base"
        >
          <ShoppingCart className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Product</span>
        </Link>

        <Link
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-zinc-800 text-lg font-semibold text-zinc-100 md:h-8 md:w-8 md:text-base"
        >
          <Users2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Customer</span>
        </Link>
      </nav>
      <div className="px-4">
        <Separator />
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-zinc-800 text-lg font-semibold text-zinc-100 md:h-8 md:w-8 md:text-base"
          >
            <Bolt className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Configuration</span>
          </Link>
        </nav>
      </div>
    </aside>
  )
}
