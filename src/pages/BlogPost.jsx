import React, { useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Clock,
  Calendar,
  ArrowLeft,
  Share2,
  Check,
  MessageCircle,
  Twitter,
  BookOpen,
  Sparkles,
  Heart,
  ChevronRight
} from 'lucide-react';
import SEO from '../components/common/SEO';
import LiquidGlass from '../components/common/LiquidGlass';
import { getBlogBySlug, getAllBlogs } from '../utils/contentLoader';
import { useLanguage } from '../context/LanguageContext';
import logoImg from '../assets/logo.png';

export default function BlogPost({ onOpenBooking }) {
  const { slug } = useParams();
  const { t, language } = useLanguage();
  const rawBlog = getBlogBySlug(slug);

  const [copied, setCopied] = useState(false);

  // Reading progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Localize current blog
  const blog = useMemo(() => {
    if (!rawBlog) return null;
    const loc = t(`blogsData.${rawBlog.slug}`);
    if (loc && typeof loc === 'object') {
      return {
        ...rawBlog,
        title: loc.title || rawBlog.title,
        category: loc.category || rawBlog.category,
        readTime: loc.readTime || rawBlog.readTime,
        excerpt: loc.excerpt || rawBlog.excerpt,
      };
    }
    return rawBlog;
  }, [rawBlog, language, t]);

  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  const allBlogs = getAllBlogs();
  const relatedPosts = allBlogs
    .filter((b) => b.slug !== slug)
    .slice(0, 2)
    .map((b) => {
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

  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://fruitfulmind.in/blogs/${slug}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(`Check out this insightful article by Simran Mistry: "${blog.title}"\n${shareUrl}`)}`, '_blank');
  };

  const handleShareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${blog.title}" by @fruitfulmind\n${shareUrl}`)}`, '_blank');
  };

  return (
    <div className="relative pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <SEO
        title={`${blog.title} | Fruitful Mind Blog`}
        description={blog.excerpt}
        canonical={shareUrl}
        ogType="article"
        ogImage={blog.coverImage}
      />

      {/* Reading Progress Bar (Top) */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1.5 origin-left bg-gradient-to-r from-brand-peach-400 via-brand-plum-600 to-brand-sage-500 shadow"
        style={{ scaleX }}
      />

      {/* Ambient background glows */}
      <div className="ambient-blob-plum absolute top-20 -left-20 h-96 w-96 rounded-full pointer-events-none" />
      <div className="ambient-blob-peach absolute top-96 -right-20 h-96 w-96 rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-plum-700 hover:text-brand-plum-950 dark:text-brand-peach-200 dark:hover:text-white mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>{t('blogsPage.backToArticles')}</span>
        </Link>

        {/* Article Header */}
        <header className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-peach-200/60 px-3.5 py-1 text-xs font-bold text-brand-plum-900 dark:bg-brand-plum-900/60 dark:text-brand-peach-200">
            <span>{blog.category}</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-plum-950 dark:text-white leading-[1.2]">
            {blog.title}
          </h1>

          <p className="text-base sm:text-lg text-brand-plum-800 dark:text-brand-plum-200 italic leading-relaxed">
            {blog.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-brand-plum-100 dark:border-white/10 text-xs sm:text-sm text-brand-plum-600 dark:text-brand-plum-300">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-white/80 p-1 border border-white/60 shadow-sm">
                <img src={logoImg} alt={blog.author?.name || 'Simran Mistry'} className="h-full w-full object-contain" />
              </div>
              <div>
                <span className="font-bold text-brand-plum-900 dark:text-white block">
                  {blog.author?.name || 'Simran Mistry'}
                </span>
                <span className="text-[11px] text-brand-plum-500 dark:text-brand-plum-300">
                  {t('blogsPage.authorRole')}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs">
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
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-xl border border-white/60 dark:border-white/10">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Share Buttons Floating Strip */}
        <div className="mb-10 flex items-center justify-between py-3 px-6 rounded-2xl bg-white/70 dark:bg-brand-canvas-darkCard/70 border border-white/60 dark:border-white/10 text-xs font-semibold">
          <span className="text-brand-plum-600 dark:text-brand-plum-300 flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            <span>{t('blogsPage.shareArticle')}</span>
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShareWhatsApp}
              className="rounded-full bg-emerald-600 text-white px-3 py-1.5 flex items-center gap-1.5 hover:bg-emerald-700 transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>{t('blogsPage.shareWhatsApp')}</span>
            </button>
            <button
              onClick={handleShareTwitter}
              className="rounded-full bg-slate-900 text-white px-3 py-1.5 flex items-center gap-1.5 hover:bg-black transition-colors"
            >
              <Twitter className="h-3.5 w-3.5" />
              <span>{t('blogsPage.shareTwitter')}</span>
            </button>
            <button
              onClick={handleCopyLink}
              className="rounded-full bg-brand-plum-100 text-brand-plum-800 dark:bg-white/10 dark:text-brand-peach-200 px-3 py-1.5 flex items-center gap-1.5 hover:bg-brand-plum-200 transition-colors"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Share2 className="h-3.5 w-3.5" />}
              <span>{copied ? t('blogsPage.linkCopied') : t('blogsPage.copyLink')}</span>
            </button>
          </div>
        </div>

        {/* Table of Contents */}
        {blog.toc && blog.toc.length > 0 && (
          <LiquidGlass
            variant="card"
            tint="default"
            interactive={false}
            className="p-6 rounded-2xl border-white/70 dark:border-white/10 mb-12 shadow-sm"
          >
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-plum-900 dark:text-brand-peach-200 mb-3 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-brand-peach-500" />
              <span>{t('blogsPage.tableOfContents')}</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {blog.toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-brand-plum-700 hover:text-brand-peach-600 dark:text-brand-plum-200 dark:hover:text-brand-peach-300 transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </LiquidGlass>
        )}

        {/* Article Body Content */}
        <article className="prose prose-brand max-w-none space-y-6 text-sm sm:text-base text-brand-plum-900 dark:text-brand-plum-100 leading-relaxed">
          {blog.content && blog.content.map((block, index) => {
            if (block.type === 'paragraph') {
              return (
                <p key={index} className="leading-relaxed">
                  {block.text}
                </p>
              );
            }
            if (block.type === 'heading') {
              return (
                <h2
                  key={index}
                  id={block.id}
                  className="font-heading text-2xl sm:text-3xl font-bold text-brand-plum-950 dark:text-white pt-6 mb-3 scroll-mt-28"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'callout') {
              return (
                <div
                  key={index}
                  className="rounded-2xl border-l-4 border-brand-peach-500 bg-brand-peach-50/70 p-5 dark:border-brand-peach-400 dark:bg-white/5 my-6 italic text-brand-plum-900 dark:text-brand-peach-200"
                >
                  {block.text}
                </div>
              );
            }
            if (block.type === 'list') {
              return (
                <ul key={index} className="space-y-2 list-disc pl-5 my-4">
                  {block.items.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </article>

        {/* Related Posts */}
        <div className="mt-20 pt-12 border-t border-brand-plum-100 dark:border-white/10">
          <h3 className="font-heading text-2xl font-bold text-brand-plum-950 dark:text-white mb-6">
            {t('blogsPage.relatedArticles')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((related) => (
              <LiquidGlass
                key={related.slug}
                variant="card"
                tint="default"
                interactive={true}
                className="p-6 rounded-2xl border-white/70 dark:border-white/10"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-peach-600 dark:text-brand-peach-300 block mb-1">
                  {related.category}
                </span>
                <h4 className="font-heading text-base font-bold text-brand-plum-950 dark:text-white mb-2">
                  <Link to={`/blogs/${related.slug}`} className="hover:underline">
                    {related.title}
                  </Link>
                </h4>
                <p className="text-xs text-brand-plum-700 dark:text-brand-plum-200 line-clamp-2 mb-3">
                  {related.excerpt}
                </p>
                <Link
                  to={`/blogs/${related.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-peach-600 dark:text-brand-peach-300"
                >
                  <span>{t('blogsPage.readMore')}</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </LiquidGlass>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
