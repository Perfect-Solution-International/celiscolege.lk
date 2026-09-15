Put the client's photographs here, then set the path in the matching file in
src/content/. An empty path renders a gradient placeholder, never a broken image.

Expected file names (these are the paths already written in the content comments):

  lab-bench.jpg        - the analyzer bench, wide shot
                         used by: home.ts (hero), program.ts, experience.ts gallery
  lab-room.jpg         - the training room with the service tools on the table
                         used by: about.ts (purpose), experience.ts gallery
  lab-instruments.jpg  - the second room with instrument racks
                         used by: home.ts (ecosystem), experience.ts gallery

  instruments/*.jpg    - optional, one per instrument in src/content/instruments.ts

Landscape, 1600x1000 or larger. Next.js resizes and converts to WebP/AVIF.
