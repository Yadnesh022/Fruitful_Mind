# Fruitful Mind — Client Handbook & Documentation
> **Tagline:** "Discover The Curious You"  
> **Practitioner:** Simran Mistry, Psychologist (Master's in Counselling Psychology)  
> **Location:** Kothrud, Pune & Online Worldwide  
> **WhatsApp:** [+91 9769512475](https://wa.me/919769512475)  
> **Email:** simran.thefruitfulmind@gmail.com  

---

## 🌟 Overview & Tech Stack
This is a modern, high-performance static React website crafted for **Fruitful Mind**, featuring:
- **React 18 + Vite** (blazing-fast build, zero runtime backend required)
- **Tailwind CSS** with a custom palette extracted directly from the official logo (deep plum, warm peach/apricot, soothing sage, calming cream canvas)
- **LiquidGlass (Apple-style frosted glass)** with specular highlights, pointer-following light sweep, and SVG displacement refractions
- **Framer Motion** for spring physics, route transitions, and card expansions
- **Lenis** for smooth inertia scrolling
- **i18n Multi-Language Support** for English, Marathi (मराठी), and Hindi (हिंदी)
- **Dark Mode Toggle** with automatic preference detection and `localStorage` persistence
- **Static Content Architecture (`import.meta.glob`)**: Blog articles and Psychology Concepts are stored as clean JSON files in `/src/content`, allowing you to add new content without writing or touching React code.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Start development server (opens at http://localhost:3000)
npm run dev

# 3. Create production static build
npm run build

# 4. Preview production build locally
npm run preview
```

---

## ✍️ How to Add a New Blog Post

All blog articles reside in: `src/content/blogs/`. To add a new post, simply create a new `.json` file (e.g. `src/content/blogs/mindfulness-anxiety.json`):

```json
{
  "slug": "mindfulness-anxiety",
  "title": "Mindfulness for High-Functioning Anxiety",
  "category": "Emotional Wellbeing",
  "readTime": "5 min read",
  "date": "2026-11-10",
  "author": {
    "name": "Simran Mistry",
    "role": "Psychologist, Fruitful Mind",
    "credentials": "Master's in Counselling Psychology"
  },
  "coverImage": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
  "excerpt": "A short 2-sentence summary that appears on card listings and preview cards.",
  "toc": [
    { "id": "why-it-works", "title": "1. Why Mindfulness Calms the Brain" },
    { "id": "practical-tips", "title": "2. Three 60-Second Daily Anchors" }
  ],
  "content": [
    {
      "type": "paragraph",
      "text": "Your opening paragraph goes here..."
    },
    {
      "type": "heading",
      "level": 2,
      "id": "why-it-works",
      "text": "1. Why Mindfulness Calms the Brain"
    },
    {
      "type": "callout",
      "text": "\"A highlighted quote or key takeaway to reflect upon.\""
    },
    {
      "type": "step",
      "number": 1,
      "title": "Somatic Grounding",
      "text": "Description of step 1..."
    }
  ]
}
```
*That's it!* Vite automatically detects the new file and generates the article page and card listing immediately.

---

## 🧠 How to Add or Edit Psychology Concepts

Concepts are stored in: `src/content/concepts/` (e.g. `cognitive-dissonance.json`). Each concept file includes:
- `id`: unique url slug
- `title`: concept title
- `category`: e.g. "Cognitive Psychology", "Therapeutic Approaches", "Relational"
- `difficulty`: e.g. "Beginner Friendly", "Foundational", "Intermediate"
- `shortDefinition`: 1-2 sentence core definition
- `dailyExample`: relatable real-world situation
- `psychologyTheory`: historical origin or theoretical background
- `inTherapy`: how Simran addresses this in counselling
- `practicalTakeaway`: 1 key practice or question
- `tags`: array of tags (e.g. `["Anxiety", "Mindset"]`)

---

## 📬 Setting Up Form & Newsletter Endpoints

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. For the Contact Form:
   - Create a free form at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
   - Paste the endpoint URL into `VITE_CONTACT_ENDPOINT`:
     ```env
     VITE_CONTACT_ENDPOINT=https://formspree.io/f/your_form_id
     ```
3. For Newsletter Subscriptions:
   - Paste your Formspree/Mailchimp endpoint into `VITE_NEWSLETTER_ENDPOINT`.
4. WhatsApp Direct:
   - WhatsApp links work automatically with no setup needed via `wa.me/919769512475` with pre-filled session booking details.

---

## 🌐 Deploying to Static Hosting

### Option A: Vercel (Recommended)
1. Push your repository to GitHub or GitLab.
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository. Vercel automatically detects Vite:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Add environment variables from `.env` in the Vercel dashboard.
5. Click **Deploy**. Your site is live on a global CDN with free SSL!

### Option B: Netlify
1. Connect repository on [netlify.com](https://netlify.com).
2. Set **Build command:** `npm run build` and **Publish directory:** `dist`.
3. Add redirect rule in `public/_redirects`:
   ```
   /*    /index.html   200
   ```
4. Click **Deploy Site**.

### Option C: GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. Add `"deploy": "gh-pages -d dist"` to `package.json` scripts.
3. Run `npm run build && npm run deploy`.

---

## 📋 Client Placeholders Checklist

Before public launch, Simran should review and update these clear placeholders:
1. **Testimonials**: Replace `[Add client reflection]` cards in `src/pages/Home.jsx` with approved, anonymized client feedback.
2. **Social Links**: Replace `#TODO-Instagram` and `#TODO-LinkedIn` in `src/components/layout/Footer.jsx` and `src/pages/Home.jsx` with official social handles.
3. **Course Pricing**: Update `[Price: ₹X,XXX]` and `[4 Weeks]` in `src/pages/Course.jsx` with actual cohort enrollment fees and calendar dates.
4. **Form Endpoint**: Set your Formspree / Web3Forms endpoint in `.env` to receive contact inquiries in your email inbox.
