import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Overview } from './Overview';
import { Default } from './Overview.stories';

test('renders overview correctly', async () => {
  const page = await render(<Overview {...Default.args} />);
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});
