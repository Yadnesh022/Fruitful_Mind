import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Activity, ArrowRight, Sparkle } from 'lucide-react';

/**
 * Visual Cognitive Behavioural Therapy (CBT) Triangle
 * Represents the bidirectional relationship between Thoughts, Emotions, and Behaviors.
 */
export default function CBTTriangle({ className = '' }) {
  const [activeNode, setActiveNode] = useState('thoughts');

  const nodeDetails = {
    thoughts: {
      title: 'Thoughts (Cognitive Layer)',
      headline: 'What we tell ourselves about what happened',
      example: '"I haven\'t heard back from them; they must be disappointed in my work."',
      impact: 'Triggers anticipatory anxiety and urges to withdraw or over-apologize.',
      color: '#12766E',
      bgColor: 'bg-primary-tint',
      textColor: 'text-primary',
    },
    emotions: {
      title: 'Emotions & Physiology',
      headline: 'The somatic, biological sensation in the body',
      example: 'Tightness in the throat, shallow chest breathing, restlessness, sinking feeling in stomach.',
      impact: 'Sends urgent danger signals to the brain, cementing the catastrophic thought.',
      color: '#8C7AE6',
      bgColor: 'bg-secondary-tint',
      textColor: 'text-secondary-700',
    },
    behaviors: {
      title: 'Behaviors (Action Layer)',
      headline: 'What we do (or avoid doing) in response',
      example: 'Putting off the email, procrastinating on the project, seeking constant reassurance.',
      impact: 'Reinforces the belief that the situation was dangerous, repeating the cycle tomorrow.',
      color: '#FFC845',
      bgColor: 'bg-accent-tint',
      textColor: 'text-ink',
    },
  };

  const active = nodeDetails[activeNode];

  return (
    <div
      className={`p-6 sm:p-8 rounded-2xl bg-white border border-primary/20 shadow-soft ${className}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-tint text-primary">
          <Brain className="h-3.5 w-3.5" />
          <span>The CBT Cognitive Mechanism</span>
        </span>
      </div>

      <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink">
        How Thoughts, Emotions & Behaviors Interlock
      </h3>
      <p className="mt-1 text-xs sm:text-sm text-ink-muted">
        In counselling, we do not simply treat symptoms. We map this interconnected triangle to help you untangle where the loop begins.
      </p>

      {/* Interactive 3-Pillar Triangle Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6">
        <button
          onClick={() => setActiveNode('thoughts')}
          className={`p-4 rounded-xl border text-left transition-all ${
            activeNode === 'thoughts'
              ? 'border-primary bg-primary-tint/60 shadow-sm ring-2 ring-primary/20'
              : 'border-primary/10 bg-sand-warm/60 hover:bg-sand-warm'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="font-heading text-sm font-bold text-primary flex items-center gap-1.5">
              <Brain className="h-4 w-4" />
              1. Thoughts
            </span>
            {activeNode === 'thoughts' && (
              <span className="w-2 h-2 rounded-full bg-primary" />
            )}
          </div>
          <p className="text-[11px] text-ink-muted">Automatic mental narratives & assumptions</p>
        </button>

        <button
          onClick={() => setActiveNode('emotions')}
          className={`p-4 rounded-xl border text-left transition-all ${
            activeNode === 'emotions'
              ? 'border-secondary bg-secondary-tint/60 shadow-sm ring-2 ring-secondary/20'
              : 'border-primary/10 bg-sand-warm/60 hover:bg-sand-warm'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="font-heading text-sm font-bold text-secondary flex items-center gap-1.5">
              <Heart className="h-4 w-4" />
              2. Emotions
            </span>
            {activeNode === 'emotions' && (
              <span className="w-2 h-2 rounded-full bg-secondary" />
            )}
          </div>
          <p className="text-[11px] text-ink-muted">Somatic physical feelings & nervous arousal</p>
        </button>

        <button
          onClick={() => setActiveNode('behaviors')}
          className={`p-4 rounded-xl border text-left transition-all ${
            activeNode === 'behaviors'
              ? 'border-accent bg-accent-tint shadow-sm ring-2 ring-accent/30'
              : 'border-primary/10 bg-sand-warm/60 hover:bg-sand-warm'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="font-heading text-sm font-bold text-ink flex items-center gap-1.5">
              <Activity className="h-4 w-4 text-primary" />
              3. Behaviors
            </span>
            {activeNode === 'behaviors' && (
              <span className="w-2 h-2 rounded-full bg-accent" />
            )}
          </div>
          <p className="text-[11px] text-ink-muted">Actions, task avoidance & coping habits</p>
        </button>
      </div>

      {/* Dynamic Detail Card */}
      <motion.div
        key={activeNode}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="p-5 rounded-xl bg-sand-warm border border-primary/15 space-y-3"
      >
        <div className="flex items-center justify-between">
          <h4 className="font-heading text-base font-bold text-ink">
            {active.title}
          </h4>
          <span className="text-xs font-semibold text-primary">
            {active.headline}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-white border border-primary/10">
            <strong className="text-primary-deep block mb-1">Everyday Clinical Example:</strong>
            <p className="text-ink-muted italic">{active.example}</p>
          </div>
          <div className="p-3 rounded-lg bg-white border border-primary/10">
            <strong className="text-primary-deep block mb-1">Psychological Ripple Effect:</strong>
            <p className="text-ink-muted">{active.impact}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
