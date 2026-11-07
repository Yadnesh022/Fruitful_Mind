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
  Tag,
  Heart,
  ChevronRight,
  Coffee,
  CheckCircle2
} from 'lucide-react';

import SEO from '../components/common/SEO';
import LiquidGlass from '../components/common/LiquidGlass';
import {
  PapayaDoodle,
  MangoDoodle,
  LeafDoodle,
  FloatingElement
} from '../components/illustrations/BrandDoodles';
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

  // Fallback high-res cover mapping
  const blogImages = {
    'unraveling-overthinking': '/assets/images/blog-overthinking.jpg',
    'real-truth-procrastination': '/assets/images/blog-procrastination.jpg',
    'rebuilding-self-esteem': '/assets/images/blog-self-esteem.jpg',
  };

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
    <div className="relative pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cream dark:bg-dark-bg text-ink dark:text-white transition-colors duration-300">
      <SEO
        title="Psychology & Wellbeing Articles | Fruitful Mind - Simran Mistry"
        description="Compassionate psychological reflections on overthinking, procrastination, self-esteem, and anxiety by Simran Mistry, Psychologist Pune."
        canonical="https://fruitfulmind.in/blogs"
      />

      {/* Ambient background glows */}
      <div className="ambient-blob-papaya absolute top-20 -left-20 h-[500px] w-[500px] rounded-full pointer-events-none" />
      <div className="ambient-blob-mango absolute top-80 -right-20 h-[550px] w-[550px] rounded-full pointer-events-none" />
      <div className="ambient-blob-leaf absolute top-[1200px] -left-20 h-[500px] w-[500px] rounded-full pointer-events-none" />

      {/* Floating Decorative Brand Elements */}
      <div className="hidden lg:block">
        <FloatingElement className="absolute top-36 left-12 z-10" duration={7} delay={0.2} yOffset={16}>
          <PapayaDoodle className="w-12 h-12 drop-shadow-md" />
        </FloatingElement>
        <FloatingElement className="absolute top-48 right-14 z-10" duration={8} delay={0.8} yOffset={18}>
          <MangoDoodle className="w-12 h-12 drop-shadow-md" />
        </FloatingElement>
        <FloatingElement className="absolute top-[650px] right-10 z-10" duration={6.5} delay={1.2} yOffset={14}>
          <LeafDoodle className="w-10 h-10 drop-shadow-sm" color="#1FA886" />
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* ========================================================= */}
        {/* HEADER HERO                                               */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-papaya/30 bg-tint-peach/80 px-4 py-1.5 text-xs sm:text-sm font-bold text-papaya-deep backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-mango shadow-sm"
          >
            <BookOpen className="h-4 w-4 text-papaya" />
            <span>{t('blogsPage.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink dark:text-white leading-[1.15]"
          >
            {t('blogsPage.title')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-papaya-deep via-papaya to-mango">
              & Clarity
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base sm:text-lg text-ink/80 dark:text-zinc-200 leading-relaxed"
          >
            {t('blogsPage.subtitle')}
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* FILTER & SEARCH BAR WITH LIQUID GLASS                     */}
        {/* ========================================================= */}
        <div className="mb-14">
          <LiquidGlass
            variant="card"
            tint="default"
            interactive={false}
            className="p-4 sm:p-6 rounded-3xl border-white/80 dark:border-white/10 shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search input with Lucide icon */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-papaya" />
                <input
                  id="blog-search"
                  name="search"
                  type="text"
                  autoComplete="off"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('blogsPage.searchPlaceholder')}
                  className="w-full rounded-full border border-papaya/20 bg-white/95 pl-11 pr-4 py-3 text-xs sm:text-sm text-ink shadow-sm focus:border-papaya focus:outline-none focus:ring-2 focus:ring-papaya/20 dark:border-white/15 dark:bg-dark-bg dark:text-white"
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
                      className={`rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-r from-papaya-deep to-papaya text-white shadow-md'
                          : 'bg-white/80 text-ink/80 hover:bg-white dark:bg-white/10 dark:text-zinc-200 dark:hover:bg-white/20'
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

        {/* ========================================================= */}
        {/* ARTICLES GRID WITH BIG COVER IMAGERY                      */}
        {/* ========================================================= */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 p-8 rounded-3xl bg-white/60 dark:bg-white/5 border border-papaya/20 max-w-lg mx-auto">
            <Coffee className="h-12 w-12 text-papaya mx-auto mb-3" />
            <h3 className="font-heading text-xl font-bold text-ink dark:text-white">
              {t('blogsPage.noArticles')}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-muted dark:text-zinc-300">
              {t('blogsPage.adjustKeyword')}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 rounded-full bg-gradient-to-r from-papaya-deep to-papaya text-white px-6 py-2.5 text-xs font-bold shadow-md active:scale-95 transition-transform"
            >
              {t('blogsPage.resetFilters')}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => {
              const cover = blogImages[blog.slug] || blog.coverImage;

              return (
                <LiquidGlass
                  key={blog.slug}
                  variant="card"
                  tint="default"
                  interactive={true}
                  className="rounded-3xl border-white/80 dark:border-white/10 overflow-hidden flex flex-col justify-between shadow-xl hover:-translate-y-2 transition-transform duration-300 group p-0"
                >
                  <div>
                    {/* Big Visual Cover Photo */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={cover}
                        alt={blog.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="rounded-full bg-white/95 dark:bg-ink/95 backdrop-blur-md px-3.5 py-1 text-[11px] font-bold text-papaya-deep dark:text-mango shadow-sm">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-muted dark:text-zinc-300">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-papaya" />
                          <span>{blog.readTime}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-leaf" />
                          <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </span>
                      </div>

                      <h2 className="font-heading text-xl font-bold text-ink dark:text-white group-hover:text-papaya-deep dark:group-hover:text-mango transition-colors leading-snug">
                        <Link to={`/blogs/${blog.slug}`}>
                          {blog.title}
                        </Link>
                      </h2>

                      <p className="text-xs sm:text-sm text-muted dark:text-zinc-300 leading-relaxed line-clamp-3">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Read Article Bottom Strip */}
                  <div className="p-6 pt-0 border-t border-black/5 dark:border-white/10 mt-4 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-papaya-deep dark:text-mango">
                      {t('common.bySimran')}
                    </span>
                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-ink hover:text-papaya dark:text-white dark:hover:text-mango transition-colors"
                    >
                      <span>{t('blogsPage.readArticle')}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </LiquidGlass>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
