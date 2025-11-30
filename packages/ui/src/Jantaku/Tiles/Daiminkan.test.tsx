import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Daiminkan } from './Daiminkan';
import { FromKamicha, Shimocha, Toimen, Kamicha } from './Daiminkan.stories';

test('renders all daiminkan positions correctly', async () => {
  const page = await render(
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Self</div>
        <Daiminkan {...FromKamicha.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Shimocha</div>
        <Daiminkan {...Shimocha.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Toimen</div>
        <Daiminkan {...Toimen.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Kamicha</div>
        <Daiminkan {...Kamicha.args} />
      </div>
    </div>,
  );
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});
