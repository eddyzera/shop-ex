import { Charts } from '@/components/charts'
import { Highlights } from '@/components/highlights'

export default function Home() {
  return (
    <section className="space-y-4 py-8">
      <Highlights />
      <Charts />
    </section>
  )
}
