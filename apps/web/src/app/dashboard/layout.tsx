import { Header } from '@/components/header'
import { NavBar } from '@/components/navigation'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen w-full flex-col p-4">
      <NavBar />
      <div className="w-full pl-20 pr-9">
        <Header />
        {children}
      </div>
    </div>
  )
}
