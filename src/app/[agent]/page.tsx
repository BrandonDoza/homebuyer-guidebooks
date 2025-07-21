'use client'

import { useParams } from 'next/navigation'
import { realtorDirectory } from '@/lib/realtors'

export default function AgentHome() {
  const { agent } = useParams()
  const realtor = realtorDirectory[agent as string]

  const guides = [

    {
      title: 'The Home Buyer Process',
      image: '/guides/homebuyerguid.png',
      slug: 'buyer-process',
    },
    {
        title: 'Pre-Approval Guide',
        image: '/guides/preapprovalguide.png',
        slug: 'pre-approval',
      },
    {
      title: 'Mortgage FAQ',
      image: '/guides/foaqguide.png',
      slug: 'faq',
    },
    {
      title: 'Glossary of Mortgage Terms',
      image: '/guides/glossaryguide.png',
      slug: 'glossary',
    },
  ]

  return (
    <main className="min-h-screen bg-white px-4 py-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-blue-800">
  Home Buyer Guidebooks
</h1>
      {realtor && (
        <p className="text-center text-gray-700 text-sm sm:text-base mb-6">
        📘 Presented By <strong>{realtor.fullName}</strong> & <strong>Brandon Doza</strong>
      </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {guides.map((guide) => (
          <a
            key={guide.title}
            href={`/${agent}/${guide.slug}`}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition bg-white"
          >
            <img
              src={guide.image}
              alt={guide.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-4 text-center text-base sm:text-lg font-medium text-blue-800">
              {guide.title}
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-6 flex-wrap px-4">
      {realtor && (
          <a
            href={realtor.contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            🤝 Contact {realtor.firstName}
          </a>
        )}

        <a
          href="https://www.homeloanswithbrandon.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          📞 Contact Brandon
        </a>
      </div>
    </main>
  )
}
