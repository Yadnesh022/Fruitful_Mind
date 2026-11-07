/**
 * Content loader using Vite's import.meta.glob
 * Allows adding new JSON/Markdown entries into /src/content without touching React components!
 */

export function getAllBlogs() {
  const blogModules = import.meta.glob('../content/blogs/*.json', { eager: true });
  const blogs = Object.values(blogModules).map((mod) => mod.default || mod);
  return blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getBlogBySlug(slug) {
  const blogs = getAllBlogs();
  return blogs.find((b) => b.slug === slug);
}

export function getAllConcepts() {
  const conceptModules = import.meta.glob('../content/concepts/*.json', { eager: true });
  return Object.values(conceptModules).map((mod) => mod.default || mod);
}
