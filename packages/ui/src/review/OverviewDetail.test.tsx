import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { OverviewDetail } from './OverviewDetail';
import { Default } from './OverviewDetail.stories';

test('renders overview detail correctly', async () => {
  const page = await render(<OverviewDetail {...Default.args} />);
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});
