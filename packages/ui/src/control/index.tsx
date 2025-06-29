import { Button as MuiButton, Grid } from '@mui/material';
import React from 'react';

export interface Props {
  prevKyokuOnClick: () => void;
  nextKyokuOnClick: () => void;
  prevErrorOnClick: () => void;
  nextErrorOnClick: () => void;
  prevChoiceOnClick: () => void;
  nextChoiceOnClick: () => void;
  prevOnClick: () => void;
  nextOnClick: () => void;
  optionsOnClick: () => void;
  aboutOnClick: () => void;
}

export const Control: React.FC<Props> = ({
  prevKyokuOnClick,
  nextKyokuOnClick,
  prevErrorOnClick,
  nextErrorOnClick,
  prevChoiceOnClick,
  nextChoiceOnClick,
  prevOnClick,
  nextOnClick,
  optionsOnClick,
  aboutOnClick,
}) => {
  return (
    <Grid
      container
      direction='column'
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'deepskyblue',
        width: 'fit-content',
        padding: 1,
        borderRadius: 2,
      }}
    >
      <Grid>
        <Button message='Prev Round' onClick={prevKyokuOnClick} />
        <Button message='Next Round' onClick={nextKyokuOnClick} />
      </Grid>
      <Grid>
        <Button message='Prev Error' onClick={prevErrorOnClick} />
        <Button message='Next Error' onClick={nextErrorOnClick} />
      </Grid>
      <Grid>
        <Button message='Prev Choice' onClick={prevChoiceOnClick} />
        <Button message='Next Choice' onClick={nextChoiceOnClick} />
      </Grid>
      <Grid>
        <Button message='Prev' onClick={prevOnClick} />
        <Button message='Next' onClick={nextOnClick} />
      </Grid>
      <Grid>
        <Button message='Options' onClick={optionsOnClick} />
        <Button message='About' onClick={aboutOnClick} />
      </Grid>
    </Grid>
  );
};

interface ButtonProps {
  message: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ message, onClick }) => {
  return (
    <MuiButton
      variant='contained'
      color='primary'
      onClick={onClick}
      sx={{ width: 150, height: 50, margin: 1 }}
    >
      {message}
    </MuiButton>
  );
};
