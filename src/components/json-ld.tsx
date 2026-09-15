/**
 * Emits a JSON-LD block. Next.js renders this in the server HTML, which is
 * what crawlers read - no client JavaScript is involved.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];

  return (
    <>
      {payload.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          // The payload is built from our own content files, never user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
