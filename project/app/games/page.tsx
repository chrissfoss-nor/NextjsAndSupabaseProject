// 1. React/Next imports
import React from 'react';

// 2. Internal component imports  
import { Navigation } from '@/components/ui/Navigation';
import { GameChooser } from '@/components/games/GameChooser';

export default function GamesPage() {
  return (
    <>
      <Navigation />
      <GameChooser />
    </>
  );
}