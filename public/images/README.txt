Photographs used on the site. Every file here is a real CELIS College photo,
exported from the client's camera RAW files. Set the path in the matching file
in src/content/. An empty path renders a gradient placeholder, never a broken
image.

Page / section photos (1920px wide, 3:2)

  celis-hero-analyzer-lecture.jpg  - lecturer beside the clinical chemistry analyzer
                                     used by: home.ts (hero)
  celis-instrument-room.jpg        - instrument racks, staff standing
                                     used by: home.ts (ecosystem), about.ts (purpose),
                                              app/about/page.tsx (hero)
  celis-analyzer-bench.jpg         - analyzers and workstations on the training bench
                                     used by: program.ts, app/program/page.tsx (hero),
                                              instruments.ts (sample processing)
  celis-training-lab.jpg           - training room, session in progress
                                     used by: app/learning-experience/page.tsx (hero)
  celis-lab-discussion.jpg         - staff and visitors talking in the instrument room
                                     used by: app/contact/page.tsx (hero)
  celis-lecture-instrument-room.jpg- class beside the analyzers
                                     used by: experience.ts gallery
  celis-medical-devices-lecture.jpg- lecture on medical equipment classification
                                     used by: experience.ts gallery
  celis-classroom-session.jpg      - students seated during a session
                                     used by: experience.ts gallery

Instrument cards (1440x1080, 4:3) - used by src/content/instruments.ts

  celis-hematology-analyzer.jpg    - Mindray BC-2300 hematology analyzer
  celis-chemistry-analyzer.jpg     - clinical chemistry analyzer, lecturer explaining
  celis-immunoassay-bench.jpg      - analyzers and service workstations
  celis-electrolyte-analyzer.jpg   - Miura One ISE analyzer
  celis-sample-prep-bench.jpg      - sample prep equipment and test instruments
  celis-microscopes.jpg            - clinical microscopes on the instrument rack
  celis-instrument-rack.jpg        - instrument racks in the training room

Landscape, 1600x1000 or larger. Next.js resizes and converts to WebP/AVIF.
Keep the alt text honest: it describes what is actually in the frame.

Stock photos (Pixabay Content License - free commercial use, no attribution
required). NOT CELIS photos; swap for real ones when available. Prefixed
"stock-" so they are easy to spot. Pixabay serves 1280px without a login.

  stock-operating-room.jpg         - hospital operating room, no people
                                     pixabay.com/photos/operating-room-hospital-clean-or-5979687/
                                     used by: about.ts (vision)
  stock-ecg-monitor.jpg            - Ivy Biomedical cardiac trigger monitor, ECG trace
                                     pixabay.com/photos/equipment-hospital-ecg-3089883/
                                     used by: about.ts (future)
  stock-bg-circuit-board.jpg       - circuit board macro, section background
                                     pixabay.com/photos/mother-board-electronic-electronics-5365197/
                                     used by: about.ts (whatWeDo.background)
  stock-bg-hospital-corridor.jpg   - empty hospital corridor, section background
                                     pixabay.com/photos/hallway-hospital-clean-rooms-doors-5979689/
                                     used by: about.ts (commitmentsBackground)

Section backgrounds: pass `background` to <Panel>. It draws the photo under a
white wash, so busy photos are fine - they only read as texture.
