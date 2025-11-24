import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Pon } from './Pon';
import { FromKamicha, Shimocha, Toimen, Kamicha } from './Pon.stories';

test('renders all pon positions correctly', async () => {
  const page = await render(
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Self</div>
        <Pon {...FromKamicha.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Shimocha</div>
        <Pon {...Shimocha.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Toimen</div>
        <Pon {...Toimen.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Kamicha</div>
        <Pon {...Kamicha.args} />
      </div>
    </div>,
  );
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});
