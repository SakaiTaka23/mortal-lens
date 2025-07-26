import { LandingPage } from '@mortal-lens/core';
import { ParseInputSafe } from '@mortal-lens/parser';
import { Input } from '@mortal-lens/types';
import { Button } from '@mui/material';
import { useState } from 'react';
import { ChangeEvent } from 'react';

export const App = () => {
  const [parsedData, setParsedData] = useState<Input | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.name.endsWith('.json')) {
        alert('Only JSON file is uploadable');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        try {
          const contents = JSON.parse(reader.result as string) as unknown;
          const input = ParseInputSafe(contents);
          if (input.error) {
            alert('Failed to parse game data. Is this correct file?');
            return;
          }
          setParsedData(input.data);
        } catch {
          alert('Invalid JSON file.');
        }
      };
      reader.readAsText(file);
    }
  };

  if (parsedData) {
    return <LandingPage input={parsedData} />;
  }

  return (
    <>
      <input
        type='file'
        accept='.json'
        style={{ display: 'none' }}
        id='json-file-upload'
        onChange={handleFileChange}
      />
      <label htmlFor='json-file-upload'>
        <Button variant='contained' component='span'>
          Upload
        </Button>
      </label>
    </>
  );
};
