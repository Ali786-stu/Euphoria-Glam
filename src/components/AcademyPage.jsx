import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AcademyBanner from './AcademyBanner';
import AcademyHero from './AcademyHero';
import AcademyWhyJoinUs from './AcademyWhyJoinUs';
import AcademyCourses from './AcademyCourses';
import AcademyStats from './AcademyStats';

export default function AcademyPage() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-cream-bg min-h-screen"> 
        <AcademyBanner />
        <AcademyHero />
        <AcademyWhyJoinUs />
        <AcademyCourses />
        <AcademyStats />
      </main>
      <Footer />
    </>
  );
}
