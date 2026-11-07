import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');

const staticRoutes = [
  {
    path: 'about',
    title: 'About Simran Mistry | Psychologist & Counsellor Pune | Fruitful Mind',
    description: "Learn about Simran Mistry, Psychologist (Master's in Counselling Psychology, 3+ years experience). Explore her eclectic, compassionate approach to emotional wellbeing in Kothrud, Pune.",
  },
  {
    path: 'services',
    title: 'Services | Emotional Wellbeing, Career Counselling, Psychology Tuition | Fruitful Mind',
    description: 'Comprehensive psychological services by Simran Mistry in Kothrud, Pune: Emotional Wellbeing (Anxiety, Stress, Overthinking), Career Guidance, and Psychology Tuition (Grade 11, 12, Graduate).',
  },
  {
    path: 'blogs',
    title: 'Psychology & Wellbeing Articles | Fruitful Mind - Simran Mistry',
    description: 'Compassionate psychological reflections on overthinking, procrastination, self-esteem, and anxiety by Simran Mistry, Psychologist Pune.',
  },
  {
    path: 'wellbeing-guide',
    title: 'Emotional Health & Wellbeing Guide | Free Toolkit by Simran Mistry',
    description: 'A comprehensive, practical self-guided toolkit for managing anxiety, overthinking, boundaries, and emotional regulation by Psychologist Simran Mistry.',
  },
  {
    path: 'psychology-concepts',
    title: 'Psychology Concepts Simplified | 8 Key Ideas Explained | Fruitful Mind',
    description: 'Complex psychology concepts demystified by Psychologist Simran Mistry: Cognitive Dissonance, Attachment Styles, CBT Basics, Confirmation Bias, and more.',
  },
  {
    path: 'course',
    title: 'Emotional Wellbeing Course | Masterclass by Simran Mistry',
    description: 'The 4-Week Emotional Wellbeing Masterclass by Psychologist Simran Mistry. Transform overthinking, conquer procrastination, and cultivate grounded self-compassion.',
  },
  {
    path: 'contact',
    title: 'Contact Simran Mistry | Psychologist Kothrud Pune | Fruitful Mind',
    description: 'Connect with Simran Mistry, Psychologist in Kothrud, Pune. Book in-person or online counselling for anxiety, overthinking, career clarity, and psychology tuition.',
  },
];

// Prerender static pages
for (const route of staticRoutes) {
  const routeDir = path.join(distDir, route.path);
  fs.mkdirSync(routeDir, { recursive: true });

  let html = template;
  html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);
  html = html.replace(
    /<meta name="description" content=".*?" \/>/i,
    `<meta name="description" content="${route.description}" />`
  );

  fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf-8');
  console.log(`Prerendered: /${route.path}/index.html`);
}

// Prerender individual blog articles
const blogsDir = path.resolve('src/content/blogs');
if (fs.existsSync(blogsDir)) {
  const blogFiles = fs.readdirSync(blogsDir).filter((f) => f.endsWith('.json'));
  for (const file of blogFiles) {
    const raw = fs.readFileSync(path.join(blogsDir, file), 'utf-8');
    const blog = JSON.parse(raw);
    const blogRouteDir = path.join(distDir, 'blogs', blog.slug);
    fs.mkdirSync(blogRouteDir, { recursive: true });

    let html = template;
    html = html.replace(/<title>.*?<\/title>/i, `<title>${blog.title} | Fruitful Mind</title>`);
    html = html.replace(
      /<meta name="description" content=".*?" \/>/i,
      `<meta name="description" content="${blog.excerpt}" />`
    );

    fs.writeFileSync(path.join(blogRouteDir, 'index.html'), html, 'utf-8');
    console.log(`Prerendered blog post: /blogs/${blog.slug}/index.html`);
  }
}

// Generate 404.html for GitHub Pages fallback
fs.writeFileSync(path.join(distDir, '404.html'), template, 'utf-8');
console.log('Generated 404.html for static host fallback.');
