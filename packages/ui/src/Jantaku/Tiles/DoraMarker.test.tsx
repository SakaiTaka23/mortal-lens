import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { DoraMarker } from './DoraMarker';
import { Default, Multiple } from './DoraMarker.stories';

test('renders dora markers correctly', async () => {
  const page = await render(
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Default</div>
        <DoraMarker {...Default.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Multiple</div>
        <DoraMarker {...Multiple.args} />
      </div>
    </div>,
  );
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});
