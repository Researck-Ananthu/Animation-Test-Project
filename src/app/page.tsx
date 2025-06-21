// src/app/page.tsx
'use client';
// import PrismCanvas from '@/components/ai/PrismCanvas';
import HeroSection from '@/components/Hero';
import HeaderSection from '@/components/Header';
export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* <PrismCanvas /> */}
      <HeaderSection></HeaderSection>
      <HeroSection />
    </main>
  );
}
