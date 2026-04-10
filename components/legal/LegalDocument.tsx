type Props = {
  title: string;
  body: string;
};

export default function LegalDocument({ title, body }: Props) {
  return (
    <section className="bg-white min-h-[50vh] border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{title}</h1>
        <div className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-wrap font-sans">
          {body.trim()}
        </div>
      </div>
    </section>
  );
}
