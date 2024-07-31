'use client'

import React from 'react'

import { OrdersStatus } from './ordersStatus'

export const Charts: React.FunctionComponent = () => {
  return (
    <div className="grid grid-cols-4">
      <OrdersStatus />
    </div>
  )
}
