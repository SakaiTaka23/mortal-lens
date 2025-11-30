import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { State } from './State';
import { WithPon, Shimocha, Toimen, Kamicha } from './State.stories';

test('renders state self position correctly', async () => {
  const page = await render(<State {...WithPon.args} />);
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});

test('renders state shimocha position correctly', async () => {
  const page = await render(<State {...Shimocha.args} />);
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});

test('renders state toimen position correctly', async () => {
  const page = await render(<State {...Toimen.args} />);
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});

test('renders state kamicha position correctly', async () => {
  const page = await render(<State {...Kamicha.args} />);
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});
