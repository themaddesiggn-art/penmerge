import { createPageMetadata } from '@/constants/metadata'

export const metadata = createPageMetadata(
  'Home',
  'Premium author-services and publishing support. Everything your book needs from manuscript to market.',
  '/'
)

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="section-padding">
        <div className="section-container">
          <h1 className="text-center mb-lg">Welcome to PenMerge</h1>
          <p className="text-center text-lg text-slate-600">
            Premium author-services and publishing support
          </p>
        </div>
      </div>
    </main>
  )
}
