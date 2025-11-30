import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { ReviewWindow } from './ReviewWindow';
import { Default } from './ReviewWindow.stories';

test('renders review window correctly', async () => {
  const page = await render(<ReviewWindow {...Default.args} />);
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});
