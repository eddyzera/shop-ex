'use client'
import { CreditCard, DollarSign, Plus, UsersRound } from 'lucide-react'
import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const Highlights: React.FunctionComponent = () => {
  return (
    <div className="grid grid-cols-4 space-x-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle>Monthly Revenue</CardTitle>
          <CardDescription className="m-0">
            <DollarSign className="h-4 w-4" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <DollarSign className="h-5 w-5" />{' '}
              <p className="text-xl">45,231.89</p>
            </div>
            <small className="text-sm text-zinc-700">
              +20.1% from last month
            </small>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle>Sales</CardTitle>
          <CardDescription className="m-0">
            <CreditCard className="h-4 w-4" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <Plus className="h-5 w-5" /> <p className="text-xl">45,231.89</p>
            </div>
            <small className="text-sm text-zinc-700">
              +20.1% from last month
            </small>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle>Customer</CardTitle>
          <CardDescription className="m-0">
            <UsersRound className="h-4 w-4" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <Plus className="h-5 w-5" /> <p className="text-xl">2350</p>
            </div>
            <small className="text-sm text-zinc-700">
              +20.1% from last month
            </small>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle>Customer</CardTitle>
          <CardDescription className="m-0">
            <UsersRound className="h-4 w-4" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <Plus className="h-5 w-5" /> <p className="text-xl">2350</p>
            </div>
            <small className="text-sm text-zinc-700">
              +20.1% from last month
            </small>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
