import { MetaState, ReviewMetaState } from '@mortal-lens/types';
import {
  Box,
  Button as MuiButton,
  Grid,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import React, { useState } from 'react';

export interface Props {
  meta: MetaState;
  reviewMeta: ReviewMetaState;
  prevKyokuOnClick: () => void;
  nextKyokuOnClick: () => void;
  prevErrorOnClick: () => void;
  nextErrorOnClick: () => void;
  prevChoiceOnClick: () => void;
  nextChoiceOnClick: () => void;
  prevOnClick: () => void;
  nextOnClick: () => void;
  toggleHidden: () => void;
}

export const Control: React.FC<Props> = ({
  meta,
  reviewMeta,
  prevKyokuOnClick,
  nextKyokuOnClick,
  prevErrorOnClick,
  nextErrorOnClick,
  prevChoiceOnClick,
  nextChoiceOnClick,
  prevOnClick,
  nextOnClick,
  toggleHidden,
}) => {
  const [openAbout, setOpenAbout] = useState(false);
  const handleOpenAbout = () => setOpenAbout(true);
  const handleCloseAbout = () => setOpenAbout(false);

  const [openSetting, setOpenSetting] = useState(false);
  const handleOpenSetting = () => setOpenSetting(true);
  const handleCloseSetting = () => setOpenSetting(false);

  return (
    <Grid
      container
      direction='column'
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        width: 220,
        padding: 1,
        borderRadius: 2,
      }}
      component={Paper}
    >
      <Grid direction='row'>
        <Button message='Prev Round' onClick={prevKyokuOnClick} />
        <Button message='Next Round' onClick={nextKyokuOnClick} />
      </Grid>
      <Grid direction='row'>
        <Button message='Prev Error' onClick={prevErrorOnClick} />
        <Button message='Next Error' onClick={nextErrorOnClick} />
      </Grid>
      <Grid direction='row'>
        <Button message='Prev Choice' onClick={prevChoiceOnClick} />
        <Button message='Next Choice' onClick={nextChoiceOnClick} />
      </Grid>
      <Grid direction='row'>
        <Button message='Prev' onClick={prevOnClick} />
        <Button message='Next' onClick={nextOnClick} />
      </Grid>
      <Grid direction='row'>
        <Button message='Setting' onClick={handleOpenSetting} />
        <SettingInfo
          open={openSetting}
          handleClose={handleCloseSetting}
          toggleHidden={toggleHidden}
        />
        <Button message='About' onClick={handleOpenAbout} />
        <AboutInfo
          open={openAbout}
          handleClose={handleCloseAbout}
          meta={meta}
          reviewMeta={reviewMeta}
        />
      </Grid>
    </Grid>
  );
};

interface ButtonProps {
  message: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ message, onClick }) => {
  return (
    <MuiButton
      variant='contained'
      color='primary'
      onClick={onClick}
      sx={{ width: 90, height: 50, margin: 0.5 }}
    >
      {message}
    </MuiButton>
  );
};

interface AboutProps {
  open: boolean;
  handleClose: () => void;
  meta: MetaState;
  reviewMeta: ReviewMetaState;
}

const AboutInfo: React.FC<AboutProps> = ({
  open,
  handleClose,
  meta,
  reviewMeta,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Engine</TableCell>
                <TableCell>{meta.engine}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Model Tag</TableCell>
                <TableCell>{reviewMeta.modelTag}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Review Version</TableCell>
                <TableCell>{meta.version}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Game Length</TableCell>
                <TableCell>{meta.gameLength}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Reading Time</TableCell>
                <TableCell>{meta.loadingTime}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Review Time</TableCell>
                <TableCell>{meta.reviewTime}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Temperature</TableCell>
                <TableCell>{reviewMeta.temperature}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Match Percentage</TableCell>
                <TableCell>
                  {reviewMeta.totalMatches}/{reviewMeta.totalReviewed} ={' '}
                  {(
                    (reviewMeta.totalMatches / reviewMeta.totalReviewed) *
                    100
                  ).toFixed(2)}
                  %
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rating</TableCell>
                <TableCell>{(reviewMeta.rating * 100).toFixed(2)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
};

interface SettingsProps {
  open: boolean;
  handleClose: () => void;
  toggleHidden: () => void;
}

const SettingInfo: React.FC<SettingsProps> = ({
  open,
  handleClose,
  toggleHidden,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Button message='Hide Tile' onClick={toggleHidden} />
    </Modal>
  );
};
