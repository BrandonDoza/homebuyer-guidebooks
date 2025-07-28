"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { realtorDirectory } from "@/lib/realtors";
import { lenderDirectory } from "@/lib/lenders";

export default function AgentHome() {
  const { lender, agent } = useParams();
  const realtorInfo = realtorDirectory[agent as string];
  const lenderInfo = lenderDirectory[lender as string];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // On mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const guides = [
    {
      title: "The Home Buyer Process",
      image: "/guides/homebuyerguid.png",
      slug: "buyer-process",
    },
    {
      title: "Pre-Approval Guide",
      image: "/guides/preapprovalguide.png",
      slug: "pre-approval",
    },
    {
      title: "Mortgage FAQ",
      image: "/guides/foaqguide.png",
      slug: "faq",
    },
    {
      title: "Glossary of Mortgage Terms",
      image: "/guides/glossaryguide.png",
      slug: "glossary",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
        Home Buyer Guidebooks
      </h1>

      <p className="text-center text-gray-600 text-sm sm:text-base mb-2">
        Your most trusted resource 🤝 for navigating the homebuying journey with
        confidence.
      </p>

      {realtorInfo && lenderInfo && (
        <p className="text-center text-gray-700 text-sm sm:text-base mb-6">
          📘 Presented by <strong>{realtorInfo.fullName}</strong> &{" "}
          <strong>{lenderInfo.fullName}</strong>
        </p>
      )}

      <div className="mt-5 flex justify-center gap-6 flex-wrap px-4 mb-5">
        {realtorInfo && (
          <a
            href={realtorInfo.contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            🏠 Contact {realtorInfo.firstName}
          </a>
        )}

        {lenderInfo && (
          <a
            href={lenderInfo.contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            💰 Contact {lenderInfo.firstName}
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {guides.map((guide) => {
          const linkHref = isMobile
            ? `/pdfs/${lender}/${agent}/${guide.slug}.pdf`
            : `/${lender}/${agent}/${guide.slug}`;

          return (
            <a
              key={guide.title}
              href={linkHref}
              target={isMobile ? "_blank" : "_self"}
              rel={isMobile ? "noopener noreferrer" : undefined}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition bg-white w-full"
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
          );
        })}
      </div>
    </main>
  );
}
