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
    <main className="min-h-screen bg-white px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-800">
        HomeBuyerGuidebooks.com
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {guides.map((guide) => (
          <a
            key={guide.title}
            href={`/pdfs/brandondoza/${guide.slug}.pdf`}
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
      <div className="mt-10 text-center">
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
  );
}
