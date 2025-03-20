import { useEffect, useState } from 'react';

import { GameSummary } from '@/components/GameSummary';
import { HanchanFilter } from '@/filter/HanchanFilter';
import { Input } from '@/types/input';
import { RoundDiff } from '@/types/output/RoundDiff';

export const App = () => {
  const [roundDiffs, setRoundDiffs] = useState<RoundDiff[]>([]);

  useEffect(() => {
    const handleUpdate = (event: CustomEvent<Input>) => {
      const res = HanchanFilter(event.detail.review.kyokus);
      setRoundDiffs(res);
    };

    window.addEventListener('input', handleUpdate as EventListener);
    return () => {
      window.removeEventListener('input', handleUpdate as EventListener);
    };
  }, []);

  return (
    <>
      <GameSummary roundDiffs={roundDiffs} />
    </>
  );
};
