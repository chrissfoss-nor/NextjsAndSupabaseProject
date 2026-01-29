// 1. React/Next imports
import React from 'react';

// 2. Internal component imports  
import { Navigation } from '@/components/ui/Navigation';
import { HeroSection } from '@/components/ui/HeroSection';

import { Watermark } from '@/components/ui/Watermark';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <Watermark />
    </>
  );
}
