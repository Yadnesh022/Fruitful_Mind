import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Search,
  X,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Lightbulb,
  Compass,
  Calendar,
  Layers,
  Sparkle
} from 'lucide-react';

import SEO from '../components/common/SEO';
import {
  TangledLineDoodle,
  ThoughtCloudDoodle,
  BatteryDoodle,
  LadderDoodle,
  PacingClockDoodle,
  CompassDoodle,
  BrainBulbDoodle,
  FloatingShape
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

  // Map visual covers
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
    <div className="relative pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-sand-warm text-ink transition-colors duration-300">
      <SEO
        title="Psychology Concepts Simplified | 8 Key Ideas Explained | Fruitful Mind"
        description="Complex psychology concepts demystified by Psychologist Simran Mistry: Cognitive Dissonance, Attachment Styles, CBT Basics, Confirmation Bias, and more."
        canonical="https://fruitfulmind.in/psychology-concepts"
      />

      {/* Floating subtle background shapes */}
      <FloatingShape shape="ring" className="absolute top-36 left-12 w-16 h-16 hidden lg:block" color="#12766E" delay={0.2} />
      <FloatingShape shape="dots" className="absolute top-48 right-14 w-14 h-14 hidden lg:block" color="#8C7AE6" delay={0.8} />

      <div className="max-w-7xl mx-auto">
        {/* ========================================================= */}
        {/* HEADER HERO                                               */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-tint px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary shadow-sm"
          >
            <Brain className="h-4 w-4 text-primary" />
            <span>{t('conceptsPage.badge') || 'Mental Models Demystified'}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.15]"
          >
            Psychology Concepts{' '}
            <span className="marker-highlight text-primary-deep">
              Simplified
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base sm:text-lg text-ink-muted leading-relaxed"
          >
            {t('conceptsPage.subtitle') || 'Explore 8 core psychological frameworks explained in clear human language, complete with everyday examples and practical therapeutic takeaways.'}
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* SEARCH & FILTER BAR                                       */}
        {/* ========================================================= */}
        <div className="mb-12">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-primary/15 shadow-soft">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                <input
                  id="concept-search"
                  name="search"
                  type="text"
                  autoComplete="off"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('conceptsPage.searchPlaceholder') || 'Search concepts (e.g. CBT, Attachment)...'}
                  className="w-full rounded-xl border border-primary/20 bg-sand-warm pl-11 pr-4 py-2.5 text-xs sm:text-sm text-ink placeholder:text-ink-muted focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
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
                      className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-primary text-white shadow-sm'
                          : 'bg-sand-warm text-ink-muted hover:text-ink hover:bg-sand-warm/80'
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
        {/* CONCEPTS GRID WITH VISUAL COVERS                          */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {filteredConcepts.map((concept) => {
            const cover = conceptCovers[concept.id] || '/assets/images/concept-cbt.jpg';

            return (
              <div
                key={concept.id}
                onClick={() => setActiveConcept(concept)}
                className="overflow-hidden rounded-2xl bg-white border border-primary/15 flex flex-col justify-between cursor-pointer group shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div>
                  {/* Cover Photography Header */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={cover}
                      alt={concept.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-white/95 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-bold text-primary shadow-sm uppercase tracking-wider">
                        {concept.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-heading text-base font-bold text-ink group-hover:text-primary transition-colors leading-snug">
                      {concept.title}
                    </h3>

                    <p className="text-xs text-ink-muted leading-relaxed line-clamp-3">
                      {concept.shortDefinition}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-primary/10 mt-2 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>Explore Model</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE DETAIL MODAL                                  */}
        {/* ========================================================= */}
        <AnimatePresence>
          {activeConcept && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveConcept(null)}
                className="fixed inset-0 bg-[#0B1517]/70 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 12 }}
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                className="relative w-full max-w-2xl my-8 z-10"
              >
                <div
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-primary/20 shadow-soft-lg max-h-[85vh] overflow-y-auto space-y-5"
                >
                  {/* Close button */}
                  <button
                    onClick={() => setActiveConcept(null)}
                    aria-label="Close modal"
                    className="absolute right-5 top-5 rounded-full p-2 text-ink-muted hover:bg-sand-warm hover:text-ink transition-colors cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-tint text-primary mb-2">
                      {activeConcept.category}
                    </span>

                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink">
                      {activeConcept.title}
                    </h2>

                    <p className="mt-2 text-sm text-ink-muted font-medium leading-relaxed">
                      {activeConcept.shortDefinition}
                    </p>
                  </div>

                  {/* Daily Life Example Callout */}
                  <div className="rounded-xl bg-accent-tint p-4 border border-accent/30 space-y-1.5">
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-ink flex items-center gap-1.5">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      <span>Everyday Real-Life Example</span>
                    </span>
                    <p className="text-xs sm:text-sm text-ink leading-relaxed italic">
                      "{activeConcept.dailyExample || activeConcept.example}"
                    </p>
                  </div>

                  {/* Psychological Roots & Theory */}
                  <div className="p-4 rounded-xl bg-sand-warm border border-primary/10 space-y-1.5">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                      <BookOpen className="h-4 w-4" />
                      <span>Psychological Mechanism & Theory</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                      {activeConcept.psychologyTheory || activeConcept.detailedExplanation}
                    </p>
                  </div>

                  {/* In Therapy / Counselling */}
                  <div className="p-4 rounded-xl bg-sand-warm border border-primary/10 space-y-1.5">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
                      <Compass className="h-4 w-4" />
                      <span>How We Address This in Counselling</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                      {activeConcept.inTherapy}
                    </p>
                  </div>

                  {/* Practical Everyday Takeaway */}
                  <div className="rounded-xl bg-primary-tint p-4 border border-primary/20 space-y-1.5">
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Actionable Takeaway</span>
                    </span>
                    <p className="text-xs sm:text-sm text-ink leading-relaxed font-semibold">
                      {activeConcept.practicalTakeaway}
                    </p>
                  </div>

                  {/* Bottom Action inside modal */}
                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-primary/10">
                    <button
                      onClick={() => {
                        const name = activeConcept.title;
                        setActiveConcept(null);
                        onOpenBooking(name);
                      }}
                      className="w-full sm:w-auto rounded-full bg-accent hover:bg-accent-hover text-ink font-semibold py-2.5 px-6 text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Explore this in a Session with Simran</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => setActiveConcept(null)}
                      className="text-xs font-semibold text-ink-muted hover:text-ink"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
