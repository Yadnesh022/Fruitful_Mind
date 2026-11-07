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
  ChevronRight,
  ShieldCheck,
  Coffee,
  CheckCircle2
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

  const blogImages = {
    'unraveling-overthinking': '/assets/images/blog-overthinking.jpg',
    'real-truth-procrastination': '/assets/images/blog-procrastination.jpg',
    'rebuilding-self-esteem': '/assets/images/blog-self-esteem.jpg',
  };
  const mainCover = blogImages[slug] || blog.coverImage;

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
    <div className="relative pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cream dark:bg-dark-bg text-ink dark:text-white transition-colors duration-300">
      <SEO
        title={`${blog.title} | Fruitful Mind Blog`}
        description={blog.excerpt}
        canonical={shareUrl}
        ogType="article"
        ogImage={mainCover}
      />

      {/* Reading Progress Bar (Top) */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1.5 origin-left bg-gradient-to-r from-papaya via-mango to-leaf shadow-md"
        style={{ scaleX }}
      />

      {/* Ambient background glows */}
      <div className="ambient-blob-papaya absolute top-20 -left-20 h-[500px] w-[500px] rounded-full pointer-events-none" />
      <div className="ambient-blob-mango absolute top-96 -right-20 h-[550px] w-[550px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-papaya-deep hover:text-papaya dark:text-mango dark:hover:text-white mb-8 group transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>{t('blogsPage.backToArticles')}</span>
        </Link>

        {/* Article Header */}
        <header className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-tint-peach px-3.5 py-1 text-xs font-bold text-papaya-deep dark:bg-white/10 dark:text-mango">
            <span>{blog.category}</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink dark:text-white leading-[1.18]">
            {blog.title}
          </h1>

          <p className="text-base sm:text-lg text-ink/80 dark:text-zinc-200 italic leading-relaxed">
            {blog.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-papaya/15 dark:border-white/10 text-xs sm:text-sm text-muted dark:text-zinc-300">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full overflow-hidden bg-white p-1 border border-papaya/20 shadow-sm">
                <img src={logoImg} alt={blog.author?.name || 'Simran Mistry'} className="h-full w-full object-contain" />
              </div>
              <div>
                <span className="font-bold text-ink dark:text-white block">
                  {blog.author?.name || 'Simran Mistry'}
                </span>
                <span className="text-[11px] text-papaya-deep dark:text-mango font-semibold">
                  {t('blogsPage.authorRole')}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs">
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
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-10 shadow-2xl border border-white/80 dark:border-white/10">
          <img
            src={mainCover}
            alt={blog.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Share Buttons Floating Strip */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-3 py-3.5 px-6 rounded-2xl bg-white/85 dark:bg-dark-card/85 border border-white/70 dark:border-white/10 shadow-sm text-xs font-semibold backdrop-blur-md">
          <span className="text-muted dark:text-zinc-300 flex items-center gap-2">
            <Share2 className="h-4 w-4 text-papaya" />
            <span>{t('blogsPage.shareArticle')}</span>
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleShareWhatsApp}
              className="rounded-full bg-emerald-600 text-white px-3.5 py-1.5 flex items-center gap-1.5 hover:bg-emerald-700 transition-colors shadow-sm"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>{t('blogsPage.shareWhatsApp')}</span>
            </button>
            <button
              onClick={handleShareTwitter}
              className="rounded-full bg-slate-900 text-white px-3.5 py-1.5 flex items-center gap-1.5 hover:bg-black transition-colors shadow-sm"
            >
              <Twitter className="h-3.5 w-3.5" />
              <span>{t('blogsPage.shareTwitter')}</span>
            </button>
            <button
              onClick={handleCopyLink}
              className="rounded-full bg-tint-peach text-papaya-deep dark:bg-white/10 dark:text-mango px-3.5 py-1.5 flex items-center gap-1.5 hover:bg-tint-peach/80 transition-colors shadow-sm"
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
            className="p-6 sm:p-8 rounded-3xl border-white/80 dark:border-white/10 mb-12 shadow-md"
          >
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-papaya-deep dark:text-mango mb-3 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-papaya" />
              <span>{t('blogsPage.tableOfContents')}</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {blog.toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-ink/80 hover:text-papaya-deep dark:text-zinc-200 dark:hover:text-mango transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-papaya flex-shrink-0" />
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </LiquidGlass>
        )}

        {/* Article Body Content */}
        <article className="prose prose-brand max-w-none space-y-6 text-sm sm:text-base text-ink/90 dark:text-zinc-100 leading-relaxed">
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
                  className="font-heading text-2xl sm:text-3xl font-extrabold text-ink dark:text-white pt-8 mb-4 scroll-mt-28 border-b border-papaya/15 pb-2"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'callout') {
              return (
                <div
                  key={index}
                  className="rounded-2xl border-l-4 border-papaya bg-tint-peach/70 p-6 dark:border-papaya dark:bg-white/5 my-8 italic text-ink dark:text-zinc-100 shadow-sm"
                >
                  {block.text}
                </div>
              );
            }
            if (block.type === 'list') {
              return (
                <ul key={index} className="space-y-2.5 pl-2 my-5">
                  {block.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-leaf mt-1 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </article>

        {/* Author Bio Box */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-dark-card/80 border border-papaya/20 shadow-xl flex flex-col sm:flex-row items-center gap-6">
          <div className="h-20 w-20 rounded-2xl overflow-hidden bg-tint-peach p-2 flex-shrink-0 border border-papaya/20 flex items-center justify-center">
            <img src={logoImg} alt="Simran Mistry" className="h-full w-full object-contain" />
          </div>
          <div className="space-y-2 flex-1 text-center sm:text-left">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-tint-mint text-leaf-deep dark:bg-leaf/20 dark:text-leaf-light">
              <ShieldCheck className="h-3 w-3" />
              <span>Practicing Psychologist</span>
            </span>
            <h4 className="font-heading text-lg font-bold text-ink dark:text-white">
              Written by Simran Mistry
            </h4>
            <p className="text-xs text-muted dark:text-zinc-300 leading-relaxed">
              Master's in Counselling Psychology. Simran works with individuals experiencing anxiety, overthinking, career decisions, and self-worth challenges in Kothrud, Pune and online.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button
              onClick={() => onOpenBooking('Blog Reader Consultation')}
              className="rounded-full bg-gradient-to-r from-papaya-deep to-papaya text-white font-bold py-3 px-5 text-xs shadow-md hover:shadow-lg transition-all"
            >
              Book a Session
            </button>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-20 pt-12 border-t border-papaya/15 dark:border-white/10">
          <h3 className="font-heading text-2xl font-extrabold text-ink dark:text-white mb-6">
            {t('blogsPage.relatedArticles')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((related) => {
              const relCover = blogImages[related.slug] || '/assets/images/blog-overthinking.jpg';

              return (
                <LiquidGlass
                  key={related.slug}
                  variant="card"
                  tint="default"
                  interactive={true}
                  className="p-0 overflow-hidden rounded-3xl border-white/70 dark:border-white/10 shadow-md hover:-translate-y-1 transition-transform"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={relCover}
                      alt={related.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-white/90 dark:bg-ink/90 px-2.5 py-0.5 text-[10px] font-bold text-papaya-deep dark:text-mango">
                      {related.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="font-heading text-base font-bold text-ink dark:text-white mb-2 line-clamp-1">
                      <Link to={`/blogs/${related.slug}`} className="hover:text-papaya transition-colors">
                        {related.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-muted dark:text-zinc-300 line-clamp-2 mb-3">
                      {related.excerpt}
                    </p>
                    <Link
                      to={`/blogs/${related.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-papaya-deep dark:text-mango"
                    >
                      <span>{t('blogsPage.readMore')}</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </LiquidGlass>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
