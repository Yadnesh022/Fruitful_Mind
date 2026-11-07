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
  Compass
} from 'lucide-react';
import SEO from '../components/common/SEO';
import LiquidGlass from '../components/common/LiquidGlass';
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
    <div className="relative pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <SEO
        title="Psychology Concepts Simplified | 8 Key Ideas Explained | Fruitful Mind"
        description="Complex psychology concepts demystified by Psychologist Simran Mistry: Cognitive Dissonance, Attachment Styles, CBT Basics, Confirmation Bias, and more."
        canonical="https://fruitfulmind.in/psychology-concepts"
      />

      {/* Ambient background glows */}
      <div className="ambient-blob-plum absolute top-20 -left-20 h-96 w-96 rounded-full pointer-events-none" />
      <div className="ambient-blob-sage absolute top-96 -right-20 h-96 w-96 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-plum-100 px-4 py-1.5 text-xs sm:text-sm font-bold text-brand-plum-800 dark:bg-brand-plum-900/60 dark:text-brand-peach-200">
            <Brain className="h-4 w-4 text-brand-plum-600 dark:text-brand-peach-300" />
            <span>{t('conceptsPage.badge')}</span>
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-plum-950 dark:text-white leading-tight">
            {t('conceptsPage.title')}
          </h1>

          <p className="text-base sm:text-lg text-brand-plum-800 dark:text-brand-plum-200 leading-relaxed">
            {t('conceptsPage.subtitle')}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <LiquidGlass
            variant="card"
            tint="default"
            interactive={false}
            className="p-4 sm:p-6 rounded-2xl border-white/70 dark:border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-plum-500 dark:text-brand-plum-300" />
                <input
                  id="concept-search"
                  name="search"
                  type="text"
                  autoComplete="off"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('conceptsPage.searchPlaceholder')}
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
                          ? 'bg-brand-plum-700 text-white shadow dark:bg-brand-peach-400 dark:text-brand-plum-950'
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

        {/* Concepts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {filteredConcepts.map((concept) => (
            <LiquidGlass
              key={concept.id}
              variant="card"
              tint="default"
              interactive={true}
              onClick={() => setActiveConcept(concept)}
              className="p-6 rounded-3xl border-white/70 dark:border-white/10 flex flex-col justify-between cursor-pointer group shadow-md hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-peach-600 dark:text-brand-peach-300">
                    {concept.category}
                  </span>
                  <span className="rounded-full bg-brand-plum-100 dark:bg-brand-plum-900/60 px-2.5 py-0.5 text-[10px] font-bold text-brand-plum-800 dark:text-brand-peach-200">
                    {concept.difficulty || 'Essential'}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-brand-plum-950 dark:text-white group-hover:text-brand-peach-600 dark:group-hover:text-brand-peach-300 transition-colors">
                  {concept.title}
                </h3>

                <p className="mt-2 text-xs text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed line-clamp-3">
                  {concept.shortDefinition}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-brand-plum-100 dark:border-white/10 flex items-center justify-between text-xs font-bold text-brand-peach-600 dark:text-brand-peach-300">
                <span>{t('conceptsPage.viewBreakdown')}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </LiquidGlass>
          ))}
        </div>

        {/* Detail Modal */}
        <AnimatePresence>
          {activeConcept && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveConcept(null)}
                className="fixed inset-0 bg-brand-plum-950/60 backdrop-blur-md"
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
                  tint="peach"
                  interactive={false}
                  className="bg-white/95 dark:bg-brand-canvas-darkCard/95 p-6 sm:p-8 rounded-3xl border-white/80 dark:border-white/15 shadow-2xl max-h-[85vh] overflow-y-auto space-y-6"
                >
                  {/* Close button */}
                  <button
                    onClick={() => setActiveConcept(null)}
                    aria-label="Close modal"
                    className="absolute right-5 top-5 rounded-full p-2 text-brand-plum-500 hover:bg-black/5 dark:text-brand-plum-300 dark:hover:bg-white/10 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-peach-600 dark:text-brand-peach-300">
                        {activeConcept.category}
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-plum-950 dark:text-white">
                      {activeConcept.title}
                    </h2>

                    <p className="mt-2 text-sm text-brand-plum-800 dark:text-brand-plum-200 font-semibold leading-relaxed">
                      {activeConcept.shortDefinition}
                    </p>
                  </div>

                  {/* Daily Life Example */}
                  <div className="rounded-2xl bg-brand-peach-50/80 dark:bg-white/5 p-5 border border-brand-peach-200/60 dark:border-white/5 space-y-2">
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-brand-peach-700 dark:text-brand-peach-300 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4" />
                      <span>{t('conceptsPage.dailyEx')}</span>
                    </span>
                    <p className="text-xs sm:text-sm text-brand-plum-800 dark:text-brand-plum-200 leading-relaxed italic">
                      "{activeConcept.dailyExample}"
                    </p>
                  </div>

                  {/* Psychological Roots & Theory */}
                  <div className="space-y-1.5">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-brand-plum-900 dark:text-white flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-brand-plum-600 dark:text-brand-peach-300" />
                      <span>{t('conceptsPage.roots')}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed">
                      {activeConcept.psychologyTheory}
                    </p>
                  </div>

                  {/* In Therapy / Counselling */}
                  <div className="space-y-1.5">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-brand-plum-900 dark:text-white flex items-center gap-2">
                      <Compass className="h-4 w-4 text-brand-sage-600 dark:text-brand-sage-300" />
                      <span>{t('conceptsPage.inTherapy')}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed">
                      {activeConcept.inTherapy}
                    </p>
                  </div>

                  {/* Practical Everyday Takeaway */}
                  <div className="rounded-2xl bg-brand-sage-50/80 dark:bg-white/5 p-5 border border-brand-sage-200/60 dark:border-white/5 space-y-2">
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-brand-sage-700 dark:text-brand-sage-300 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{t('conceptsPage.takeaway')}</span>
                    </span>
                    <p className="text-xs sm:text-sm text-brand-plum-800 dark:text-brand-plum-200 leading-relaxed font-medium">
                      {activeConcept.practicalTakeaway}
                    </p>
                  </div>

                  {/* Bottom Action inside modal */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-brand-plum-100 dark:border-white/10">
                    <button
                      onClick={() => {
                        const name = activeConcept.title;
                        setActiveConcept(null);
                        onOpenBooking(name);
                      }}
                      className="w-full sm:w-auto rounded-full bg-brand-plum-700 hover:bg-brand-plum-800 text-white font-bold py-3 px-6 text-xs shadow-md transition-colors flex items-center justify-center gap-2 active:scale-95"
                    >
                      <span>{t('conceptsPage.exploreInTherapy')}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => setActiveConcept(null)}
                      className="text-xs font-semibold text-brand-plum-600 dark:text-brand-plum-300 hover:underline"
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
