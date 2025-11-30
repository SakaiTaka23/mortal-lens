import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { JantakuCenter } from '.';
import { Default } from './JantakuCenter.stories';

test('renders default state correctly', async () => {
  const page = await render(<JantakuCenter {...Default.args} />);

  await expect(page.container.querySelector('div')).toMatchScreenshot();
  await page.getByRole('button').click();
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});
