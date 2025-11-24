import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Fuuros } from './Fuuros';
import { Self, Shimocha, Toimen, Kamicha } from './Fuuros.stories';

test('renders all fuuros positions correctly', async () => {
  const page = await render(
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Self</div>
        <Fuuros {...Self.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Shimocha</div>
        <Fuuros {...Shimocha.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Toimen</div>
        <Fuuros {...Toimen.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Kamicha</div>
        <Fuuros {...Kamicha.args} />
      </div>
    </div>,
  );
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});
