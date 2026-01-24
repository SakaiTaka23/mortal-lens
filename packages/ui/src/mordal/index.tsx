import { HoraDetail } from '@mortal-lens/types';
import {
  Box,
  Chip,
  Divider,
  Modal,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { PlayerID, Ryukyoku } from 'mjai-ts';

import { convertKyokuFormat } from '@/common/kyokuFormat';

const WIND_NAMES = ['東', '南', '西', '北'];
const POSITION_NAMES = ['自分', '下家', '対面', '上家'];

const getPlayerLabel = (
  targetPlayerID: PlayerID,
  selfPlayerID: PlayerID,
  oya: PlayerID,
): string => {
  const relativePosition = (targetPlayerID - selfPlayerID + 4) % 4;
  const wind = WIND_NAMES[(targetPlayerID - oya + 4) % 4];
  return `${POSITION_NAMES[relativePosition]} (${wind})`;
};

interface HoraScoreDisplayProps {
  horaDetail: HoraDetail;
  playerID: PlayerID;
  oya: PlayerID;
  index?: number;
}

const HoraScoreDisplay = ({
  horaDetail,
  playerID,
  oya,
  index,
}: HoraScoreDisplayProps) => {
  const { hora, agariResult } = horaDetail;
  const isTsumo = hora.actor === hora.target;
  const yakuDisplayText = (yaku: {
    name: string;
    value:
      | { type: 'han'; count: number }
      | { type: 'yakuman'; multiplier: number };
  }): string => {
    const { name, value } = yaku;
    if (value.type === 'yakuman') {
      return `${name} (役満×${value.multiplier})`;
    }
    return `${name} ${value.count}翻`;
  };

  return (
    <Paper
      sx={{
        p: 2,
        border: '1px solid',
        borderColor: 'primary.main',
      }}
    >
      <Stack spacing={2}>
        <Typography variant='h6' color='primary'>
          {index !== undefined ? `和了 #${index + 1}` : '和了'}
        </Typography>

        <Divider />
        <Box>
          <Typography variant='body1'>
            <strong>和了者:</strong> {getPlayerLabel(hora.actor, playerID, oya)}
          </Typography>
          <Typography variant='body1'>
            <strong>{isTsumo ? 'ツモ' : '放銃'}:</strong>{' '}
            {isTsumo ? '' : getPlayerLabel(hora.target, playerID, oya)}
          </Typography>
        </Box>
        <Box>
          <Typography variant='body2' sx={{ mb: 1 }}>
            <strong>役:</strong>
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 0.5,
            }}
          >
            {agariResult.yaku.map((yaku, idx) => (
              <Chip
                key={idx}
                label={yakuDisplayText(yaku)}
                size='small'
                color={yaku.value.type === 'yakuman' ? 'secondary' : 'default'}
              />
            ))}
          </Box>
        </Box>
        <Box>
          <Typography variant='body1'>
            <strong>
              {agariResult.han}翻 {agariResult.fu}符
            </strong>
            {agariResult.name && ` (${agariResult.name})`}
          </Typography>
        </Box>
        <Box>
          <Typography variant='body2' sx={{ mb: 1 }}>
            <strong>点数変動:</strong>
          </Typography>
          <Stack spacing={0.5}>
            {hora.deltas.map((delta, idx) => {
              const currentPlayerID = idx as PlayerID;
              return (
                <Typography
                  key={idx}
                  variant='body2'
                  sx={{
                    color:
                      delta > 0
                        ? 'success.main'
                        : delta < 0
                          ? 'error.main'
                          : 'text.primary',
                  }}
                >
                  {getPlayerLabel(currentPlayerID, playerID, oya)}:{' '}
                  {delta > 0 ? '+' : ''}
                  {delta}
                </Typography>
              );
            })}
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
};

interface RyukyokuScoreDisplayProps {
  ryukyoku: Ryukyoku;
  playerID: PlayerID;
  oya: PlayerID;
}

const RyukyokuScoreDisplay = ({
  ryukyoku,
  playerID,
  oya,
}: RyukyokuScoreDisplayProps) => {
  return (
    <Paper
      sx={{
        p: 2,
        border: '1px solid',
        borderColor: 'warning.main',
      }}
    >
      <Stack spacing={2}>
        {/* Header */}
        <Typography variant='h6' color='warning.main'>
          流局
        </Typography>

        <Divider />

        {/* Score Deltas */}
        <Box>
          <Typography variant='body2' sx={{ mb: 1 }}>
            <strong>点数変動:</strong>
          </Typography>
          <Stack spacing={0.5}>
            {ryukyoku.deltas.map((delta, idx) => {
              const currentPlayerID = idx as PlayerID;
              return (
                <Typography
                  key={idx}
                  variant='body2'
                  sx={{
                    color:
                      delta > 0
                        ? 'success.main'
                        : delta < 0
                          ? 'error.main'
                          : 'text.primary',
                  }}
                >
                  {getPlayerLabel(currentPlayerID, playerID, oya)}:{' '}
                  {delta > 0 ? '+' : ''}
                  {delta === 0 ? '±0' : delta}
                </Typography>
              );
            })}
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
};

export interface KyokuEndScoreModalProps {
  open: boolean;
  onClose: () => void;
  endStatus: (HoraDetail | Ryukyoku)[];
  playerID: PlayerID;
  bakaze: 'E' | 'S' | 'W';
  kyoku: number;
  honba: number;
  oya: PlayerID;
}

export const KyokuEndScoreModal = ({
  open,
  onClose,
  endStatus,
  playerID,
  bakaze,
  kyoku,
  honba,
  oya,
}: KyokuEndScoreModalProps) => {
  const horaCount = endStatus.filter((status) => 'hora' in status).length;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          maxHeight: '80vh',
          overflow: 'auto',
          bgcolor: 'background.paper',
          border: '2px solid',
          borderColor: 'primary.main',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant='h5' sx={{ mb: 3 }} color='primary'>
          局終了 - {convertKyokuFormat(bakaze, kyoku, honba)}
        </Typography>

        <Stack spacing={2}>
          {endStatus.map((status, index) => {
            if ('hora' in status) {
              return (
                <HoraScoreDisplay
                  key={index}
                  horaDetail={status}
                  playerID={playerID}
                  oya={oya}
                  index={horaCount > 1 ? index : undefined}
                />
              );
            } else {
              return (
                <RyukyokuScoreDisplay
                  key={index}
                  ryukyoku={status}
                  playerID={playerID}
                  oya={oya}
                />
              );
            }
          })}
        </Stack>
      </Box>
    </Modal>
  );
};
