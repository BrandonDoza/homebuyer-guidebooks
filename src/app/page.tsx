export default function Home() {
  const guides = [
    {
      title: "The Home Buyer Process",
      image: "/guides/loanprocessguide.png",
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

      <p className="text-center text-gray-700 text-sm sm:text-base mb-6">
        📘 Presented By Brandon Doza
      </p>

      <p className="text-center text-gray-700 text-xs sm:text-sm mb-4 sm:mb-6">
        MPA Home Loans
      </p>

      <div className="mt-6 sm:mt-10 mb-6 sm:mb-10 text-center">
        <a
          href="https://www.homeloanswithbrandon.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          📞 Contact Brandon
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {guides.map((guide) => (
          <a
            key={guide.title}
            href={`/pdfs/brandondozas/${guide.slug}.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={guide.image}
              alt={guide.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-4 text-center text-lg font-medium text-blue-800">
              {guide.title}
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
