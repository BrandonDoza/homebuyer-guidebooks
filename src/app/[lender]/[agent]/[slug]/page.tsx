'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { realtorDirectory } from '@/lib/realtors'
import { lenderDirectory } from '@/lib/lenders'

export default function CoBrandedGuidePage() {
  const { lender, agent, slug } = useParams()
  const lenderInfo = lenderDirectory[lender as string]
  const realtorInfo = realtorDirectory[agent as string]
  const pdfUrl = `/pdfs/${lender}/${agent}/${slug}.pdf`

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const detectMobile = () => {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
      const isSmallScreen = window.innerWidth <= 1024
      setIsMobile(isIOS || isSmallScreen)
    }

    detectMobile()
    window.addEventListener('resize', detectMobile)
    return () => window.removeEventListener('resize', detectMobile)
  }, [])

  if (!realtorInfo) {
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
          {slug?.toString().replace('-', ' ')}
        </h1>
        <p className="text-base sm:text-lg text-gray-700">
          Presented by {realtorInfo.fullName} & Brandon Doza
        </p>

        <div className="mt-4 flex justify-center gap-4 flex-wrap">
          <a
            href="https://www.homeloanswithbrandon.com"
            target="_blank"
            className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            📞 Contact Brandon
          </a>
          <a
            href={realtorInfo.contactUrl}
            target="_blank"
            className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            🤝 Contact {realtorInfo.firstName}
          </a>
        </div>
      </div>

      <div className="mb-6 text-center">
        <a
          href={`/${lender}/${agent}`}
          className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
        >
          ⬅️ Back to All Guides
        </a>
      </div>

      {isMobile ? (
        <div className="text-center">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            📄 View PDF
          </a>
        </div>
      ) : (
        <div className="w-full h-[90vh]">
          <iframe
            src={pdfUrl}
            className="w-full h-full border rounded"
            title="PDF Viewer"
          />
        </div>
      )}
    </main>
  )
}
