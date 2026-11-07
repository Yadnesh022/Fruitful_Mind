import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = 'Fruitful Mind | Discover The Curious You | Simran Mistry - Psychologist Pune',
  description = 'Safe, compassionate counselling for anxiety, overthinking, career growth, and psychology tuition in Kothrud, Pune by Simran Mistry (Master\'s in Counselling Psychology).',
  canonical = 'https://fruitfulmind.in',
  ogType = 'website',
  ogImage = '/icon-512.png',
  schemaType = 'ProfessionalService',
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: 'Fruitful Mind',
    alternateName: 'Fruitful Mind Wellness & Psychology Practice',
    description: description,
    founder: {
      '@type': 'Person',
      name: 'Simran Mistry',
      jobTitle: 'Psychologist & Counsellor',
      description: "Master's in Counselling Psychology, 3+ years clinical and counselling experience with an eclectic therapeutic approach.",
      alumniOf: "Master's in Counselling Psychology",
    },
    telephone: '+919769512475',
    email: 'simran.thefruitfulmind@gmail.com',
    url: 'https://fruitfulmind.in',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kothrud',
      addressRegion: 'Pune',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '18.5074',
      longitude: '73.8077',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Pune',
      },
      {
        '@type': 'Country',
        name: 'India',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Online Worldwide',
      },
    ],
    openingHours: 'Mo,Tu,We,Th,Fr,Sa 09:00-19:00',
    priceRange: '₹₹',
    medicalSpecialty: 'Psychological Counselling, Emotional Wellbeing, Career Mentorship',
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Fruitful Mind" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
