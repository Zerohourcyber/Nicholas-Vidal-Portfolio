# Nicholas Vidal - Personal Portfolio

A professional, warm-themed personal portfolio site built with Next.js 14, TypeScript, and TailwindCSS.

## Project Overview

This is your personal **Live Resume** site - completely separate from the "Live Resume" landing page project.

### Design Theme
- **Warm minimalist aesthetic** (NOT dark/neon theme)
- Color palette: Cream, amber, teal, slate, and gold accents
- Professional typography with serif headings
- Soft shadows and smooth animations

### Tech Stack
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS (custom warm color palette)
- Framer Motion for animations
- shadcn/ui components

## Setup

1. Navigate to the project directory:
   ```bash
   cd "C:\Users\airfo_8wjj6iv\Desktop\Nicholas-Vidal-Portfolio"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
Nicholas-Vidal-Portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx (Home)
│   ├── about/page.tsx
│   ├── experience/page.tsx
│   ├── projects/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── ui/ (shadcn components)
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── SectionHeader.tsx
│   ├── Timeline.tsx
│   ├── ProjectCard.tsx
│   └── SkillsGrid.tsx
├── lib/
│   ├── utils.ts
│   └── seo.config.ts
└── public/
    └── (images and assets)
```

## Remaining Setup Steps

The core structure has been created. You need to:

1. **Complete the component files** - See `/SETUP_GUIDE.md` for the remaining component code
2. **Add your professional photo** to `/public/profile.jpg`
3. **Add a resume PDF** to `/public/resume.pdf`
4. **Customize content** in each page with your actual experience, projects, and information
5. **Update SEO config** in `/lib/seo.config.ts` with your actual links and details

## Pages

- **/** - Hero section with introduction and quick stats
- **/about** - Professional background, skills, certifications, education
- **/experience** - Timeline of career progression
- **/projects** - Portfolio of cybersecurity projects
- **/contact** - Contact form and connection options

## Key Features

- ✅ Warm, professional color scheme
- ✅ Responsive mobile-first design
- ✅ SEO optimized
- ✅ Smooth Framer Motion animations
- ✅ Professional typography
- ✅ Resume download button
- ✅ Contact form integration ready
- ✅ Timeline component for experience
- ✅ Project cards with tags

## Customization

### Colors
All colors are defined in `tailwind.config.ts`. Main colors:
- Amber (primary accent)
- Teal (secondary accent)
- Slate (text)
- Gold (highlights)

### Content
Update the following files with your information:
- `/lib/seo.config.ts` - SEO metadata and links
- `/app/about/page.tsx` - Skills, certifications, education
- `/app/experience/page.tsx` - Work history
- `/app/projects/page.tsx` - Portfolio projects
- `/app/contact/page.tsx` - Contact information

## Next Steps

1. Install dependencies: `npm install`
2. Copy remaining components from `SETUP_GUIDE.md`
3. Test locally: `npm run dev`
4. Customize content with your information
5. Deploy to Vercel or your preferred platform

## Differences from "Live Resume" Project

This is your **personal brand site** with:
- Warm professional theme (vs. dark neon theme)
- Focus on cybersecurity expertise
- Career timeline and certifications
- Professional aesthetic
- **Completely independent** from the Build Yours landing page

---

Built with Next.js 14, TypeScript, and professional care ❤️

