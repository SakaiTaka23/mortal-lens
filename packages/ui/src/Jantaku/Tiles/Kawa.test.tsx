import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Kawa } from './Kawa';
import {
  MaxLengthSelf,
  MaxLengthShimocha,
  MaxLengthToimen,
  MaxLengthKamicha,
} from './Kawa.stories';

test('renders all kawa positions correctly', async () => {
  const page = await render(
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Self</div>
        <Kawa {...MaxLengthSelf.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Shimocha</div>
        <Kawa {...MaxLengthShimocha.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Toimen</div>
        <Kawa {...MaxLengthToimen.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Kamicha</div>
        <Kawa {...MaxLengthKamicha.args} />
      </div>
    </div>,
  );
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});
