import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Ankan } from './Ankan';
import { Self, Shimocha, Toimen, Kamicha } from './Ankan.stories';

test('renders all ankan positions correctly', async () => {
  const page = await render(
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Self</div>
        <Ankan {...Self.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Shimocha</div>
        <Ankan {...Shimocha.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Toimen</div>
        <Ankan {...Toimen.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Kamicha</div>
        <Ankan {...Kamicha.args} />
      </div>
    </div>,
  );
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});
