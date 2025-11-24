import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Kakan } from './Kakan';
import { FromShimocha, Shimocha, Toimen, Kamicha } from './Kakan.stories';

test('renders all kakan positions correctly', async () => {
  const page = await render(
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Self</div>
        <Kakan {...FromShimocha.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Shimocha</div>
        <Kakan {...Shimocha.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Toimen</div>
        <Kakan {...Toimen.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Kamicha</div>
        <Kakan {...Kamicha.args} />
      </div>
    </div>,
  );
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});
