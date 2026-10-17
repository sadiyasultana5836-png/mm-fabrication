# MM FABRICATION — Premium Cinematic Textile Website

> **Beyond Fabric. Beyond Ordinary.**
> *"Explore the layers, textures, and craftsmanship behind every fabric."*

A luxury, cinematic web experience designed from the ground up for **MM FABRICATION**, dedicated purely to **fabric, cloth, textile materials, and fabric layer deconstruction**.

---

## 🌟 Key Features & Sections

1. **Cinematic Hero Opening**
   - Full-screen cinematic presentation with soft studio directional lighting and subtle vignettes.
   - Real-time interactive silk physics simulation (`SilkClothCanvas`) reacting smoothly to cursor movement and slow ambient billows.
   - Replaceable video slot (`/videos/hero-fabric.mp4`) with graceful fallback.
   - Direct action triggers: **EXPLORE THE FABRIC** and **WATCH THE FILM**.

2. **Main Attraction — The Five Layers of Fabric**
   - Immersive 3D layer-by-layer deconstruction inspired by cinematic product reveals.
   - **Interactive 3D Exploded View vs. View Complete Fabric**:
     - *Exploded Mode*: Reveals all 5 layers separated in 3D perspective with depth shadows and glassmorphism.
     - *Complete Fabric Mode*: Collapses all layers back together into a single finished draped textile.
   - Interactive 3D Orbit: Click and drag or hover to tilt perspective in real-time.
   - Five distinct illustrative stages:
     - `LAYER 01 — THE FIBRES`: *"Every fabric begins with its fibres."* (Microscopic filaments, fineness & staple metrics)
     - `LAYER 02 — THE YARN`: *"Fibres come together to form the foundation of a textile."* (Combed ring-spun multi-ply yarn cord & twist angles)
     - `LAYER 03 — THE WEAVE OR KNIT`: *"Structure gives fabric its character."* (2/2 balanced twill interlacing matrix & density)
     - `LAYER 04 — THE FABRIC SURFACE`: *"Texture, softness, and finish define the experience."* (Steam calendering, brushed micro-nap & specular sheen)
     - `LAYER 05 — THE FINISHED TEXTILE`: *"From individual fibres to finished fabric."* (Fluid gravitational drape & 280 gsm blend)
   - Previous / Next navigation controls with stage indicators and layer focus.

3. **Cinematic Fabric Film**
   - Heading: **EVERY THREAD HAS A STORY.**
   - Supporting: *"Discover the beauty of fabric through texture, movement, and detail."*
   - Custom 21:9 ultra-cinematic player with play/pause, timecode display, interactive scrub bar, volume toggle, and fullscreen support.
   - Generative canvas reel fallback when external video is not yet provided.
   - Replaceable video slot: drop your film into `public/videos/cinematic-fabric-film.mp4`.

4. **A Closer Look at Fabric (About Section)**
   - Heading: **A CLOSER LOOK AT FABRIC.**
   - Text: *"Fabric is more than what meets the eye. Its fibres, structure, texture, and finish come together to create materials for countless possibilities."*
   - Material pillars: The Fibre Foundation, Interlocking Geometry, Sensory Finish.

5. **Let's Talk Fabric (Contact Section)**
   - Heading: **LET'S TALK FABRIC.**
   - Interactive inquiry form for swatch requests, custom weave consultations, and studio appointments.
   - Fully editable communication channels without fabricated phone numbers or physical addresses.

6. **Ambient Sound Architecture**
   - Subtle, non-intrusive textile studio atmosphere generated on demand via Web Audio API (warm low-pass room tone).

---

## 🎨 Design System

- **Warm Ivory**: `#F5F0E8`
- **Soft Beige**: `#D9C8B2`
- **Deep Charcoal**: `#242321`
- **Muted Taupe**: `#9B8875`
- **Clean White**: `#FFFFFF`
- **Typography**: Editorial Serif (*Playfair Display*, *Cinzel*) & Precision Sans (*Plus Jakarta Sans*, *JetBrains Mono*).

---

## 📁 Project Structure

```
mm-fabrication/
├── public/
│   ├── favicon.svg              # Woven ribbon & thread monogram
│   ├── images/
│   │   ├── layer-1-fibres.svg   # Macro filament stage
│   │   ├── layer-2-yarn.svg     # Multi-ply twisted yarn cord
│   │   ├── layer-3-weave.svg    # 2/2 twill interlaced matrix
│   │   ├── layer-4-surface.svg  # Calendered fabric surface & sheen
│   │   ├── layer-5-finished.svg # Fluid cascading finished textile
│   │   ├── film-poster.svg      # 21:9 brand film poster
│   │   └── hero-fabric-poster.svg
│   └── videos/                  # Drop custom MP4 files here
│       ├── hero-fabric.mp4      (optional user video)
│       └── cinematic-fabric-film.mp4 (optional user film)
├── src/
│   ├── components/
│   │   ├── AmbientAudio.js      # Web Audio studio atmosphere
│   │   ├── SilkClothCanvas.jsx  # Interactive cloth wave simulation
│   │   ├── Navbar.jsx           # Luxury brand navigation
│   │   ├── HeroSection.jsx      # Cinematic full-screen hero
│   │   ├── FabricLayersSection.jsx # 5-layer 3D deconstruction
│   │   ├── CinematicFilmSection.jsx# 21:9 brand film player
│   │   ├── AboutSection.jsx     # "A Closer Look at Fabric"
│   │   ├── ContactSection.jsx   # "Let's Talk Fabric" inquiry form
│   │   └── Footer.jsx           # Minimal editorial footer
│   ├── config/
│   │   └── siteData.js          # Centralized editable content & assets
│   ├── styles/
│   │   └── index.css            # Textile textures, 3D perspective, sheen
│   ├── App.jsx
│   └── main.jsx
├── Launch-Website.bat           # 1-click Windows launcher
├── package.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json                  # Production deployment configuration
```

---

## 🚀 How to Run Locally

### Option A: Double-Click
Double-click `Launch-Website.bat` to automatically start Vite and open the site in your browser.

### Option B: Terminal
```bash
# In the mm-fabrication directory:
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build Test
```bash
npm run build
npm run preview
```

---

## ☁️ Exact Vercel Deployment Steps

### Method 1: Deploy with Vercel CLI (Fastest)
1. Install Vercel CLI globally (if not already installed):
   ```bash
   npm i -g vercel
   ```
2. In the `mm-fabrication` folder, run:
   ```bash
   vercel
   ```
3. Follow the CLI prompts:
   - Set up and deploy? **Yes**
   - Which scope? Select your personal or team account
   - Link to existing project? **No**
   - Project name: `mm-fabrication`
   - In which directory is your code located? `./`
   - Want to modify build settings? **No** (Vercel automatically detects Vite via `vercel.json`)
4. To deploy to production:
   ```bash
   vercel --prod
   ```

### Method 2: Deploy via GitHub / GitLab / Bitbucket
1. Push the `mm-fabrication` folder to a new repository on GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: MM FABRICATION cinematic textile website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/mm-fabrication.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com).
3. Click **Add New...** -> **Project**.
4. Import your `mm-fabrication` repository.
5. Framework Preset: **Vite**.
6. Click **Deploy**. Vercel will run `npm run build` and publish your site with global edge CDN caching.

---

## 🎥 Assets You Can Supply / Replace Anytime

The website works immediately out of the box with zero broken links thanks to high-resolution procedural textile visuals and canvas simulations.

Whenever you have real brand footage ready:
1. **Hero Background Video**:
   Save as `public/videos/hero-fabric.mp4` (Recommended: 1080p, H.264, muted looping video of flowing fabric/macro weaves, ~10-25 MB).
2. **Cinematic Brand Film**:
   Save as `public/videos/cinematic-fabric-film.mp4` (Recommended: 1080p or 4K, 21:9 or 16:9 aspect ratio, showcase of textile craft).
3. **Contact Info**:
   Update `src/config/siteData.js` with your active email addresses or phone lines when ready.
