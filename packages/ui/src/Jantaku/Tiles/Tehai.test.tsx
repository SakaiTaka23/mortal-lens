import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Tehai } from './Tehai';
import {
  SelfWithTsumo,
  ShimochaDefault,
  ToimenDefault,
  KamichaDefault,
} from './Tehai.stories';

test('renders tehai self position correctly', async () => {
  const page = await render(<Tehai {...SelfWithTsumo.args} />);
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});

test('renders tehai shimocha position correctly', async () => {
  const page = await render(<Tehai {...ShimochaDefault.args} />);
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});

test('renders tehai toimen position correctly', async () => {
  const page = await render(<Tehai {...ToimenDefault.args} />);
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});

test('renders tehai kamicha position correctly', async () => {
  const page = await render(<Tehai {...KamichaDefault.args} />);
  await expect(page.container.querySelector('div')).toMatchScreenshot();
});
