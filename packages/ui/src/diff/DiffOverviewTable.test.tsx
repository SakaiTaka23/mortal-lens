import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { DiffOverviewTable } from '.';
import { OneJSONDiff } from './DiffOverviewTable.stories';

test('renders diff overview table correctly', async () => {
  const page = await render(<DiffOverviewTable {...OneJSONDiff.args} />);
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});
