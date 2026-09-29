import { Media } from "@/components/media";
import { Container, Panel, SectionHeading } from "@/components/ui";
import { learningGallery } from "@/content/home";

/** Photo gallery under the "Learn. Practice. Build." principles section. */
export function LearningGallery() {
  // Doubled so the track can loop seamlessly at exactly -50%.
  const track = [...learningGallery.images, ...learningGallery.images];

  return (
    <Panel>
      <Container className="px-0 sm:px-0 lg:px-0">
        <SectionHeading
          eyebrow={learningGallery.eyebrow}
          title={learningGallery.title}
          body={learningGallery.body}
          align="center"
        />
      </Container>

      <div className="marquee mt-10 -mx-5 sm:-mx-8 lg:-mx-12">
        <div className="marquee-track gap-4">
          {track.map((photo, index) => (
            <div
              key={`${photo.src}-${index}`}
              className="glass w-64 shrink-0 overflow-hidden rounded-[var(--radius-card)] sm:w-72"
            >
              <Media
                src={photo.src}
                alt={photo.alt}
                accent="from-sky-200 via-blue-100 to-indigo-200"
                className="aspect-[4/3] w-full"
                sizes="(min-width: 640px) 288px, 256px"
              />
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
