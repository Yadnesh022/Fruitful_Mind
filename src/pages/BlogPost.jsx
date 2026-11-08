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
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

import SEO from '../components/common/SEO';
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
    window.open(`https://wa.me/?text=${encodeURIComponent(`Check out this insightful psychology article by Simran Mistry: "${blog.title}"\n${shareUrl}`)}`, '_blank');
  };

  const handleShareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${blog.title}" by Psychologist Simran Mistry (@fruitfulmind)\n${shareUrl}`)}`, '_blank');
  };

  return (
    <div className="relative pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-sand-warm text-ink">
      <SEO
        title={`${blog.title} | Fruitful Mind - Simran Mistry`}
        description={blog.excerpt}
        canonical={shareUrl}
        ogType="article"
        ogImage={mainCover}
      />

      {/* Reading Progress Bar (Top) */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 origin-left bg-teal-primary shadow-xs"
        style={{ scaleX }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back Link */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-teal-deep hover:text-teal-primary mb-8 group transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>{t('blogsPage.backToArticles')}</span>
        </Link>

        {/* Article Header */}
        <header className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-tint px-3.5 py-1 text-xs font-bold text-teal-deep border border-teal-primary/20">
            <span>{blog.category}</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-deep leading-[1.18]">
            {blog.title}
          </h1>

          <p className="text-base sm:text-lg text-ink/80 italic leading-relaxed">
            {blog.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-teal-primary/15 text-xs sm:text-sm text-muted">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl overflow-hidden bg-white p-1 border border-teal-primary/20 shadow-xs flex items-center justify-center">
                <img src={logoImg} alt={blog.author?.name || 'Simran Mistry'} className="h-full w-full object-contain" />
              </div>
              <div>
                <span className="font-bold text-teal-deep block">
                  {blog.author?.name || 'Simran Mistry'}
                </span>
                <span className="text-[11px] text-teal-primary font-semibold">
                  {t('blogsPage.authorRole')}
                </span>
              </div>
            </div>

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
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 shadow-sm border border-teal-primary/15 bg-sand-warm">
          <img
            src={mainCover}
            alt={blog.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Share Buttons Strip */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-3 py-3.5 px-6 rounded-2xl bg-white border border-teal-primary/15 shadow-xs text-xs font-semibold">
          <span className="text-muted flex items-center gap-2">
            <Share2 className="h-4 w-4 text-teal-primary" />
            <span>{t('blogsPage.shareArticle')}</span>
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleShareWhatsApp}
              className="rounded-full bg-teal-primary text-white px-3.5 py-1.5 flex items-center gap-1.5 hover:bg-teal-deep transition-colors shadow-xs cursor-pointer"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>{t('blogsPage.shareWhatsApp')}</span>
            </button>
            <button
              onClick={handleShareTwitter}
              className="rounded-full bg-sand-warm text-ink border border-teal-primary/20 px-3.5 py-1.5 flex items-center gap-1.5 hover:bg-teal-tint transition-colors cursor-pointer"
            >
              <Twitter className="h-3.5 w-3.5 text-teal-deep" />
              <span>{t('blogsPage.shareTwitter')}</span>
            </button>
            <button
              onClick={handleCopyLink}
              className="rounded-full bg-teal-tint text-teal-deep px-3.5 py-1.5 flex items-center gap-1.5 hover:bg-teal-tint/80 transition-colors border border-teal-primary/20 cursor-pointer"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-teal-primary" /> : <Share2 className="h-3.5 w-3.5" />}
              <span>{copied ? t('blogsPage.linkCopied') : t('blogsPage.copyLink')}</span>
            </button>
          </div>
        </div>

        {/* Table of Contents */}
        {blog.toc && blog.toc.length > 0 && (
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-teal-primary/15 mb-10 shadow-xs">
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-teal-deep mb-3 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-teal-primary" />
              <span>{t('blogsPage.tableOfContents')}</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {blog.toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-ink/80 hover:text-teal-primary transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-teal-primary flex-shrink-0" />
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Content */}
        <article className="prose prose-brand max-w-none space-y-6 text-sm sm:text-base text-ink/90 leading-relaxed bg-white p-7 sm:p-12 rounded-2xl border border-teal-primary/15 shadow-xs">
          {blog.content && blog.content.map((block, index) => {
            if (block.type === 'paragraph') {
              return (
                <p key={index} className="leading-relaxed text-ink/90">
                  {block.text}
                </p>
              );
            }
            if (block.type === 'heading') {
              return (
                <h2
                  key={index}
                  id={block.id}
                  className="font-heading text-2xl sm:text-3xl font-bold text-teal-deep pt-6 mb-3 scroll-mt-28 border-b border-teal-primary/15 pb-2"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'callout') {
              return (
                <div
                  key={index}
                  className="rounded-xl border-l-4 border-teal-primary bg-teal-tint/40 p-5 sm:p-6 my-6 text-teal-deep italic font-medium leading-relaxed"
                >
                  {block.text}
                </div>
              );
            }
            if (block.type === 'list') {
              return (
                <ul key={index} className="space-y-2.5 pl-2 my-5">
                  {block.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-ink/90">
                      <CheckCircle2 className="h-4 w-4 text-teal-primary mt-1 flex-shrink-0" />
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
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-teal-primary/15 shadow-xs flex flex-col sm:flex-row items-center gap-6">
          <div className="h-18 w-18 rounded-2xl bg-teal-tint p-2 flex-shrink-0 border border-teal-primary/20 flex items-center justify-center">
            <img src={logoImg} alt="Simran Mistry" className="h-12 w-auto object-contain" />
          </div>
          <div className="space-y-1.5 flex-1 text-center sm:text-left">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-tint text-teal-deep">
              <ShieldCheck className="h-3 w-3 text-teal-primary" />
              <span>Practicing Psychologist</span>
            </span>
            <h4 className="font-heading text-lg font-bold text-teal-deep">
              Written by Simran Mistry
            </h4>
            <p className="text-xs text-muted leading-relaxed">
              Master's in Counselling Psychology (3+ years experience). Simran works with individuals experiencing anxiety, overthinking, career confusion, and self-esteem challenges in Kothrud, Pune and online.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button
              onClick={() => onOpenBooking ? onOpenBooking('Blog Reader Consultation') : window.location.assign('/contact')}
              className="rounded-xl bg-yellow-accent hover:bg-amber-400 text-ink font-bold py-3 px-5 text-xs shadow-xs transition-colors cursor-pointer"
            >
              Book a Consultation
            </button>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16 pt-10 border-t border-teal-primary/15">
          <h3 className="font-heading text-2xl font-bold text-teal-deep mb-6">
            {t('blogsPage.relatedArticles')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((related) => {
              const relCover = blogImages[related.slug] || '/assets/images/blog-overthinking.jpg';

              return (
                <div
                  key={related.slug}
                  className="rounded-2xl bg-white border border-teal-primary/15 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-sand-warm">
                    <img
                      src={relCover}
                      alt={related.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-teal-deep border border-teal-primary/15">
                      {related.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="font-heading text-base font-bold text-teal-deep mb-2 line-clamp-1">
                      <Link to={`/blogs/${related.slug}`} className="hover:text-teal-primary transition-colors">
                        {related.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-muted line-clamp-2 mb-3 leading-relaxed">
                      {related.excerpt}
                    </p>
                    <Link
                      to={`/blogs/${related.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-primary hover:text-teal-deep"
                    >
                      <span>{t('blogsPage.readMore')}</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
