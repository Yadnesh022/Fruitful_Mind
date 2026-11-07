import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Search,
  Sparkles,
  X,
  ArrowRight,
  BookOpen,
  Tag,
  CheckCircle2,
  Lightbulb,
  Compass,
  Check,
  Coffee,
  Heart,
  Shield,
  Activity,
  Calendar
} from 'lucide-react';

import SEO from '../components/common/SEO';
import LiquidGlass from '../components/common/LiquidGlass';
import {
  PapayaDoodle,
  MangoDoodle,
  LeafDoodle,
  FloatingElement
} from '../components/illustrations/BrandDoodles';
import { getAllConcepts } from '../utils/contentLoader';
import { useLanguage } from '../context/LanguageContext';

export default function Concepts({ onOpenBooking }) {
  const { t, language } = useLanguage();
  const rawConcepts = getAllConcepts();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeConcept, setActiveConcept] = useState(null);

  // Localize concepts based on current language
  const concepts = useMemo(() => {
    return rawConcepts.map((c) => {
      const loc = t(`conceptsData.${c.id}`);
      if (loc && typeof loc === 'object') {
        return {
          ...c,
          title: loc.title || c.title,
          category: loc.category || c.category,
          shortDefinition: loc.shortDefinition || c.shortDefinition,
          dailyExample: loc.dailyExample || c.dailyExample,
          psychologyTheory: loc.psychologyTheory || c.psychologyTheory,
          inTherapy: loc.inTherapy || c.inTherapy,
          practicalTakeaway: loc.practicalTakeaway || c.practicalTakeaway,
        };
      }
      return c;
    });
  }, [rawConcepts, language, t]);

  // Extract unique categories
  const categories = useMemo(() => {
    const allLabel = t('blogsPage.allCategory') || 'All';
    const set = new Set(concepts.map((c) => c.category));
    return [allLabel, ...Array.from(set)];
  }, [concepts, t]);

  // Map high-res visual covers
  const conceptCovers = {
    'cbt-basics': '/assets/images/concept-cbt.jpg',
    'attachment-styles': '/assets/images/concept-attachment.jpg',
    'boundary-setting': '/assets/images/concept-boundaries.jpg',
    'emotional-regulation': '/assets/images/concept-emotion-reg.jpg',
    'cognitive-dissonance': '/assets/images/blog-overthinking.jpg',
    'imposter-phenomenon': '/assets/images/service-career-counselling.jpg',
    'confirmation-bias': '/assets/images/service-psychology-tuition.jpg',
    'active-listening': '/assets/images/service-emotional-wellbeing.jpg',
  };

  // Filtered concepts
  const filteredConcepts = useMemo(() => {
    const allLabel = t('blogsPage.allCategory') || 'All';
    return concepts.filter((c) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        selectedCategory === allLabel ||
        c.category === selectedCategory;
      const matchesSearch =
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.shortDefinition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (c.tags && c.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [concepts, selectedCategory, searchQuery, t]);

  return (
    <div className="relative pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cream dark:bg-dark-bg text-ink dark:text-white transition-colors duration-300">
      <SEO
        title="Psychology Concepts Simplified | 8 Key Ideas Explained | Fruitful Mind"
        description="Complex psychology concepts demystified by Psychologist Simran Mistry: Cognitive Dissonance, Attachment Styles, CBT Basics, Confirmation Bias, and more."
        canonical="https://fruitfulmind.in/psychology-concepts"
      />

      {/* Ambient background glows */}
      <div className="ambient-blob-papaya absolute top-20 -left-20 h-[500px] w-[500px] rounded-full pointer-events-none" />
      <div className="ambient-blob-mango absolute top-96 -right-20 h-[550px] w-[550px] rounded-full pointer-events-none" />
      <div className="ambient-blob-leaf absolute top-[1400px] -left-20 h-[500px] w-[500px] rounded-full pointer-events-none" />

      {/* Floating Decorative Brand Elements */}
      <div className="hidden lg:block">
        <FloatingElement className="absolute top-36 left-12 z-10" duration={7} delay={0.2} yOffset={16}>
          <PapayaDoodle className="w-12 h-12 drop-shadow-md" />
        </FloatingElement>
        <FloatingElement className="absolute top-48 right-14 z-10" duration={8} delay={0.8} yOffset={18}>
          <MangoDoodle className="w-12 h-12 drop-shadow-md" />
        </FloatingElement>
        <FloatingElement className="absolute top-[750px] right-8 z-10" duration={6.5} delay={1.4} yOffset={14}>
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
            <Brain className="h-4 w-4 text-papaya" />
            <span>{t('conceptsPage.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink dark:text-white leading-[1.15]"
          >
            {t('conceptsPage.title')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-papaya-deep via-papaya to-mango">
              Demystified
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base sm:text-lg text-ink/80 dark:text-zinc-200 leading-relaxed"
          >
            {t('conceptsPage.subtitle')}
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* SEARCH & FILTER BAR                                       */}
        {/* ========================================================= */}
        <div className="mb-14">
          <LiquidGlass
            variant="card"
            tint="default"
            interactive={false}
            className="p-4 sm:p-6 rounded-3xl border-white/80 dark:border-white/10 shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-papaya" />
                <input
                  id="concept-search"
                  name="search"
                  type="text"
                  autoComplete="off"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('conceptsPage.searchPlaceholder')}
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
        {/* CONCEPTS GRID WITH VISUAL COVERS                          */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {filteredConcepts.map((concept, idx) => {
            const cover = conceptCovers[concept.id] || '/assets/images/concept-cbt.jpg';

            return (
              <LiquidGlass
                key={concept.id}
                variant="card"
                tint="default"
                interactive={true}
                onClick={() => setActiveConcept(concept)}
                className="p-0 overflow-hidden rounded-3xl border-white/80 dark:border-white/10 flex flex-col justify-between cursor-pointer group shadow-xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div>
                  {/* Cover Photography Header */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={cover}
                      alt={concept.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-white/95 dark:bg-ink/95 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-papaya-deep dark:text-mango shadow-sm uppercase tracking-wider">
                        {concept.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="rounded-full bg-tint-mint/90 dark:bg-leaf-deep/90 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold text-leaf-deep dark:text-white">
                        {concept.difficulty || 'Essential'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2.5">
                    <h3 className="font-heading text-lg font-bold text-ink dark:text-white group-hover:text-papaya-deep dark:group-hover:text-mango transition-colors leading-snug">
                      {concept.title}
                    </h3>

                    <p className="text-xs text-muted dark:text-zinc-300 leading-relaxed line-clamp-3">
                      {concept.shortDefinition}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-black/5 dark:border-white/10 mt-3 flex items-center justify-between text-xs font-bold text-papaya-deep dark:text-mango">
                  <span>{t('conceptsPage.viewBreakdown')}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </LiquidGlass>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE DETAIL MODAL WITH CHUNKED VISUAL BLOCKS       */}
        {/* ========================================================= */}
        <AnimatePresence>
          {activeConcept && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveConcept(null)}
                className="fixed inset-0 bg-ink/70 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                className="relative w-full max-w-2xl my-8 z-10"
              >
                <LiquidGlass
                  variant="card"
                  tint="papaya"
                  interactive={false}
                  className="bg-white/95 dark:bg-dark-card/95 p-6 sm:p-8 rounded-3xl border-white/80 dark:border-white/15 shadow-2xl max-h-[85vh] overflow-y-auto space-y-6"
                >
                  {/* Close button */}
                  <button
                    onClick={() => setActiveConcept(null)}
                    aria-label="Close modal"
                    className="absolute right-5 top-5 rounded-full p-2 text-ink/70 hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-tint-peach text-papaya-deep dark:bg-white/10 dark:text-mango mb-2">
                      {activeConcept.category}
                    </span>

                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-ink dark:text-white">
                      {activeConcept.title}
                    </h2>

                    <p className="mt-2 text-sm text-ink/85 dark:text-zinc-200 font-medium leading-relaxed">
                      {activeConcept.shortDefinition}
                    </p>
                  </div>

                  {/* Daily Life Example Callout */}
                  <div className="rounded-2xl bg-tint-butter/60 dark:bg-white/5 p-5 border border-mango/30 space-y-2">
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-mango-600 dark:text-mango flex items-center gap-2">
                      <Lightbulb className="h-4 w-4" />
                      <span>{t('conceptsPage.dailyEx')}</span>
                    </span>
                    <p className="text-xs sm:text-sm text-ink/85 dark:text-zinc-200 leading-relaxed italic">
                      "{activeConcept.dailyExample}"
                    </p>
                  </div>

                  {/* Psychological Roots & Theory */}
                  <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-papaya/15 space-y-2">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-papaya-deep dark:text-mango flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      <span>{t('conceptsPage.roots')}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-muted dark:text-zinc-300 leading-relaxed">
                      {activeConcept.psychologyTheory}
                    </p>
                  </div>

                  {/* In Therapy / Counselling */}
                  <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-leaf/15 space-y-2">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-leaf-deep dark:text-leaf-light flex items-center gap-2">
                      <Compass className="h-4 w-4" />
                      <span>{t('conceptsPage.inTherapy')}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-muted dark:text-zinc-300 leading-relaxed">
                      {activeConcept.inTherapy}
                    </p>
                  </div>

                  {/* Practical Everyday Takeaway */}
                  <div className="rounded-2xl bg-tint-mint/60 dark:bg-white/5 p-5 border border-leaf/25 space-y-2">
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-leaf-deep dark:text-leaf-light flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{t('conceptsPage.takeaway')}</span>
                    </span>
                    <p className="text-xs sm:text-sm text-ink/85 dark:text-zinc-200 leading-relaxed font-semibold">
                      {activeConcept.practicalTakeaway}
                    </p>
                  </div>

                  {/* Bottom Action inside modal */}
                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-black/5 dark:border-white/10">
                    <button
                      onClick={() => {
                        const name = activeConcept.title;
                        setActiveConcept(null);
                        onOpenBooking(name);
                      }}
                      className="w-full sm:w-auto rounded-full bg-gradient-to-r from-papaya-deep to-papaya hover:from-papaya hover:to-mango text-white font-bold py-3.5 px-7 text-xs shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>{t('conceptsPage.exploreInTherapy')}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => setActiveConcept(null)}
                      className="text-xs font-semibold text-muted dark:text-zinc-300 hover:text-ink dark:hover:text-white"
                    >
                      {t('conceptsPage.close')}
                    </button>
                  </div>
                </LiquidGlass>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
