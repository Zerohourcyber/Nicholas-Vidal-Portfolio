# Setup Guide for Nicholas Vidal Portfolio

## Current Status

✅ **COMPLETED:**
- Project structure created
- Dependencies configured (package.json, tsconfig.json, etc.)
- Tailwind CSS with warm color theme
- Core UI components (Button, Card, Input, Textarea, Label)
- Layout with Navbar and Footer
- Homepage with Hero section
- SEO configuration
- README documentation

## Next Steps

### 1. Install Dependencies

```bash
cd "C:\Users\airfo_8wjj6iv\Desktop\Nicholas-Vidal-Portfolio"
npm install
```

### 2. Create Remaining Page Files

You need to create these page files (copy from the components I created earlier in the "personal" folder):

- `app/about/page.tsx` 
- `app/experience/page.tsx`
- `app/projects/page.tsx`
- `app/contact/page.tsx`

### 3. Create Additional Components

You need to create:

- `components/Timeline.tsx` - For the experience timeline
- `components/ProjectCard.tsx` - For project displays
- `components/SkillsGrid.tsx` - For skills section

These components were created earlier and can be copied from the components/personal folder in your Live Resume project:
- `C:\Users\airfo_8wjj6iv\Desktop\Live Resume\components\personal\Timeline.tsx`
- `C:\Users\airfo_8wjj6iv\Desktop\Live Resume\components\personal\PersonalProjectCard.tsx` (rename to ProjectCard.tsx)
- `C:\Users\airfo_8wjj6iv\Desktop\Live Resume\components\personal\SkillsGrid.tsx`

**IMPORTANT:** When copying these files, remove any path references to `@/components/personal/` and update them to point to the correct location.

### 4. Add Assets

Create a `public` folder and add:
- `public/resume.pdf` - Your resume PDF file
- `public/profile.jpg` - Your professional photo (optional, placeholder exists)

### 5. Customize Content

Update the following with your actual information:

#### lib/seo.config.ts
- Update URLs (LinkedIn, GitHub, Twitter, email)
- Update domain name from `nicholasvidal.com` to your actual domain
- Update OG image path

#### app/about/page.tsx
- Add your actual certifications
- Add your actual education
- Customize your story and mission

#### app/experience/page.tsx
- Add your actual work experience
- Update job titles, companies, dates
- Add your achievements and highlights

#### app/projects/page.tsx
- Add your actual projects
- Add project images to `/public/projects/`
- Update links and GitHub repos

#### app/contact/page.tsx
- Update contact information (email, phone, location)
- Update social links
- Update Calendly link

### 6. Test Locally

```bash
npm run dev
```

Open http://localhost:3000 and verify:
- All pages load correctly
- Navigation works
- Responsive design works on mobile
- Links are correct
- Resume download button works

### 7. Build for Production

```bash
npm run build
npm start
```

### 8. Deploy

Deploy to Vercel, Netlify, or your preferred platform:

```bash
# For Vercel
vercel

# Or connect your GitHub repo to Vercel dashboard
```

## Project Architecture

### Color Theme
- Primary: Amber (#D97706)
- Secondary: Teal (#0F766E)
- Background: Off-white (#F9FAFB)
- Text: Slate (#1E293B)

### Typography
- Headings: Merriweather (serif)
- Body: Inter (sans-serif)

### Key Features
- Warm, professional aesthetic
- Responsive design
- SEO optimized
- Smooth animations with Framer Motion
- Professional resume download
- Contact form ready

## Common Issues

### TypeScript Errors
If you see type errors, make sure all imports are correct and dependencies are installed.

### Missing Components
If pages reference missing components, check that you've copied all component files from the personal folder.

### Styling Issues
Make sure `tailwindcss-animate` is installed:
```bash
npm install tailwindcss-animate
```

## Support

If you encounter issues:
1. Check the console for error messages
2. Verify all files are in the correct locations
3. Ensure dependencies are installed
4. Check that component imports match file locations

---

## Quick Reference

### File Structure
```
Nicholas-Vidal-Portfolio/
├── app/
│   ├── globals.css ✅
│   ├── layout.tsx ✅
│   ├── page.tsx ✅
│   ├── about/page.tsx ⚠️ (copy from personal)
│   ├── experience/page.tsx ⚠️ (copy from personal)
│   ├── projects/page.tsx ⚠️ (copy from personal)
│   └── contact/page.tsx ⚠️ (copy from personal)
├── components/
│   ├── ui/ ✅
│   ├── Navbar.tsx ✅
│   ├── Footer.tsx ✅
│   ├── SectionHeader.tsx ✅
│   ├── Timeline.tsx ⚠️ (copy from personal)
│   ├── ProjectCard.tsx ⚠️ (copy from personal)
│   └── SkillsGrid.tsx ⚠️ (copy from personal)
├── lib/
│   ├── utils.ts ✅
│   └── seo.config.ts ✅
└── public/
    ├── resume.pdf ⚠️ (add your resume)
    └── profile.jpg ⚠️ (add your photo)
```

### Commands
```bash
npm install          # Install dependencies
npm run dev          # Development server
npm run build        # Production build
npm start            # Production server
npm run lint         # Run ESLint
```

Good luck with your personal portfolio! 🚀

