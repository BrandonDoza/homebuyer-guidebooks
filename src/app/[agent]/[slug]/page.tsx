'use client'

import { useParams } from 'next/navigation'
import { realtorDirectory } from '@/lib/realtors'

export default function CoBrandedGuidePage() {
    const params = useParams()
    const agent = Array.isArray(params?.agent) ? params.agent[0] : params?.agent
    const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug

  if (!agent || !slug) {
    return (
      <main className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-2xl font-bold mb-2">❌ Invalid Link</h1>
          <p className="text-gray-600">Missing guide or agent information in the URL.</p>
        </div>
      </main>
    )
  }

  const realtor = realtorDirectory[agent]
  const pdfUrl = `/pdfs/${agent}/${slug}.pdf`

  if (!realtor) {
    return (
      <main className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-2xl font-bold mb-2">❌ Agent not found</h1>
          <p className="text-gray-600">Make sure your link is correct.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 text-blue-800">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold capitalize mb-1">
          {slug.replace(/-/g, ' ')}
        </h1>
        <p className="text-sm sm:text-base text-gray-700">
          📘 Presented by <strong>{realtor.fullName}</strong> & <strong>Brandon Doza</strong>
        </p>

        <div className="mt-4 flex justify-center gap-4 flex-wrap">
          <a
            href="https://www.homeloanswithbrandon.com"
            target="_blank"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            📞 Contact Brandon
          </a>
          <a
            href={realtor.contactUrl}
            target="_blank"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            🤝 Contact {realtor.firstName}
          </a>
        </div>
      </div>

      <div className="mb-6 text-center">
        <a
          href={`/${agent}`}
          className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
        >
          ⬅️ Back to All Guides
        </a>
      </div>

      <div className="w-full h-[90vh]">
        <iframe src={pdfUrl} className="w-full h-full border rounded" />
      </div>
    </main>
  )
}
