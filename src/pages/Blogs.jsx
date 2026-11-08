import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  Clock,
  Calendar,
  ArrowRight,
  BookOpen,
  Coffee,
  Sparkles,
  Tag,
  CheckCircle2
} from 'lucide-react';

import SEO from '../components/common/SEO';
import {
  ThoughtCloudDoodle,
  TangledLineDoodle,
  BrainBulbDoodle,
  FloatingShape
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
    <div className="relative pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-sand-warm text-ink">
      <SEO
        title="Psychology & Wellbeing Articles | Fruitful Mind - Simran Mistry"
        description="Compassionate psychological reflections on overthinking, procrastination, self-esteem, and anxiety by Simran Mistry, Psychologist Pune."
        canonical="https://fruitfulmind.in/blogs"
      />

      {/* Floating subtle mind-themed doodles */}
      <div className="hidden lg:block pointer-events-none select-none">
        <FloatingShape className="absolute top-36 left-12 z-0" duration={8} delay={0.2} yOffset={16}>
          <ThoughtCloudDoodle className="w-14 h-10 text-teal-primary/30" />
        </FloatingShape>
        <FloatingShape className="absolute top-48 right-14 z-0" duration={9} delay={0.8} yOffset={18}>
          <BrainBulbDoodle className="w-12 h-12 text-yellow-accent/50" />
        </FloatingShape>
        <FloatingShape className="absolute top-[650px] right-10 z-0" duration={7} delay={1.2} yOffset={14}>
          <TangledLineDoodle className="w-16 h-10 text-teal-primary/25" />
        </FloatingShape>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ========================================================= */}
        {/* HEADER HERO                                               */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-primary/20 bg-teal-tint px-4 py-1.5 text-xs sm:text-sm font-semibold text-teal-deep"
          >
            <BookOpen className="h-4 w-4 text-teal-primary" />
            <span>{t('blogsPage.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-deep leading-[1.15]"
          >
            {t('blogsPage.title')}{' '}
            <span className="relative inline-block">
              <span>& Clarity</span>
              <span className="absolute left-0 -bottom-1 w-full h-2.5 bg-yellow-accent/50 -z-10 rounded-sm"></span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base sm:text-lg text-ink/80 leading-relaxed max-w-2xl mx-auto"
          >
            {t('blogsPage.subtitle')}
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* FILTER & SEARCH BAR                                       */}
        {/* ========================================================= */}
        <div className="mb-12">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-teal-primary/15 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search input with Lucide icon */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-teal-primary" />
                <input
                  id="blog-search"
                  name="search"
                  type="text"
                  autoComplete="off"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('blogsPage.searchPlaceholder')}
                  className="w-full rounded-xl border border-teal-primary/20 bg-sand-warm/40 pl-11 pr-4 py-2.5 text-xs sm:text-sm text-ink placeholder:text-muted/60 focus:border-teal-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/20 transition-all"
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
                      className={`rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-teal-primary text-white shadow-sm'
                          : 'bg-sand-warm/70 text-ink/80 hover:bg-teal-tint hover:text-teal-deep border border-teal-primary/10'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* ARTICLES GRID WITH CRISP PSYCHOLOGY PHOTOGRAPHY           */}
        {/* ========================================================= */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 p-8 rounded-2xl bg-white border border-teal-primary/15 max-w-lg mx-auto shadow-sm">
            <Coffee className="h-12 w-12 text-teal-primary mx-auto mb-3" />
            <h3 className="font-heading text-xl font-bold text-teal-deep">
              {t('blogsPage.noArticles')}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-muted">
              {t('blogsPage.adjustKeyword')}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 rounded-full bg-teal-primary hover:bg-teal-deep text-white px-6 py-2.5 text-xs font-semibold shadow-sm transition-colors"
            >
              {t('blogsPage.resetFilters')}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => {
              const cover = blogImages[blog.slug] || blog.coverImage;

              return (
                <article
                  key={blog.slug}
                  className="rounded-2xl bg-white border border-teal-primary/15 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md hover:border-teal-primary/30 transition-all duration-300 group"
                >
                  <div>
                    {/* Visual Cover Photo */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-sand-warm">
                      <img
                        src={cover}
                        alt={blog.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3.5 left-3.5">
                        <span className="rounded-full bg-white/95 backdrop-blur-sm px-3 py-1 text-[11px] font-bold text-teal-deep border border-teal-primary/20 shadow-xs">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-muted">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-teal-primary" />
                          <span>{blog.readTime}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-teal-primary" />
                          <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </span>
                      </div>

                      <h2 className="font-heading text-xl font-bold text-teal-deep group-hover:text-teal-primary transition-colors leading-snug">
                        <Link to={`/blogs/${blog.slug}`}>
                          {blog.title}
                        </Link>
                      </h2>

                      <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Read Article Bottom Strip */}
                  <div className="p-6 pt-0 border-t border-teal-primary/10 mt-4 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-teal-deep">
                      {t('common.bySimran')}
                    </span>
                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-primary hover:text-teal-deep transition-colors"
                    >
                      <span>{t('blogsPage.readArticle')}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
