'use client'
import React from 'react'
import { PolarAngleAxis, RadialBar, RadialBarChart } from 'recharts'

import { Card, CardContent } from '../ui/card'
import { ChartContainer } from '../ui/chart'

export const OrdersStatus: React.FunctionComponent = () => {
  return (
    <Card>
      <CardContent className="flex gap-4 p-4">
        <div className="grid items-center gap-2">
          <div className="grid flex-1 auto-rows-min gap-0.5">
            <div className="text-sm text-muted-foreground">Orders</div>
            <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
              14
            </div>
          </div>
          <div className="grid flex-1 auto-rows-min gap-0.5">
            <div className="text-sm text-muted-foreground">Shipments</div>
            <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
              5
            </div>
          </div>
          <div className="grid flex-1 auto-rows-min gap-0.5">
            <div className="text-sm text-muted-foreground">Cancelled</div>
            <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
              20
            </div>
          </div>
        </div>
        <ChartContainer
          config={{
            orders: {
              label: 'Orders',
              color: 'hsl(var(--chart-1))',
            },
            shipments: {
              label: 'Shipments',
              color: 'hsl(var(--chart-2))',
            },
            cancelled: {
              label: 'Cancelled',
              color: 'hsl(var(--chart-3))',
            },
          }}
          className="mx-auto aspect-square w-full max-w-[80%]"
        >
          <RadialBarChart
            margin={{
              left: -10,
              right: -10,
              top: -10,
              bottom: -10,
            }}
            data={[
              {
                activity: 'orders',
                value: (8 / 12) * 100,
                fill: 'var(--color-orders)',
              },
              {
                activity: 'shipments',
                value: (46 / 60) * 100,
                fill: 'var(--color-shipments)',
              },
              {
                activity: 'cancelled',
                value: (245 / 360) * 100,
                fill: 'var(--color-cancelled)',
              },
            ]}
            innerRadius="20%"
            barSize={24}
            startAngle={90}
            endAngle={450}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              dataKey="value"
              tick={false}
            />
            <RadialBar dataKey="value" background cornerRadius={5} />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
