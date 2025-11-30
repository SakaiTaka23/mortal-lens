import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Control } from '.';
import { Default } from './Control.stories';

test('renders control correctly', async () => {
  const page = await render(<Control {...Default.args} />);
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});
