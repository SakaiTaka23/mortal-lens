import { PlayerID } from '@mjai/types';
import { ScoreOverview as ScoreOverviewType } from '@mortal-lens/types';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';

const getPlayerOrder = (selfIndex: PlayerID): string[] => {
  const positions = ['Self', 'Shimocha', 'Toimen', 'Kamicha'];
  const result: string[] = [];

  for (let i = 0; i < 4; i++) {
    result[(selfIndex + i) % 4] = positions[i];
  }

  return result;
};

export interface Props {
  overview: ScoreOverviewType[];
  playerID: PlayerID;
}

export const ScoreOverview: React.FC<Props> = ({ overview, playerID }) => {
  const header = getPlayerOrder(playerID);
  return (
    <TableContainer component={Paper}>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Round</TableCell>
            <TableCell>{header[0]}</TableCell>
            <TableCell>{header[1]}</TableCell>
            <TableCell>{header[2]}</TableCell>
            <TableCell>{header[3]}</TableCell>
            <TableCell>{header[0]}</TableCell>
            <TableCell>{header[1]}</TableCell>
            <TableCell>{header[2]}</TableCell>
            <TableCell>{header[3]}</TableCell>
            <TableCell>Kyotaku</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {overview.map((row, i) => (
            <TableRow key={i} hover>
              <TableCell>
                {row.bakaze}
                {row.kyoku} {row.honba}
              </TableCell>
              <TableCell>{row.scores[0]}</TableCell>
              <TableCell>{row.scores[1]}</TableCell>
              <TableCell>{row.scores[2]}</TableCell>
              <TableCell>{row.scores[3]}</TableCell>
              <TableCell>{row.deltas[0]}</TableCell>
              <TableCell>{row.deltas[1]}</TableCell>
              <TableCell>{row.deltas[2]}</TableCell>
              <TableCell>{row.deltas[3]}</TableCell>
              <TableCell>{row.kyotaku}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
