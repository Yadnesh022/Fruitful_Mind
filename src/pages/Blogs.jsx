import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  Clock,
  Calendar,
  ArrowRight,
  BookOpen,
  Filter,
  Sparkles,
  Tag
} from 'lucide-react';
import SEO from '../components/common/SEO';
import LiquidGlass from '../components/common/LiquidGlass';
import { getAllBlogs } from '../utils/contentLoader';
import { useLanguage } from '../context/LanguageContext';

export default function Blogs() {
  const { t, language } = useLanguage();
  const rawBlogs = getAllBlogs();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Localize blogs based on current language
  const blogs = useMemo(() => {
    return rawBlogs.map((b) => {
      const loc = t(`blogsData.${b.slug}`);
      if (loc && typeof loc === 'object') {
        return {
          ...b,
          title: loc.title || b.title,
          category: loc.category || b.category,
          readTime: loc.readTime || b.readTime,
          excerpt: loc.excerpt || b.excerpt,
        };
      }
      return b;
    });
  }, [rawBlogs, language, t]);

  // Extract unique categories
  const categories = useMemo(() => {
    const allLabel = t('blogsPage.allCategory') || 'All';
    const set = new Set(blogs.map((b) => b.category));
    return [allLabel, ...Array.from(set)];
  }, [blogs, t]);

  // Filtered blogs
  const filteredBlogs = useMemo(() => {
    const allLabel = t('blogsPage.allCategory') || 'All';
    return blogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        selectedCategory === allLabel ||
        blog.category === selectedCategory;
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [blogs, selectedCategory, searchQuery, t]);

  return (
    <div className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <SEO
        title="Psychology & Wellbeing Articles | Fruitful Mind - Simran Mistry"
        description="Compassionate psychological reflections on overthinking, procrastination, self-esteem, and anxiety by Simran Mistry, Psychologist Pune."
        canonical="https://fruitfulmind.in/blogs"
      />

      {/* Ambient background glows */}
      <div className="ambient-blob-plum absolute top-20 -left-20 h-96 w-96 rounded-full pointer-events-none" />
      <div className="ambient-blob-peach absolute top-80 -right-20 h-96 w-96 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-peach-200/60 px-4 py-1.5 text-xs sm:text-sm font-bold text-brand-plum-900 dark:bg-brand-plum-900/60 dark:text-brand-peach-200">
            <BookOpen className="h-4 w-4 text-brand-peach-600 dark:text-brand-peach-300" />
            <span>{t('blogsPage.badge')}</span>
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-plum-950 dark:text-white leading-tight">
            {t('blogsPage.title')}
          </h1>

          <p className="text-base sm:text-lg text-brand-plum-800 dark:text-brand-plum-200 leading-relaxed">
            {t('blogsPage.subtitle')}
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-12">
          <LiquidGlass
            variant="card"
            tint="default"
            interactive={false}
            className="p-4 sm:p-6 rounded-2xl border-white/70 dark:border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search input */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-plum-500 dark:text-brand-plum-300" />
                <input
                  id="blog-search"
                  name="search"
                  type="text"
                  autoComplete="off"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('blogsPage.searchPlaceholder')}
                  className="w-full rounded-full border border-brand-plum-200/80 bg-white/90 pl-11 pr-4 py-2.5 text-xs sm:text-sm text-brand-plum-900 shadow-sm focus:border-brand-peach-500 focus:outline-none focus:ring-2 focus:ring-brand-peach-200 dark:border-white/15 dark:bg-brand-canvas-dark dark:text-white"
                />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                        isSelected
                          ? 'bg-brand-plum-700 text-white shadow-md dark:bg-brand-peach-400 dark:text-brand-plum-950'
                          : 'bg-white/70 text-brand-plum-800 hover:bg-white dark:bg-white/10 dark:text-brand-plum-200 dark:hover:bg-white/20'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </LiquidGlass>
        </div>

        {/* Articles Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-heading text-xl font-bold text-brand-plum-900 dark:text-white">
              {t('blogsPage.noArticles')}
            </p>
            <p className="mt-1 text-xs sm:text-sm text-brand-plum-600 dark:text-brand-plum-300">
              {t('blogsPage.adjustKeyword')}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 rounded-full bg-brand-plum-700 text-white px-5 py-2 text-xs font-semibold active:scale-95 transition-transform"
            >
              {t('blogsPage.resetFilters')}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <LiquidGlass
                key={blog.slug}
                variant="card"
                tint="default"
                interactive={true}
                className="rounded-3xl border-white/70 dark:border-white/10 overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl transition-all group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-brand-plum-900 shadow-sm dark:bg-brand-canvas-dark/90 dark:text-brand-peach-200">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-brand-plum-600 dark:text-brand-plum-300">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{blog.readTime}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </span>
                    </div>

                    <h2 className="font-heading text-xl font-bold text-brand-plum-950 dark:text-white group-hover:text-brand-peach-600 dark:group-hover:text-brand-peach-300 transition-colors leading-snug">
                      <Link to={`/blogs/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-peach-600 hover:text-brand-peach-700 dark:text-brand-peach-300 dark:hover:text-white transition-colors"
                  >
                    <span>{t('blogsPage.readArticle')}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </LiquidGlass>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
