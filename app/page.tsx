"use client";

import { Header } from '@/src/components/Header';
import { Hero } from '@/src/components/Hero';
import { About } from '@/src/components/About';
import { Projects } from '@/src/components/Projects';
import { Contact } from '@/src/components/Contact';
import { ScrollToTop } from '@/src/components/ScrollToTop';
import { LoadingScreen } from '@/src/components/LoadingScreen';
import { ScrollProgress } from '@/src/components/ScrollProgress';
import { useScrollReveal } from '@/src/hooks/useScrollReveal';
import { useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useScrollReveal();
  
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {!isLoading && (
        <>
          <Header />
          <ScrollProgress />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <ScrollToTop />
        </>
      )}
    </>
  );
}