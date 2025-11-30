import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Tile } from './Tile';
import {
  Back,
  Dimmed,
  DoraMarker,
  Hidden,
  Highlight,
  KamichaDefault,
  KamichaNaki,
  SelfDefault,
  SelfNaki,
  ShimochaDefault,
  ShimochaNaki,
  ToimenDefault,
  ToimenNaki,
} from './Tile.stories';

test('renders tiles in all positions and naki states', async () => {
  const page = await render(
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Self</div>
        <Tile {...SelfDefault.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Shimocha</div>
        <Tile {...ShimochaDefault.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Toimen</div>
        <Tile {...ToimenDefault.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Kamicha</div>
        <Tile {...KamichaDefault.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Self Naki</div>
        <Tile {...SelfNaki.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>
          Shimocha Naki
        </div>
        <Tile {...ShimochaNaki.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Toimen Naki</div>
        <Tile {...ToimenNaki.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>
          Kamicha Naki
        </div>
        <Tile {...KamichaNaki.args} />
      </div>
    </div>,
  );
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});

test('renders different sizes and display states', async () => {
  const page = await render(
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Tehai Size</div>
        <Tile {...SelfDefault.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>
          DoraMarker Size
        </div>
        <Tile {...DoraMarker.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Hidden</div>
        <Tile {...Hidden.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Dimmed</div>
        <Tile {...Dimmed.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Highlight</div>
        <Tile {...Highlight.args} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>Back</div>
        <Tile {...Back.args} />
      </div>
    </div>,
  );
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});
