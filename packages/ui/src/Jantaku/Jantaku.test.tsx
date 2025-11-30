import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Jantaku } from '.';
import { Default } from './Jantaku.stories';

test('renders jantaku correctly', async () => {
  const page = await render(<Jantaku {...Default.args} />);
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});
