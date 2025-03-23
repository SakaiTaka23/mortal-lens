import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { useEffect, useState } from 'react';

import { GameSummary } from '@/components/GameSummary';
import { KyokuSummary } from '@/components/KyokuSummary';
import { NakiEventFilter } from '@/event/NakiEvent';
import { RiichiEventFilter } from '@/event/RiichiEvent';
import { HanchanFilter } from '@/filter/HanchanFilter';
import { KyokuFilter } from '@/filter/KyokuFilter';
import { Input } from '@/types/input';
import { KyokuDiff, RoundDiff } from '@/types/output/RoundDiff';

export const App = () => {
  const [roundDiffs, setRoundDiffs] = useState<RoundDiff[]>([]);
  const [kyokuDiffs, setKyokuDiffs] = useState<KyokuDiff[]>([]);

  useEffect(() => {
    const handleUpdate = (event: CustomEvent<Input>) => {
      const re = RiichiEventFilter(
        event.detail.mjai_log,
        event.detail.playerID,
      );
      const ne = NakiEventFilter(event.detail.mjai_log, event.detail.playerID);

      const rd = HanchanFilter(event.detail.review.kyokus);
      setRoundDiffs(rd);
      const kd = KyokuFilter(
        event.detail.review.kyokus,
        event.detail.playerID,
        re,
        ne,
      );
      setKyokuDiffs(kd);
    };

    window.addEventListener('input', handleUpdate as EventListener);
    return () => {
      window.removeEventListener('input', handleUpdate as EventListener);
    };
  }, []);

  return (
    <>
      <Accordion>
        <AccordionSummary>Round Diffs</AccordionSummary>
        <AccordionDetails>
          <GameSummary roundDiffs={roundDiffs} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Kyoku Diffs</AccordionSummary>
        <AccordionDetails>
          <KyokuSummary kyokuDiffs={kyokuDiffs} />
        </AccordionDetails>
      </Accordion>
    </>
  );
};
